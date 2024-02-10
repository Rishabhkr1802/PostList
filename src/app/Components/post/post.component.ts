import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  isNewPostCreated: boolean = false;
  newPostData = new FormGroup({
    content: new FormControl(''),
    status: new FormControl('true'),
    tags: new FormControl(''),
    title: new FormControl(''),
  });

  constructor(private authService: AuthService, private router: Router) { }

  public onAddedNewPost(): void {
    const data = this.newPostData.value
    this.authService.addedNewPost(data).subscribe(
      (response) => {
        this.newPostData.reset();
        this.isNewPostCreated = true;
        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 1500);
      },
      (error) => {
        console.error('Error registering user:', error);
      }
    );
  }
}