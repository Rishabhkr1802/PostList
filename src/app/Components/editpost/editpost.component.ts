import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
export class EditpostComponent implements OnInit {

  isEditPost: boolean = false;
  editPostData = new FormGroup({
    content: new FormControl(''),
    status: new FormControl(''),
    tags: new FormControl(''),
    title: new FormControl(''),
  });

  constructor(private authService: AuthService, private router: ActivatedRoute, private route: Router) { }

  public ngOnInit(): void {
    const id = this.router.snapshot.params['id'];
    this.authService.getPostById(id).subscribe(
      (response) => {
        this.editPostData = new FormGroup({
          content: new FormControl(response[0].content),
          status: new FormControl(response[0].status),
          tags: new FormControl(response[0].tags),
          title: new FormControl(response[0].title),
        })
      });
  }

  public onUpdatedPost(): void {
    const id = this.router.snapshot.params['id'];
    const data = this.editPostData.value;
    this.authService.updateExistingPost(id, data).subscribe(
      (response) => {
        this.isEditPost = true;
        this.editPostData.reset();
        setTimeout(() => {
          this.route.navigate(['/dashboard']);
        }, 1000)
      },
      (error) => {
        console.error('Error registering user:', error);
      }
    );
  }
}
