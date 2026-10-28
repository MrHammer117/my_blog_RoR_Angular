
import {
  Component,
  OnInit,
  OnDestroy,
  inject
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../services/post.service';
import { Post } from '../post';

@Component({
  selector: 'app-blog-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit, OnDestroy {
  private postService = inject(PostService);

  posts: Post[] = [];
  loading = true;
  error = '';

  constructor() {
    console.log('BlogComponent CREATED', Date.now());
  }

  ngOnInit(): void {
    console.log('BlogComponent initialized');

    this.postService.getPosts().subscribe({
      next: (response: Post[]) => {
        console.log('Received posts:', response.length);

        this.posts = response;
        this.loading = false;

        console.log('Assigned posts:', this.posts.length);
      },
      error: (err: unknown) => {
        console.error('Request failed:', err);
        this.error = 'Unable to load posts.';
        this.loading = false;
      }
    });
  }

  ngOnDestroy(): void {
    console.log('BlogComponent DESTROYED', Date.now());
  }
}

