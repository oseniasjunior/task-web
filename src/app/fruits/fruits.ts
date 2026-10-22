import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FruitsList } from '../fruits-list/fruits-list';
import { LoggedUser } from '../logged-user';

@Component({
  imports: [
    FormsModule,
    FruitsList
  ],
  selector: 'app-fruits',
  styleUrl: './fruits.scss',
  templateUrl: './fruits.html',
})
export class Fruits {

  protected fruitName = signal('');
  protected user = inject(LoggedUser);


  add(){

    // this.fruits.update(oldFruits => [...oldFruits, this.fruitName()]);
    this.fruitName.set('');
  }

}
