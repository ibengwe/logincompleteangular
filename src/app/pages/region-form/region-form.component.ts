import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegionService } from '../../services/region.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-region-form',
  templateUrl: './region-form.component.html',
  styleUrl: './region-form.component.css'
})
export class RegionFormComponent implements OnInit{

  constructor(private rs:RegionService,
    private route:Router
    
    ){}

  myForm!: FormGroup

  ngOnInit(): void {

    this.formControl();

  }
  formControl() {
    this.myForm = new FormGroup({
      regionName: new FormControl('', [Validators.required])
    })
  }

onSave(){
  const values=this.myForm.value;
  this.rs.add(values).subscribe((resp:any)=>{
    Swal.fire({
      title: "Save success",
      text: "New Record Insert successfully",
      icon: "success"
    });
    console.log("my response are=>",resp)
    this.myForm.reset()
    this.route.navigate(['region'])

  })
}

}
