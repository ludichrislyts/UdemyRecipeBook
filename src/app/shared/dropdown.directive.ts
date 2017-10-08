import {
  Directive,
  HostListener,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  constructor() {}
  @HostBinding('class.open') menuOpen = false;

  @HostListener('click')
  toggleOpen() {
    this.menuOpen = !this.menuOpen;
  }
}
