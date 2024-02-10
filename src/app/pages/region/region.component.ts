import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Region } from '../../model/region';
import { MatTableDataSource } from '@angular/material/table';
import { RegionService } from '../../services/region.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrl: './region.component.css'
})
export class RegionComponent implements OnInit {

  constructor(private rs:RegionService,
    private route:Router
    
    
    ){}
  list!: Region[];
  dataSource: any
  displayedColumns: string[] = ["ID", "job", "action"]


  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort !: MatSort;

  FilterChange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value
  }
  ngOnInit(): void {
    this.getAll();
  }
  
  getAll() {
    this.rs.getAll().subscribe((response) => {
      this.list = response;
      this.dataSource = new MatTableDataSource<Region>(this.list)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log("The value are =>", response)
    })
  }


  onEdit(element:any){
    this.route.navigate(['regionEdit/'+element.regionId])
  }

  onAdd(){
    this.route.navigate(['regionForm']);
  }

}
