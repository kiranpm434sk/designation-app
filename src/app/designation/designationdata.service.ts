import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class DesignationdataService {
  Designation: string = " ";
  constructor(private _http: HttpClient) {}

  getAllDesignation() {
    return this._http.get(this.Designation);
  }
  getDesignationByName(Name) {
    return this._http.get(this.Designation + Name);
  }
  addDesignation(item) {
    let body = JSON.stringify(item);
    let head = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.post(this.Designation, body, { headers: head });
  }
  editDesignation(Name,item) {
    let body = JSON.stringify(item);
    let head = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.put(this.Designation + Name, body, { headers: head });
  }
  deleteDesignation(Name) {
    let head = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.delete(this.Designation + Name, { headers: head });
  }
  open(){
    alert('updated');
  }
}
