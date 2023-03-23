import { Component } from '@angular/core';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userName = '';
  userPassword = '';
  constructor(private router: Router) {}
  getRouteLineStatus() {
    if (!this.userName && !this.userPassword) {
      alert('Please Enter Both Its Mandatory');
      return;
    }
    if (
      this.userName == 'ac.abhishek22@gmail.com' &&
      this.userPassword == 'abhishek123'
    ) {
      this.router.navigate(['../todos']);
    } else {
      alert('Incorrect Credintial');
    }
  }
  getValues(val: any) {
    this.userName = val.email;
    this.userPassword = val.password;
    this.getRouteLineStatus();
  }
}
