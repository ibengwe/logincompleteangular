import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StepperService } from '../../services/stepper.service';

@Component({
  selector: 'app-stepperview',
  templateUrl: './stepperview.component.html',
  styleUrl: './stepperview.component.css'
})
export class StepperviewComponent implements OnInit {
  staff: any;

  constructor(private activeRoot:ActivatedRoute,private stepService:StepperService,
    private route:Router
    
    ){}

  ngOnInit(): void {
    this.activeRoot.params.subscribe((paramsaValue:any)=>{
      console.log("values are=>",paramsaValue)
      const checkNumber=paramsaValue.checkNumber
      this.getStaffById(checkNumber)
      
    })

  }

  getStaffById(checkNumber:number){
    this.stepService.getById(checkNumber).subscribe((resp)=>{
      console.log("The values are =>",resp)
      this.staff=resp;
    })
    
  }

  back(){
    this.route.navigate(['/staffList'])

  }

}
