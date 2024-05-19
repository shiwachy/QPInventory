import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, startWith, switchMap, tap } from 'rxjs/operators';
import { DataService } from '../data.service'; 
import { Subject } from 'rxjs';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  keyword = new FormControl();
  suggestions: string[] = [];
  filteredSuggestions: string[] = [];
  private keywordInput$ = new Subject<string>();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.keywordInput$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(keyword => console.log('Keyword input:', keyword)), // Log the keyword input
      switchMap(keyword => this.dataService.getSuggestions(keyword)),
      tap(response => console.log('Response from backend:', response)) // Logging the response
    ).subscribe(suggestions => {
      this.suggestions = suggestions;
      this.filteredSuggestions = this.suggestions.slice();
    });

    // Log a message to indicate that the HTTP GET call is being made
    console.log('HTTP GET call initiated');
  }

  onInputChange(event): void {
    const keyword = event.target.value.trim();
    this.keywordInput$.next(keyword);
  }

  onSelectKeyword(keyword: string): void {
    this.keyword.setValue(keyword);
    this.keywordInput$.next(keyword);
  }
}
