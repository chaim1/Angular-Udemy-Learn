import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredien.model';
import { ShppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private slService: ShppingListService) { }

  ngOnInit() {
  }
  onAddItem(form: NgForm){
    const value = form.value;
    const newIngridient = new Ingredient(value.name, value.amount);
    this.slService.addIngtredient(newIngridient);
  }
}
