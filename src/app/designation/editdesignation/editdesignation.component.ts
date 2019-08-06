import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DesignationdataService } from '../designationdata.service';
import { Designation } from '../designation';
@Component({
  selector: 'app-editdesignation',
  templateUrl: './editdesignation.component.html',
  styleUrls: ['./editdesignation.component.css']
})
export class EditDesignationComponent implements OnInit {
  name: string = "";
  desc: string = "";

  constructor(
    private _act: ActivatedRoute,
    private _data: DesignationdataService
  ) {}

  ngOnInit() {
    this.name = this._act.snapshot.params["Name"];

    this._data.getDesignationByName(this.name).subscribe(
      (data: Designation[]) => {
        // this.name =data[0].Name;
        this.desc=data[0].Description;

    });
  }
  onEditDesignation(f){
      this._data.editDesignation(this.name,f.value).subscribe(
        (data:any)=>{
          alert('updated');
        }
      );
  }
}
