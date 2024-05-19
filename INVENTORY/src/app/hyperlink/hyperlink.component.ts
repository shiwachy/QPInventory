import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { linkData } from './hyperlink.model';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-hyperlink',
  templateUrl: './hyperlink.component.html',
  styleUrls: ['./hyperlink.component.css']
})
export class HyperlinkComponent implements OnInit {
  private readonly notifier: NotifierService;
  responseReceived=false;
  isSuccess=false;
  form: FormGroup;
  dataToAdd:linkData = new linkData();
  actionName:string="Submit"
  actionControlFlag:boolean = false;

  searchTerm: string = '';
  keywords: string[] = [];
  filteredKeywords: string[] = [];
  showAutocomplete: boolean = false;

  constructor(private fb: FormBuilder,private http: HttpClient,private notifierService: NotifierService) {
    this.notifier = notifierService;
    this.http.get<string[]>('https://localhost:7295/api/Hyperlink/GetKeywords')
    .subscribe((data: string[]) => {
      this.keywords = data;
    });
   }

  ngOnInit() {
    this.form = this.fb.group({
      hyperlink: ['', Validators.required],
      keywords: this.fb.array([
        this.fb.control('')
      ])
    });
  }

  get keywordForms() {
    return this.form.get('keywords') as FormArray;
  }

  addKeyword() {
    //this.keywordForms.push(this.fb.control(''));
    if(this.searchTerm!=""){
      this.dataToAdd.keyWords.push(this.searchTerm.toLocaleLowerCase());
      this.searchTerm = "";
    } else{
      alert("Empty Field");
    }
   
  }

  removeKeyword(key:string) {
    //this.keywordForms.removeAt(index);
    let index = this.dataToAdd.keyWords.indexOf(key);
    this.dataToAdd.keyWords.splice(index,1);
  }
  
  onSearchInputChange(): void {
    this.showAutocomplete = this.searchTerm.length > 0;
    this.filteredKeywords = this.keywords.filter(keyword =>
    keyword.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  onKeywordSelected(keyword: string): void {
    this.searchTerm = keyword;
    this.showAutocomplete = false;
    // Do something with the selected keyword, like search or perform an action
  }

  onHyperlinkEntered(){
    this.dataToAdd.keyWords.length=0;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    if(this.dataToAdd.hyperlink.length>0){
      this.http.post("https://localhost:7295/api/Hyperlink/GetLinkInfo",JSON.stringify(this.dataToAdd.hyperlink), { headers: headers })
        .subscribe((response)=>this.onLinkFound(response),
         (error)=>{
           this.actionName = "Submit";
           this.actionControlFlag = false;
      })
    }
  }

  onLinkFound(res:any){
      var keywordLst = res;
      for(let i=0; i<keywordLst.length; i++){
        console.log(keywordLst[i]);
        this.dataToAdd.keyWords.push(keywordLst[i]); 
      }
      this.actionControlFlag = true;
      this.actionName = "UPDATE"
  }

  actionControl(){
    if(!this.actionControlFlag){
        this.onSubmit();
    }else{
        this.onUpdate();
    }
  }

  onUpdate(){
    this.http.put('https://localhost:7295/api/Hyperlink/Update', this.dataToAdd).subscribe(
        (response)=>{
          this.dataToAdd.keyWords.length=0;
          this.dataToAdd.hyperlink = "";
          alert("Updated Successfully");
        },(error) => {
           alert("Something went wrong");
        });        
  }

  onSubmit() {
    this.responseReceived=false;
    this.isSuccess=false;
    //var data = JSON.stringify(this.dataToAdd);
    if (this.dataToAdd.hyperlink!="" || this.dataToAdd.keyWords!=null) {
      // Send POST request to API
      //const formData = this.form.value;
      this.http.post('https://localhost:7295/api/Hyperlink', this.dataToAdd).subscribe(
        (response) => this.success(response),
        (error) => this.handleError(error)
      ); 
    } else {
      // Mark all form controls as touched to display validation errors
      //this.form.markAsTouched();
      alert("some fields are empty");
    }
  }
  success(response) {
    this.dataToAdd.hyperlink="";
    this.dataToAdd.keyWords=[];
    this.notifier.notify('success', 'Successful');
    console.log('Successfully Stored:', response);
  }
   
  handleError(error: any) {
    this.notifier.notify('error', 'Failed');
    console.error('Error Response:', error);
  }


}
