import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const urlGetData = 'http://localhost:8080/api/v1/get-data';

@Injectable({
  providedIn: 'root'
})
export class TradingService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(urlGetData);
  }
}
