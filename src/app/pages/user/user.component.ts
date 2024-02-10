import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{

  constructor(private auth:AuthService,private route:Router){}

  list!: User[];
  dataSource: any
  displayedColumns: string[] = ["ID", "firstname", "lastname","email","role","action"]

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort !: MatSort;


  ngOnInit(): void {
    this.getAll();
  }
  
  getAll() {
    this.auth.getAll().subscribe((response:any) => {
      this.list = response;
      this.dataSource = new MatTableDataSource<User>(this.list)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log("The value are =>", response)
    })
  }

  FilterChange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value
  }

  onAdd(){
    this.route.navigate(['register-user']);
  }
  onEdit(element:any){
    this.route.navigateByUrl("districts/"+element.districtId)


  }

}
