import { Component, OnInit, ViewChild } from '@angular/core';
import { StepperService } from '../../services/stepper.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Stepper } from '../../model/stepper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrl: './staff-list.component.css'
})
export class StaffListComponent implements OnInit {
  staffList: any;

  displayedColumns: string[] = ['id', 'firstname','middlename','lastname','email','gender','action'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource :any

  FilterChange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  } 

  constructor(private staffService:StepperService,private router:Router){}


ngOnInit(): void {
  this.getAllStaff()
}

getAllStaff(){
  this.staffService.getAll().subscribe((resp:any)=>{
    console.log("The staffList are =>",resp)
    this.staffList=resp
    this.dataSource=new MatTableDataSource<Stepper>(this.staffList)
      this.dataSource.paginator=this.paginator
      this.dataSource.sort=this.sort
  })
}

addSTaff(){
  this.router.navigate(['/stepper'])
 }

 onView(element:any){
  this.router.navigate(['stepperview/'+element.checkNumber])
 }
}
