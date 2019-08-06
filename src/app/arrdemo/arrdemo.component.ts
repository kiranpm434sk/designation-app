import { Component, OnInit } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-arrdemo',
  templateUrl: './arrdemo.component.html',
  styleUrls: ['./arrdemo.component.css']
})
export class ArrdemoComponent implements OnInit {
  term:string='';
  dt:Date=new Date(2019,6,30);
  no:number=1.25332465;
  flag:boolean=true;
  dept_id:number=2;
  id:string='';
  title:string='';
  status:string='';
  arrtask:Task[]=[
  new Task('1','push your code','done'),
  new Task('2','training z going good','done')
];
constructor() {}
  ngOnInit() {
  }
  deleteTask(item:Task){
    //console.log(item);

    this.arrtask.splice(this.arrtask.indexOf(item),1);
  }
  onEditTask(item) {
    if(item.status=='pending'){
      item.status='done';
    }
    else{
      item.status='pending';
    }
  }
  onAddTaskClick(){

      this.arrtask.push(new Task(this.id,this.title,this.status));
      this.id="";
      this.title="";
      this.status="";
}
}
