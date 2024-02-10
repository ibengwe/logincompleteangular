import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegionService } from '../../services/region.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-regionedit',
  templateUrl: './regionedit.component.html',
  styleUrl: './regionedit.component.css'
})
export class RegioneditComponent {

  constructor(private route:Router,
    private activatedRoot:ActivatedRoute,
    private rs:RegionService
    
    
    ){}

    myForm!: FormGroup

  ngOnInit(): void {

    this.activatedRoot.params.subscribe((paramsValue:any)=>{
      const regionId=paramsValue.regionId
      this.getRegion(regionId)
      this.formControl()
    })  

    this.formControl();

  }
  getRegion(regionId: any) {
    this.rs.getById(regionId).subscribe((resp:any)=>{
      console.log(resp)
      this.myForm.get('regionId')?.setValue(resp.regionId);
      this.myForm.get('regionName')?.setValue(resp.regionName);
    })

  }
  formControl() {
    this.myForm = new FormGroup({
      regionId:new FormControl(null),
      regionName: new FormControl('', [Validators.required])
    })
  }

  onSave(){
    const values = this.myForm.value;
    const regionId = this.myForm.value.regionId
    console.log("values are=>",values)
    this.rs.update(values,regionId).subscribe(resp=>{
      Swal.fire({
        title: "update success",
        text: "New Record update successfully",
        icon: "success"
      });
      console.log("my response =>", resp)
      this.back()
    
    }) 
  }

  back(){
    this.route.navigate(['region'])
  }


}
