import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
// Http testing module and mocking controller 
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// Http imports
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

export interface order {
  num: number,
  item: number,
  total: number,
}

export interface dataItem {
  id: number,
  name: string,
  state: string,
  orders: order[],
}

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {
  readonly ROOT_URL;

  constructor(
    private http: HttpClient
  ) {
    this.ROOT_URL = 'http://localhost:3000';
  }

  get(uri: string) {
    return this.http.get<dataItem>(`${this.ROOT_URL}/${uri}`);
  }

  getItem() {
    return this.http.get<dataItem>(`${this.ROOT_URL}/data`);
  }
}
