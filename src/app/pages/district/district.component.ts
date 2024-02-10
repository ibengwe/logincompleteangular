import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { District } from '../../model/district';
import { MatTableDataSource } from '@angular/material/table';
import { DistrictService } from '../../services/district.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrl: './district.component.css'
})
export class DistrictComponent implements OnInit {

  constructor(private ds:DistrictService,private route:Router){}

  list!: District[];
  dataSource: any
  displayedColumns: string[] = ["ID", "job", "region","action",]

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort !: MatSort;


  ngOnInit(): void {
    this.getAll();
  }
  
  getAll() {
    this.ds.getAll().subscribe((response:any) => {
      this.list = response;
      this.dataSource = new MatTableDataSource<District>(this.list)
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
    this.route.navigate(['districtForm']);
  }
  onEdit(element:any){
    this.route.navigateByUrl("districts/"+element.districtId)


  }
}
