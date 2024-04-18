import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { College } from './college'; // Import the College interface

@Injectable({
  providedIn: 'root'
})
export class CollegeDataService {
  private dataUrl: string = 'your_data_url_here'; // Replace 'your_data_url_here' with the actual URL

  constructor(private http: HttpClient) {}

  getCollegeData(): Observable<College> {
    return this.http.get<College>(this.dataUrl);
  }
}
//final
