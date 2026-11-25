import { Component, inject, OnInit } from '@angular/core';
import { PostService } from '../post-service';
import { PostModel } from '../posts-model';

@Component({
  imports: [],
  selector: 'app-post',
  styleUrl: './post.scss',
  templateUrl: './post.html',
})
export class Post implements OnInit {

  protected postService = inject(PostService);
  protected posts : PostModel[] = [];

  ngOnInit() {
    this.listAll();
  }

  listAll(){
    debugger
    // y
  }

}
