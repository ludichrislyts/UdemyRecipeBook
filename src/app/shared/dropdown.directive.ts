import { Directive, ElementRef, HostListener, Renderer2, HostBinding } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  constructor() {    
  }
  @HostBinding('class.open') menuOpen = false;

  @HostListener('click') toggleOpen() {
    this.menuOpen = !this.menuOpen;
  }
}