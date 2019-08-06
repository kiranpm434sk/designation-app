import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";
import { Designation } from "./designation";
import { DesignationdataService } from './designationdata.service';
@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent implements OnInit {
  name:string="";
  description:string="";

  arr: Designation[] = [
  ];
  name1: string = "watch";
  @Input()  categoryName:string="";
 @Output() jinal=new EventEmitter();
  constructor(private _data: DesignationdataService,private _router:Router) {}

  ngOnInit() {
    this._data.getAllDesignation().subscribe(
      (data: Designation[]) => {
        this.arr = data;
      },
      function(error) {
        alert(error);
      },
      function() {}
    );
  }
  onDesignationDelete(item: Designation) {
    this._data.deleteDesignation(item.Name).subscribe((data: any) => {
      this.arr.splice(this.arr.indexOf(item), 1);
    });
  }
  onDesignationEdit(item:Designation){
    this._router.navigate(['/editdesignation',item.Name]);
  }
  onSearchClick(searchTerm){
    this.jinal.emit(searchTerm);
}

}
