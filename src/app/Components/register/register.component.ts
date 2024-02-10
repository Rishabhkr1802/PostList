import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  isUserRegister = false;
  registerData: FormGroup = new FormGroup({
    contact_number: new FormControl(''),
    email: new FormControl(''),
    gender: new FormControl(''),
    password: new FormControl(''),
    username: new FormControl(''),
  });

  constructor(private authService: AuthService, private router: Router) { }

  public onUserRegister(): void {
    const data = this.registerData.value;
    this.authService.registerNewUser(data).subscribe(
      (response) => {
        this.registerData.reset();
        this.isUserRegister = true;
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 3000)
      },
      (error) => {
        console.error('Error registering user:', error);
      }
    );
  }
}

