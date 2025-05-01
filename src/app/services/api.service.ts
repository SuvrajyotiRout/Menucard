import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://qrbackend-5.onrender.com';

  constructor(private http: HttpClient) { }

  Getmenu(): Observable<any> {

    return this.http.get(`${this.baseUrl}/generate-qr/get-menu`)
  }
}
