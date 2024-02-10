import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginData: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authService: AuthService, private router: Router) { }

  public onUserLogin(): void {
    const credential = this.loginData.value;
    this.authService.getUserByUsername(credential.username).subscribe(
      (response) => {
        if (response.length > 0 && response[0].password === credential.password) {
          sessionStorage.setItem('username', response.username);
          this.router.navigate(['/dashboard']);
        }
        else {
          alert("Please enter valid Username & Password!!!");
        }
      },
      (error) => {
        console.error('Error registering user:', error);
      }
    );
  }
}
