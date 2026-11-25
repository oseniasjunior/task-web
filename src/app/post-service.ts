import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostModel } from './posts-model';



@Service()
export class PostService {

  protected http = inject(HttpClient);

  public listAll() : Observable<PostModel[]>{
    return this.http.get<PostModel[]>('https://jsonplaceholder.typicode.com/posts');
  }

}
