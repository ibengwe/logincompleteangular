import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Section } from '../../model/section';
import { SectionService } from '../../services/section.service';
import { MatDialog } from '@angular/material/dialog';
import { SectionformComponent } from '../sectionform/sectionform.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent {

  displayedColumns: string[] = ['id', 'name','action'];
  dataSource :any

  // sectionForm!: FormGroup
  sectionList: Section[]=[]

  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private ss:SectionService,private router:Router){}


  ngOnInit(): void {
    // this.formControl();
    this.getAll();
  }
  getAll() {

    this.ss.getAll().subscribe((response:any)=>{
      this.sectionList=response;

      this.dataSource=new MatTableDataSource<Section>(this.sectionList)
      this.dataSource.paginator=this.paginator
      this.dataSource.sort=this.sort
    })


  }

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

     addSection(){
      this.router.navigate(['/sectionForm'])
     }

     onEdit(element:any){
      this.router.navigate(['sectionEdit/'+element.sectionId])
     }
  
  }


