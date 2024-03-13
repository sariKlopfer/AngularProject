import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CourseService } from '../course.service';
import { Course } from '../course.model';
import { learningWay } from '../course.model';

@Component({
  selector: 'app-edit-course',
  standalone: false,
  templateUrl: './edit-course.component.html',
  styleUrl: './edit-course.component.css'
})
export class EditCourseComponent implements OnInit{
  
  editCourseForm: FormGroup;
  courseId!: number;

  learningWays = Object.keys(learningWay).filter(k => typeof learningWay[k as any] === "number");

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {
    this.editCourseForm = this.formBuilder.group({
      courseName: ['', Validators.required],
      categoryId: ['', Validators.required],
      severalLessons: ['', Validators.required],
      startDate: ['', Validators.required],
      syllabus: [''],
      throughLearning: ['', Validators.required],
      lecturerId: ['', Validators.required],
      imgURL: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = +params['id'];
      this.getCourseById(this.courseId);
    });
  }

  getCourseById(id: number): void {
    this.courseService.getCourseById(id).subscribe((course: Course) => {
      this.editCourseForm.patchValue(course);
    });
  }

  onSubmit(): void {
    if (this.editCourseForm.invalid) {
      return;
    }
    const editedCourse: Course = { ...this.editCourseForm.value, courseCode: this.courseId };
  this.courseService.save(editedCourse)
    console.log("Course updated successfully");
    this.router.navigate(['/all-courses']);
  }
}