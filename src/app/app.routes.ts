import { Routes } from '@angular/router';
import { LoggedUser } from './logged-user';
import { Fruits } from './fruits/fruits';
import { Post } from './post/post';

export const routes: Routes = [
  { path: 'fruits', component: Fruits },
  { path: 'posts', component: Post },
];
