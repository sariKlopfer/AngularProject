import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-detail',
  standalone: false,
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent implements OnInit{

  course!: Course;
  courseId!: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.courseId = param['courseCode'];
      console.log("paramId", this.courseId)
      // this._courseService.getCourseById(this.courseId).subscribe({
      //   next: (res) => {
      //     this.course = res;
      //     console.log("course", this.course)
      //   },
      //   error: (err) => {
      //     console.log(err);
      //   }
      // })
    })
  }
}
