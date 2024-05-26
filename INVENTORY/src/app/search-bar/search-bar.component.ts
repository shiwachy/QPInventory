import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NotifierService } from 'angular-notifier';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  private readonly notifier: NotifierService;
  responseReceived=false;
  isSuccess=false;

  searchTerm: string = '';
  keywords: string[] = [];
  filteredKeywords: string[] = [];
  showAutocomplete: boolean = false;
  urls: string[] = [];
  constructor(private http: HttpClient,
    private notifierService: NotifierService,
    ) { 
    this.notifier = notifierService;
    this.http.get<string[]>('/api/Hyperlink/GetKeywords')
    .subscribe((data: string[]) => {
      this.keywords = data;
    });
  }

  ngOnInit(): void {
    // Fetch keywords from backend
  
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

  getLink(): void {
    this.responseReceived=false;
    this.isSuccess=false;
    // Assuming you want to send the searchTerm to the API controller
     //const dataToSend =this.searchTerm;
     const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    // Assuming your API endpoint is '/api/getLink' , { headers: headers }
    this.http.post('/api/Hyperlink/GetLinks',JSON.stringify(this.searchTerm), { headers: headers }).subscribe(
      (response) => this.success(response),
      (error) => this.handleError(error)
    ); 

  }
  success(response) {
    if(response.length<=0){
      alert("No Links Found with given keywords");
      this.searchTerm="";
    }
    this.urls = response;
  }
   
  handleError(error: any) {
    this.notifier.notify('error', 'Failed');
    console.error('Error Response:', error);
  }

    //copy link
    copyValue = async (url)=> {
      try {
        if ((navigator as any).clipboard) {
          await (navigator as any).clipboard.writeText(url);
          alert('Link copied to clipboard');
        } else {
          alert('Clipboard API not supported');
        }
      } catch (err) {
        alert('Failed to copy: ' + err);
      }
    }
  
}

