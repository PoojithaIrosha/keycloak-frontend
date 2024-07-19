import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {shareReplay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private apiUrl: string = "http://localhost:8081/api/v1/posts";

  constructor(
    private http: HttpClient
  ) { }

  getPosts() {
    return this.http.get<Post[]>(this.apiUrl).pipe(shareReplay(1));
  }
}

export interface Post {
  userId: number,
  id: number;
  title: string;
  body: string;
}
