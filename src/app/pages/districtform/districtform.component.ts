import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DistrictService } from '../../services/district.service';
import { RegionService } from '../../services/region.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-districtform',
  templateUrl: './districtform.component.html',
  styleUrl: './districtform.component.css'
})
export class DistrictformComponent implements OnInit {

  myForm!: FormGroup
  list: any;

  constructor(
    
    private ds: DistrictService,
    private rs:RegionService,
    private route:Router

  ) { }

  ngOnInit(): void {

    this.formControl();
    this.getAllRegion();

  }
  getAllRegion() {
    this.rs.getAll().subscribe((data:any)=>{
      console.log("my data are =>",data)
      this.list=data
    })
  }
  formControl() {
    this.myForm = new FormGroup({
      districId:new FormControl(null),
      districtName: new FormControl('', [Validators.required]),
      region:new FormControl(null,[Validators.required])
    })
  }

  onSave() {
    const values = this.myForm.value;
    this.ds.add(values).subscribe((res: any) => {
      Swal.fire({
        title: "Save success",
        text: "New Record Insert successfully",
        icon: "success"
      });
      console.log('my form value are =>',res)
      this.route.navigate(['/district']); 
    })
  }

}
