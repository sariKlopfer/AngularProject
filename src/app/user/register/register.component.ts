import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  registerForm!: FormGroup;
  username: string | null = null;

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params); // בדיקה - האם הנתונים מושכים כראוי
      this.username = params['username'] || null;
      console.log(this.username);
      // יצירת טופס עם הנתונים שקיבלנו
      this.registerForm = this.formBuilder.group({
       
        userName: [this.username],
        address: [''],
        email: [''],
        password: ['']
      });
    });
  }

  
  register(): void {
    if (this.registerForm.invalid) {
      return;
    }
    this.router.navigate(['/all-courses'], { });
    // const newUser = {
    //   userName: this.registerForm.value.userName,
    //   address: this.registerForm.value.address,
    //   email: this.registerForm.value.email,
    //   password: this.registerForm.value.password
    // };

   
    // this.userService.save(newUser);
  }

  
}
