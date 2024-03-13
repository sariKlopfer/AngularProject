import { Component ,OnInit} from '@angular/core';
import { Course } from '../course.model';
import { Router, Routes ,ActivatedRoute} from '@angular/router';
import { AddCourseComponent } from '../add-course/add-course.component';
import { CourseService } from '../course.service';
import { CommonModule } from '@angular/common';
import { Observable, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-all-courses',
  standalone: false,
  templateUrl: './all-courses.component.html',
  styleUrl: './all-courses.component.css',
})
export class AllCoursesComponent implements OnInit{

// רשימת הקורסים - לדוגמה, משתנה courses מקבל את הרשימה מהשרת
courses!: Course[];

constructor(private router: Router) {}

// פונקציה שנפתחת כאשר לוחצים על קורס מסוים
openCourseDetail(course: Course): void {
  
  // נווט לדף של course-detail ושלח את הקורס שנבחר כפרמטר
  this.router.navigate(['/course-detail', course.courseCode]);
}
 _courseService!:CourseService;

  ngOnInit(): void {
    this._courseService.getCourses().subscribe({
      next: (res) => {
        this.courses = res;
      }
    })
    // this.source$.subscribe({
    //   next: (res) => {
    //     console.log(res)
    //   },
    //   error: (err) => {
    //     console.log(err)
    //   },
    //   complete: () => {
    //     console.log("finish!!!")
    //   }
    // })
  }

  // save(course: Course) {
  //   this.courses.push(course);
  // }
  // remove(course: Course) {
  //   if (course.courseCode) {
  //     this._courseService.deleteCourse(course.courseCode);
  //   }
  //   else {
  //     new Observable((observable) => {
  //       observable.error("course is undefined");
  //       observable.complete();
  //     })
  //   }
  // }

}
