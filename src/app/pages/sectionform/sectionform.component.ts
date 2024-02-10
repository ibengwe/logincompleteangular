import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Section } from '../../model/section';
import { SectionService } from '../../services/section.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-sectionform',
  templateUrl: './sectionform.component.html',
  styleUrl: './sectionform.component.css'
})
export class SectionformComponent implements OnInit {
  sectionForm!:FormGroup

  constructor(
  private ss:SectionService,
  private router:Router
  ) { }

  ngOnInit(): void {
    this.formControl();      
  }
  
  formControl() {
  
      this.sectionForm=new FormGroup({
        sectionName:new FormControl('',Validators.required)
      })
    }

  onSave(){
    const values=this.sectionForm.value;
    this.ss.add(values).subscribe((response:any)=>{
      Swal.fire({
        title: "Save success",
        text: "New Record Insert successfully",
        icon: "success"
      });
      this.sectionForm.reset();
      this.router.navigate(['section'])
      console.log(response)
    })

  }

  back(){
    this.router.navigate(['section'])
  }

}
