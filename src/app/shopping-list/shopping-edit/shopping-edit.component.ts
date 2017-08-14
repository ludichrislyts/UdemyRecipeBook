import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('ingredientName')  ingredientName: ElementRef;
  @ViewChild('ingredientAmount')  ingredientAmount: ElementRef;
  @Output() itemAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  addShoppingItem() {
    this.itemAdded.emit(new Ingredient(this.ingredientName.nativeElement.value, this.ingredientAmount.nativeElement.value));
  }

}
