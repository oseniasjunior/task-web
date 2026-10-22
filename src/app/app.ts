import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Fruits } from './fruits/fruits';
import { Employee } from './employee/employee';

@Component({
  imports: [RouterOutlet, FormsModule,  Employee],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected title = signal('tasks-web');
  protected user = signal({'name': 'Osenias', 'age': 38});
  // protected title = 'Olá mundo';

  clique(){
    this.title.set('Valor alterado');
  }

}
