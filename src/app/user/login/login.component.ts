import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!: FormGroup;

  private _user: User = new User;

  // public getUsers():User[]{
  //   return this.getUsers();
  // }

  // public getUserById(userCode:number):any{
  // return this.getUserById(userCode)
  // }


  @Output() loggedIn = new EventEmitter<{ username: string, password: string }>();

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }


  // login() {
    // const usernameControl = this.loginForm.get('username');
    // const passwordControl = this.loginForm.get('password');

    // if (usernameControl && passwordControl) {
    //   const username = usernameControl.value;
    //   const password = passwordControl.value;
    //   if (username === 'user' && password === 'password') {
    //     this.router.navigate(['/all-courses'], {});
    //   } else if (username === 'user' && password !== 'password') {
    //     // הצג הודעה מתאימה אם הסיסמה שגויה
    //     alert('הסיסמה שגויה');
    //   } else {
    //     // נווט לדף הרישום אם המשתמש אינו קיים
    //     this.router.navigate(['/register'], { state: { username: username } });
    //   }
    // }
  // }

  login(username: string, password: string) {
    if (username === 'user' && password === 'password') {
      this.router.navigate(['/all-courses']);
    } else if (username === 'user' && password !== 'password') {
      alert('Incorrect password');
    } else {
      this.router.navigate(['/register'], { state: { username: username } });
    }
  }

}