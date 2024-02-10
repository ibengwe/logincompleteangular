import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UserStoreService } from '../../services/user-store.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  errosMsg:any

  submitForm!: FormGroup;

  constructor(
    private formBuild:FormBuilder,
    private auth:AuthService,
    private router:Router,
    private userStore:UserStoreService,
    private toast:NgToastService
    
    
    ){}

  ngOnInit(): void {
    this.submitForm=this.formBuild.group({
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required])

    })
  }
  showSuccess() {
    this.toast.success({detail:"SUCCESS",summary:'Login success',duration:1000});
  }

  showError() {
    this.toast.error({detail:"ERROR",summary:'incorrect username or password',sticky:true});
  }
  login(){
    if(this.submitForm.valid){
      console.log(this.submitForm.value)
      this.auth.login(this.submitForm.value).subscribe({
        next:(resp:any)=>{
          
          this.showSuccess();
          console.log(resp)
          this.submitForm.reset();
          this.auth.storeToken(resp.token);
          const tokenPayload=this.auth.decodeToken();
          this.userStore.setFullNameFromStore(tokenPayload.firstname);
          this.userStore.setRoleFromStore(tokenPayload.role)
          this.router.navigateByUrl('/')

          if(tokenPayload.role=='USER'){
            this.router.navigate(['user-dashboard'])

          }else if(tokenPayload.role=='ADMIN'){
            this.router.navigate(['admin-dashboard']);
          }

        },
        error:(err)=>{
          this.showError()
          this.submitForm.reset();

          console.log('my error are ',err)
        }
        
      },    
      );
    }
  }
}


