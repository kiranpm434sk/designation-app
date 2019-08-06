import { Routes, RouterModule } from "@angular/router";
import { DemoComponent } from "./demo/demo.component";
// import { ArrdemoComponent } from "./arrdemo/arrdemo.component";
// import { CalcComponent } from "./calc/calc.component";
// import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DesignationComponent } from './designation/designation.component';
import { AdddesignationComponent } from './designation/adddesignation/adddesignation.component';
import { EditDesignationComponent } from './designation/editdesignation/editdesignation.component';

const arr: Routes = [
  // { path: "", component: DemoComponent },
  { path: "", component: DesignationComponent },
  {path:'adddesignation',component:AdddesignationComponent},
  {path:'editdesignation/:Name',component:EditDesignationComponent}
  // { path: "arrdemo", component: ArrdemoComponent },
  // { path: "calc", component: CalcComponent },
  // {path:'pagenotfound',component:PagenotfoundComponent},
  // {path:'**',redirectTo:'/pagenotfound'}

];

export const routing = RouterModule.forRoot(arr);
