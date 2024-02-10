import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isLoggedIns: boolean = false;;
  isPostRemoved: boolean = false;
  posts: any = [];

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.getAllPosts().subscribe(
      (response) => {
        this.posts = response;
        this.posts.map((post: any) => {
          if (post.status === 'true') {
            post.status = 'Active';
          } else { post.status = 'In-active'; }
        });
      },
      (error) => { console.log('Some Error occured') }
    );
  }

  public onRemovePost(id: string): void {
    this.authService.removePost(id).subscribe(
      (response) => {
        this.authService.getAllPosts().subscribe(
          (response) => {
            this.isPostRemoved = true;
            this.posts = response;
            setTimeout(() => {
              this.isPostRemoved = false;
            }, 1000)
          });
        this.router.navigate(['/dashboard']);
      }
    );
  }

  public onUserLogout(): void {
    sessionStorage.clear();
    this.router.navigate(['/home'])
  }
}