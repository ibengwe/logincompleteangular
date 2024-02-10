import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisteruserComponent } from './pages/registeruser/registeruser.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { SectionComponent } from './pages/section/section.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { SectionformComponent } from './pages/sectionform/sectionform.component';
import { SectionEditComponent } from './pages/section-edit/section-edit.component';
import { RegionComponent } from './pages/region/region.component';
import { RegionFormComponent } from './pages/region-form/region-form.component';
import { NgToastModule } from 'ng-angular-popup';
import { DistrictComponent } from './pages/district/district.component';
import { DistrictformComponent } from './pages/districtform/districtform.component';
import {MatSelectModule} from '@angular/material/select';
import { DistrictformEditComponent } from './pages/districtform-edit/districtform-edit.component';
import { StaffComponent } from './pages/staff/staff.component';
import { StaffFormComponent } from './pages/staff-form/staff-form.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { RegioneditComponent } from './pages/regionedit/regionedit.component';
import { UserComponent } from './pages/user/user.component';
import { StepperComponent } from './pages/stepper/stepper.component';
import { StaffListComponent } from './pages/staff-list/staff-list.component';
import { StepperviewComponent } from './pages/stepperview/stepperview.component';









@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    LoginComponent,
    RegisteruserComponent,
    SectionComponent,
    SectionformComponent,
    SectionEditComponent,
    RegionComponent,
    RegionFormComponent,
    DistrictComponent,
    DistrictformComponent,
    DistrictformEditComponent,
    StaffComponent,
    StaffFormComponent,
    RegioneditComponent,
    UserComponent,
    StepperComponent,
    StaffListComponent,
    StepperviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    NgToastModule,
    MatSelectModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
