import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DistrictService } from '../../services/district.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RegionService } from '../../services/region.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-districtform-edit',
  templateUrl: './districtform-edit.component.html',
  styleUrl: './districtform-edit.component.css'
})
export class DistrictformEditComponent implements OnInit{

  list:any

  myform!:FormGroup
  constructor(private ds:DistrictService,
    private route:Router,
    private rs:RegionService,
    
    private activatedRoot:ActivatedRoute){}


  ngOnInit(): void {
    this.activatedRoot.params.subscribe((paramsValue:any)=>{
      const districtId=paramsValue.districtId
      this.formControl()
      this.getAllRegion()
      this.getStaff(districtId)
      
    }) 
  }

  getAllRegion() {
    this.rs.getAll().subscribe((data:any)=>{
      //console.log("my data are =>",data)
      this.list=data

    })
  }
  getStaff(districtId: any) {
    this.ds.get(districtId).subscribe((resp:any)=>{
      console.log('My Data value are=>',resp)
      this.myform.get('districtId')?.setValue(resp.districtId);
      this.myform.get('districtName')?.setValue(resp.districtName);

      const regionId = resp.region?.regionId; // Access the nested property
      console.log('my regionId =>', regionId);

    const regionControl = this.myform.get('region');
    console.log("regionControl=>",regionControl)
    if (regionControl && regionId !== undefined) {
      const selectedRegion = this.list.find((region: any) => region.regionId === regionId);
      regionControl.setValue(selectedRegion);
    }   
    })
  }
  formControl() {
    this.myform = new FormGroup({
      districtId:new FormControl(null),
      districtName:new FormControl(null,[Validators.required]),
      region:new FormControl(null,[Validators.required])
    })
  }

  onSave() {
    const values = this.myform.value;
    const districtId = this.myform.value.districtId
    console.log("values are=>",values)
    this.ds.update(values,districtId).subscribe((resp:any)=>{
      Swal.fire({
        title: "Save success",
        text: "New Record Insert successfully",
        icon: "success"
      });
      this.route.navigate(['/district']); 
      console.log("values are=>",resp)
    })   
  }
}


