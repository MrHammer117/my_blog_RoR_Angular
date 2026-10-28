
import { Component, OnDestroy } from '@angular/core';
import { BlogComponent } from './blog/blog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BlogComponent],
  template: '<app-blog-test />'
})
export class App implements OnDestroy {
  constructor() {
    console.log('APP CREATED', Date.now());
  }

  ngOnDestroy(): void {
    console.log('APP DESTROYED', Date.now());
  }
}
