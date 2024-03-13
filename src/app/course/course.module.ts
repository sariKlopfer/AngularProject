import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseService } from './course.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [AllCoursesComponent,AddCourseComponent,EditCourseComponent,CourseDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[CourseService]
})
export class CourseModule { }
