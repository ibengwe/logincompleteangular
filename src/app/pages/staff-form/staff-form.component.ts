import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StaffService } from '../../services/staff.service';
import { RegionService } from '../../services/region.service';
import { DistrictService } from '../../services/district.service';
import { HttpClient } from '@angular/common/http';

interface Gender {
  value: string;
  viewValue: string;
}

interface MaritalStatus {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-staff-form',
  templateUrl: './staff-form.component.html',
  styleUrl: './staff-form.component.css'
})
export class StaffFormComponent implements OnInit{

  constructor(private builder: FormBuilder,
    private ss:StaffService,
    private rs:RegionService,
    private ds:DistrictService,
    
    ) {}
    listRegion:any
    districts: any[] = [];
    selectedRegion!: number;


  gender: Gender[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'}
  ];

  maritalStatus: MaritalStatus[] = [
    {value: 'single', viewValue: 'Single'},
    {value: 'married', viewValue: 'Married'},
    {value: 'divorced', viewValue: 'Divorced'}

  ];

  getAllRegion() {
    this.rs.getAll().subscribe((data:any)=>{
      console.log("my data are =>",data)
      this.listRegion=data
    })
  }

  ngOnInit(): void {
    this.getAllRegion()

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
  EmpRegister=this.builder.group({
    personal:this.builder.group({
      firstName:this.builder.control('',[Validators.required]),
      middleName:this.builder.control('',[Validators.required]),
      lastName:this.builder.control('',[Validators.required]),
      checkNumber:this.builder.control('',[Validators.required]),
      forceNumber:this.builder.control('',[Validators.required]),
      email:this.builder.control('',[Validators.required]),
      gender:this.builder.control('',[Validators.required]),
      dateOnList:this.builder.control('',[Validators.required]),
      dateBirthday:this.builder.control('',[Validators.required]),
      maritalStatus:this.builder.control('',[Validators.required]),
      section:this.builder.control('',[Validators.required]),
      mobile:this.builder.control('',[Validators.required]),
      birthdayRegion:this.builder.control('',[Validators.required]),
      birthdayDistrict:this.builder.control('',[Validators.required]),

    }),
    recognition:this.builder.group({
      bodyBuild:this.builder.control('',[Validators.required]),
      hairStle:this.builder.control('',[Validators.required]),
      hairOnFace:this.builder.control('',[Validators.required]),
      eyes:this.builder.control('',[Validators.required]),
      height:this.builder.control('',[Validators.required]),
      weight:this.builder.control('',[Validators.required]),
      mark:this.builder.control('',[Validators.required]),
      bloodGroup:this.builder.control('',[Validators.required]),
      chest:this.builder.control('',[Validators.required]),

    }),
    other:this.builder.group({
      tribe:this.builder.control('',[Validators.required]),
      noOfChildren:this.builder.control('',[Validators.required]),
      successor:this.builder.control('',[Validators.required]),
      relationSuccessor:this.builder.control('',[Validators.required]),
      executiveOfficer:this.builder.control('',[Validators.required]),
      headMan:this.builder.control('',[Validators.required]),
      village:this.builder.control('',[Validators.required]),

    })
  });

  get PersonalForm(){
    return this.EmpRegister.get("personal") as FormGroup;
  }

  get RecognitionForm(){
    return this.EmpRegister.get('recognition') as FormGroup;
  }

  get OtherForm(){
    return this.EmpRegister.get('other') as FormGroup;
  }

  isLinear = true;

  save() {
    if (this.EmpRegister.valid) {
      const values = {
        firstName: this.EmpRegister.value.personal?.firstName,
        middleName: this.EmpRegister.value.personal?.middleName,
        lastName: this.EmpRegister.value.personal?.lastName,
        checkNumber: this.EmpRegister.value.personal?.checkNumber,
        forceNumber: this.EmpRegister.value.personal?.forceNumber,
        email: this.EmpRegister.value.personal?.email,
        gender: this.EmpRegister.value.personal?.gender,
        dateOnList: this.EmpRegister.value.personal?.dateOnList,
        dateBirthday: this.EmpRegister.value.personal?.dateBirthday,
        maritalStatus: this.EmpRegister.value.personal?.maritalStatus,
        section: this.EmpRegister.value.personal?.section,
        mobile: this.EmpRegister.value.personal?.mobile,
        birthdayRegion: this.EmpRegister.value.personal?.birthdayRegion,
        birthdayDistrict: this.EmpRegister.value.personal?.birthdayDistrict,
        bodyBuild:this.EmpRegister.value.recognition?.bodyBuild,
        hairStle:this.EmpRegister.value.recognition?.hairStle,
        hairOnFace:this.EmpRegister.value.recognition?.hairOnFace,
        eyes:this.EmpRegister.value.recognition?.eyes,
        height:this.EmpRegister.value.recognition?.height,
        weight:this.EmpRegister.value.recognition?.weight,
        mark:this.EmpRegister.value.recognition?.mark,
        bloodGroup:this.EmpRegister.value.recognition?.bloodGroup,
        chest:this.EmpRegister.value.recognition?.chest,
        tribe:this.EmpRegister.value.other?.tribe,
        noOfChildren:this.EmpRegister.value.other?.noOfChildren,
        successor:this.EmpRegister.value.other?.successor,
        relationSuccessor:this.EmpRegister.value.other?.relationSuccessor,
        executiveOfficer:this.EmpRegister.value.other?.executiveOfficer,
        headMan:this.EmpRegister.value.other?.headMan,
        village:this.EmpRegister.value.other?.village,
      };


      console.log('my values form data are=>', values)
    }else{
      console.log("errors")
    }
  }
}
