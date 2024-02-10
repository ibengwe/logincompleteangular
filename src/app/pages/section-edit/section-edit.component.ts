import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'
import { SectionService } from '../../services/section.service';


@Component({
  selector: 'app-section-edit',
  templateUrl: './section-edit.component.html',
  styleUrl: './section-edit.component.css'
})
export class SectionEditComponent implements OnInit{

  constructor(private route:Router,
    private activatedRoot:ActivatedRoute,
    private ss:SectionService
    
    
    ){}


  sectionForm!:FormGroup

  
  ngOnInit(): void {
    this.activatedRoot.params.subscribe((paramsValue:any)=>{
      const sectionId=paramsValue.sectionId
      this.getSection(sectionId)
      this.formControl()
    })  
  }
  getSection(sectionId: any) {
    this.ss.getById(sectionId).subscribe((resp:any)=>{
      console.log(resp)
      this.sectionForm.get('sectionId')?.setValue(resp.sectionId);
      this.sectionForm.get('sectionName')?.setValue(resp.sectionName);
    })
  }
  
  formControl() {
  
      this.sectionForm=new FormGroup({
        sectionId:new FormControl(null),
        sectionName:new FormControl('',Validators.required)
      })
    }

  onSave(){
    const values = this.sectionForm.value;
    const sectionId = this.sectionForm.value.sectionId
    console.log("values are=>",values)
    this.ss.update(values,sectionId).subscribe(resp=>{
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
    this.route.navigate(['section'])
  }
  }

  



