import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router:Router){}

  toLogin(){
    this.router.navigate(['/login'], {  });
  }
  toRegister(){
    this.router.navigate(['/register'], {  });
  }
}
