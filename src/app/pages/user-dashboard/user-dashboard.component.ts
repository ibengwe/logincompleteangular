import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserStoreService } from '../../services/user-store.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent implements OnInit{

  public fullName:string ="";
  public role!:any

  constructor(private auth:AuthService,
    private userStore:UserStoreService

    ){}
  ngOnInit(): void {
    this.userStore.getFullNameFromStore().subscribe(val=>{
      const fullNameFromToken=this.auth.getFullNameFromToken();
      this.fullName=val ||fullNameFromToken;
    });
    this.userStore.getRoleFromStore().subscribe(val=>{
      const roleFromToken=this.auth.getRoleFromToken();
      this.role=val ||roleFromToken
    })

  }

}
