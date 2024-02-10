import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StepperService } from '../../services/stepper.service';
import { SectionService } from '../../services/section.service';
import { DistrictService } from '../../services/district.service';
import { RegionService } from '../../services/region.service';
import { Router } from '@angular/router';

interface Gender {
  value: string;
  viewValue: string;
}

interface MaritalStatus {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css'
})



export class StepperComponent implements OnInit{



  gender: Gender[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'}
  ];

  maritalStatus: MaritalStatus[] = [
    {value: 'single', viewValue: 'Single'},
    {value: 'married', viewValue: 'Married'},
    {value: 'divorced', viewValue: 'Divorced'}

  ];

  districts: any[] = [];
  selectedRegion!: number;




  firstFormGroup = this._formBuilder.group({
    firstname: ['', Validators.required],
    middlename: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', Validators.required],
    gender: ['', Validators.required],
    checkNumber: ['', Validators.required],
    forcenumber: ['', Validators.required],
    mobile: ['', Validators.required],
    section: ['', Validators.required],
    maritalStatus: ['', Validators.required],
    dateOnList:['',Validators.required],
    birthdayRegion:['',Validators.required],
    birthdayDistrict:['',Validators.required],





  });


  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isEditable = false;
  sectionList: any;
  listRegion:any


  constructor(private _formBuilder: FormBuilder,private ss:StepperService,
              private sectionService:SectionService,
              private ds:DistrictService,
              private rs:RegionService,
              private route:Router


    ) {}
  ngOnInit(): void {
  
    this.section();
    this.getAllRegion()
    
  }

  getAllRegion() {
    this.rs.getAll().subscribe((data:any)=>{
      console.log("my data are =>",data)
      this.listRegion=data
    })
  }


  getByRegion(regionId:number){
    if(regionId){
      this.ds.getByRegion(regionId).subscribe(
        (data:any)=>{
          this.districts=data
        }
      )
    }     
  }  


    section(){
      this.sectionService.getAll().subscribe((result:any)=>{
        this.sectionList=result;
      })
    }
  saveFormData(){

    if (this.firstFormGroup.valid && this.secondFormGroup.valid) {

      const formData = {
        firstname: this.firstFormGroup.get('firstname')?.value,
        middlename:this.firstFormGroup.get('middlename')?.value,
        lastname:this.firstFormGroup.get('lastname')?.value,
        email:this.firstFormGroup.get('email')?.value,
        gender:this.firstFormGroup.get('gender')?.value,
        checkNumber:this.firstFormGroup.get('checkNumber')?.value,
        forcenumber:this.firstFormGroup.get('forcenumber')?.value,
        mobile:this.firstFormGroup.get('mobile')?.value,
        section:this.firstFormGroup.get('section')?.value,
        maritalStatus:this.firstFormGroup.get('maritalStatus')?.value,
        dateOnList:this.firstFormGroup.get('dateOnList')?.value,
        birthdayRegion:this.firstFormGroup.get('birthdayRegion')?.value,
        birthdayDistrict:this.firstFormGroup.get('birthdayDistrict')?.value,




        address: this.secondFormGroup.get('secondCtrl')?.value,
        
      };
      console.log("value are =>",formData)
      this.ss.add(formData).subscribe((response)=>{
        console.log("Our Response are =>",response)

      });
    }
  }

  back(){
    this.route.navigate(['/staffList'])
  }
}
