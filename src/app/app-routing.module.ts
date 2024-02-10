import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { authGuard } from './guard/auth.guard';
import { RegisteruserComponent } from './pages/registeruser/registeruser.component';
import { SectionComponent } from './pages/section/section.component';
import { SectionformComponent } from './pages/sectionform/sectionform.component';
import { SectionEditComponent } from './pages/section-edit/section-edit.component';
import { RegionComponent } from './pages/region/region.component';
import { RegionFormComponent } from './pages/region-form/region-form.component';
import { DistrictComponent } from './pages/district/district.component';
import { DistrictformComponent } from './pages/districtform/districtform.component';
import { DistrictformEditComponent } from './pages/districtform-edit/districtform-edit.component';
import { StaffFormComponent } from './pages/staff-form/staff-form.component';
import { StaffComponent } from './pages/staff/staff.component';
import { RegioneditComponent } from './pages/regionedit/regionedit.component';
import { UserComponent } from './pages/user/user.component';
import { StepperComponent } from './pages/stepper/stepper.component';
import { StaffListComponent } from './pages/staff-list/staff-list.component';
import { StepperviewComponent } from './pages/stepperview/stepperview.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:NavigationComponent,
  canActivate:[authGuard],
  children:[
    {path:'user-dashboard',component:UserDashboardComponent},
    {path:'admin-dashboard',component:AdminDashboardComponent},
    {path:'register-user',component:RegisteruserComponent},
    {path:'section',component:SectionComponent},
    {path:'sectionForm',component:SectionformComponent},
    {path:'sectionEdit/:sectionId',component:SectionEditComponent},
    {path:'region',component:RegionComponent},
    {path:'regionEdit/:regionId',component:RegioneditComponent},

    {path:'district',component:DistrictComponent},
    {path:'districtForm',component:DistrictformComponent},
    {path:"districts/:districtId",component:DistrictformEditComponent},
    {path:'regionForm',component:RegionFormComponent},
    {path:'staffForm',component:StaffFormComponent},
    {path:'staff',component:StaffComponent},
    {path:'user',component:UserComponent},
    {path:'stepper',component:StepperComponent},
    {path:'stepperview/:checkNumber',component:StepperviewComponent},

    {path:'staffList',component:StaffListComponent},








    {path:"**",redirectTo:"/login",pathMatch:'full'}

  ]

}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
