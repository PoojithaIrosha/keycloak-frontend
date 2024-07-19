import {Component, inject, OnInit} from '@angular/core';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {Post, PostsService} from "./posts.service";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {AsyncPipe, NgFor} from "@angular/common";
import {MatMenu, MatMenuTrigger} from "@angular/material/menu";
import {Observable} from "rxjs";

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    AsyncPipe,
    NgFor,
    MatMenu,
    MatMenuTrigger
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  private postService = inject(PostsService);

  posts$: Observable<Post[]> | undefined;

  ngOnInit() {
    this.posts$ = this.postService.getPosts();
  }

}
