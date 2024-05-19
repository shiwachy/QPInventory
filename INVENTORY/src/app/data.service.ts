import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getSuggestions(keyword: string): Observable<string[]> {
    const url = 'https://localhost:7004/api/Inventory/getkeywords?keyword=' + keyword;
    console.log('GET request URL:', url); // Log the URL being requested
    return this.http.get<string[]>(url);
  }
}
