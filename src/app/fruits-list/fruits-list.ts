import { Component, Input, signal, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-fruits-list',
  styleUrl: './fruits-list.scss',
  templateUrl: './fruits-list.html',
})
export class FruitsList {

  @Input() fruitName: string = '';
  protected fruits = signal<string[]>([]);

  ngOnChanges(changes : SimpleChanges) {
    if(changes) {
      console.log(changes);
    }
  }

}
