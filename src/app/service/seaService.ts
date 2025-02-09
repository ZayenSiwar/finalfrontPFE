import { HttpClient } from '@angular/common/http';
import { Component, Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


  @Injectable({
    providedIn: 'root'
  })
 
export class seaService {
    forgotPassword(email: string) {
      throw new Error('Method not implemented.');
    }
    url: string = 'http://localhost:8089';

    constructor(
      private http: HttpClient,
      private router : Router
    ) {}
    changePassword(pid: any,password:any):Observable<any> {
        return this.http.post(this.url + "/api/patient/"+pid+"/"+password,{});
      }
    
}
