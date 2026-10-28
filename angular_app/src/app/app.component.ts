import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService } from './services/blog.service';
import { Post } from './models/post';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private blogService = inject(BlogService);

  posts: Post[] = [];
  errorMessage = '';

  ngOnInit(): void {
    this.blogService.getPosts().subscribe({
      next: posts => this.posts = posts,
      error: () => {
        this.errorMessage = 'Unable to load blog posts.';
      }
    });
  }
}