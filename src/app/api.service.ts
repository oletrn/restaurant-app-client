import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from './../environments/environment.development';
import { Observable } from 'rxjs';
import { ApiEndpoints } from './api-endpoints.enum';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly apiBaseUrl = environment.apiBaseUrl;
  private http = inject(HttpClient);

  getDishes$(): Observable<any> {
    return this.http.get(this.apiBaseUrl + ApiEndpoints.GetDishes);
  }
}
