import { Component, OnInit } from '@angular/core';
import {  FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Course } from '../course.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-course',
  standalone: false,
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css'
})
export class AddCourseComponent implements OnInit {

  [x: string]: any;

  public addCourse!: FormGroup;

  constructor(private router:Router) { }

  
  ngOnInit(): void {
    this.addCourse = new FormGroup({
      courseCode: new FormControl(null, [Validators.minLength(1), Validators.maxLength(4), Validators.required]),
      courseName: new FormControl(null, [Validators.minLength(1), Validators.required]),
      categoryId: new FormControl(null, [Validators.required]),
      severalLessons: new FormControl(null, [Validators.minLength(1), Validators.required]),
      startDate: new FormControl(new Date(), [Validators.required]), 
      sillybus: new FormArray([], [Validators.minLength(2)]),
      // throughLearning: [null, [Validators.required]],
      lecturerId: new FormControl(null, [Validators.required]),
      imgURL: new FormControl(null, [Validators.required, Validators.pattern('(https?:\/\/.*\.(?:png|jpg))')])
    })
  }

  public save(){
    let course:Course=this.addCourse.value;
    Swal.fire('Added course successfully');
    //  this._courseService.save(course);
  }
  
 // Getter לקבלת תיבות הקלט של sillybus
 get sillybusControls() {
  return (this.addCourse.get('sillybus') as FormArray).controls;
}

// הוספת תיבת קלט חדשה ל-sillybus
addSillybus() {
  const sillybusArray = this.addCourse.get('sillybus') as FormArray;
  sillybusArray.push(new FormControl(null));
}

// מחיקת תיבת קלט מ-sillybus
removeSillybus(index: number) {
  const sillybusArray = this.addCourse.get('sillybus') as FormArray;
  sillybusArray.removeAt(index);
}

onSubmit() {
  this.save();
  this.router.navigate(['/all-courses'], {});
}
}
