import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { DemoComponent } from "./demo/demo.component";
import { CalcComponent } from "./calc/calc.component";
import { ArrdemoComponent } from "./arrdemo/arrdemo.component";
import { HighlighterDirective } from "./highlighter.directive";
import { CardDirective } from "./card.directive";
import { FilterPipe } from "./filter.pipe";
import { MenuComponent } from "./menu/menu.component";
import { routing } from "./app.routing";
import { HttpClientModule } from "@angular/common/http";
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DesignationComponent } from './designation/designation.component';
import { AdddesignationComponent } from './designation/adddesignation/adddesignation.component';
import { EditDesignationComponent } from './designation/editdesignation/editdesignation.component';
@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    CalcComponent,
    ArrdemoComponent,
    HighlighterDirective,
    CardDirective,
    FilterPipe,
    MenuComponent,
    PagenotfoundComponent,
    DesignationComponent,
    AdddesignationComponent,
    EditDesignationComponent

  ],
  imports: [BrowserModule, FormsModule, routing,  HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
