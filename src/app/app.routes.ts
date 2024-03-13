import { Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AddCourseComponent } from './course/add-course/add-course.component';
import { EditCourseComponent } from './course/edit-course/edit-course.component';
import { AllCoursesComponent } from './course/all-courses/all-courses.component';
import { CourseDetailComponent } from './course/course-detail/course-detail.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
    {path:`login`,component:LoginComponent},
    {path:`register`,component:RegisterComponent},
    {path:`add-course`,component:AddCourseComponent},
    {path:`edit-course`,component:EditCourseComponent},
    {path:`all-courses`,component:AllCoursesComponent},
    {path:`course-detail`,component:CourseDetailComponent},
    {path:`home`,component:HomeComponent},
    {path:`footer`,component:FooterComponent},
    {path:`header`,component:HeaderComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
