import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { AllStudentsService } from '../all-students.service';
import { AllStudentsComponent } from '../all-students/all-students.component';

@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.css']
})
export class CreatestudentComponent {
  public createstudent: FormGroup = new FormGroup(
    {
      firstname: new FormControl(),
      lastname: new FormControl(),
      fathername: new FormControl(),
      mothername: new FormControl(),
      
      date: new FormControl(),
      mobile: new FormControl("",[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]),
      email: new FormControl(),
      address: new FormGroup(
        {
          hno: new FormControl(),
          landmark: new FormControl(),
          area: new FormControl(),
          pin: new FormControl("",[Validators.required,Validators.min(100000),Validators.max(999999)]),
          state: new FormControl(),
        },
      ),
      // studenttype:new FormControl(),
      // entrancemarks: new FormControl(),
      marks: new FormArray([]),
      type: new FormControl(),
      bus: new FormControl(),
      hostel: new FormControl(),
    }
  )
  get marksArray() {
    return this.createstudent.get('marks') as FormArray;
  }
  add() {
    this.marksArray.push(
      new FormGroup(
        {
          class: new FormControl(),
          year: new FormControl(),
          percentage: new FormControl("",[Validators.required,Validators.min(1),Validators.max(100)]),
        }
      )
    )
  }
  constructor(private _AllStudentsService:AllStudentsService){}
  submit(){
    console.log(this.createstudent);
    this._AllStudentsService.createAllStudent(this.createstudent.value).subscribe(
      (data:any)=>{
        alert("user created sucessfully");
      },
      (err:any)=>{
        alert("internal server error");
      },

    )
    }
    
  }
