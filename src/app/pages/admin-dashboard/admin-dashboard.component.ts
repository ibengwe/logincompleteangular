import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit {
  total: any;

  ngOnInit(): void {
    this.getCount()
  }

  constructor(private auth:AuthService){}


  getCount(){
    this.auth.getUser().subscribe((response)=>{

      console.log("Total User are=>",response)

      this.total=response;

    })
  }

}
