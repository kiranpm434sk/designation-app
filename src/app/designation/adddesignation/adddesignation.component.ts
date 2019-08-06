import { Component, OnInit } from '@angular/core';
import { Designation } from '../designation';
import { DesignationdataService } from '../designationdata.service';

@Component({
  selector: 'app-adddesignation',
  templateUrl: './adddesignation.component.html',
  styleUrls: ['./adddesignation.component.css']
})
export class AdddesignationComponent implements OnInit {

  arr: Designation[] = [];
  constructor(private _data: DesignationdataService) {}

  ngOnInit() {}
  onSaveDesignation(f) {
    this._data.addDesignation(f.value).subscribe((data: any) => {
      console.log(data);
      alert('updated');
    });
  }

}
