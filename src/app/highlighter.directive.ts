import { Directive, HostListener, HostBinding } from '@angular/core';
import { NgModuleResolver } from '@angular/compiler';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  constructor() {}
  @HostListener("mouseover")
  mouseover() {
    this.backgroundColor='red';
  }
  @HostListener("mouseleave")
  mouseleave() {
    this.backgroundColor='white';
  }
  @HostBinding('style.backgroundColor')
  backgroundColor:string;
}
