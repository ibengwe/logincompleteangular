import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrl: './registeruser.component.css'
})
export class RegisteruserComponent {
  
  constructor(private fb:FormBuilder,
    private auth:AuthService 
    ){}

  signupForm=this.fb.group({
    firstname:this.fb.control('',Validators.required),
    lastname:this.fb.control('',Validators.required),
    email:this.fb.control('',Validators.required),
    password:this.fb.control('',Validators.required),

  })
  onSave(){
    if(this.signupForm.valid){
      console.log(this.signupForm.value)
     const values=this.signupForm.value
      this.auth.register(values).subscribe((resp:any)=>{
        Swal.fire({
          title: "Save success",
          text: "New User Insert successfully",
          icon: "success"
        });
        console.log("response =>",resp)
        this.signupForm.reset()
      })
    }
  }
}
