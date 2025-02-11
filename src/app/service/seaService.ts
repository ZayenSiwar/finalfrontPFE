import { HttpClient } from '@angular/common/http';
import { Component, Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


  @Injectable({
    providedIn: 'root'
  })
 
export class seaService {
    
  private apiUrl : string = 'http://localhost:8089';

   
    changePassword(pid: any,password:any):Observable<any> {
        return this.http.post(this.apiUrl + "/api/auth/"+pid+"/"+password,{});
      }
      constructor(private http: HttpClient) {}

      forgotPassword(body: { authEmailId: string }): Observable<{ authId: string }> {
        return this.http.post<{ authId: string }>(`${this.apiUrl}/forgot-password`, body);
      }
}
