import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = '/api/v1/employee';

  constructor(private httpClient: HttpClient) {}

  getData() {
    return this.httpClient.get(this.apiUrl);
  }

  insertData(data: any) {
    return this.httpClient.post(this.apiUrl, data);
  }

  deleteData(id: any) {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }

  getEmployeeById(id: any) {
    return this.httpClient.get(`${this.apiUrl}/${id}`);
  }

  updateEmployee(id: any, data: any) {
    return this.httpClient.put(`${this.apiUrl}/${id}`, data);
  }
}
