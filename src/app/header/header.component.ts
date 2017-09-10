import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private router: Router) {}
  // @Output() featureSelected = new EventEmitter<string>();
  // onSelect(feature: string) {
  //   this.featureSelected.emit(feature);
  // }
}