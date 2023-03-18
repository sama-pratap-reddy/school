import { Component } from '@angular/core';
import { AllStudentsService } from '../all-students.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent {
  public allStudents: any = [];
  public term:string="";
  public column:string=""
  public order:string=""
  constructor(private _allStudentsService: AllStudentsService) {
    _allStudentsService.getAllStudents().subscribe(
      (data: any) =>{
         this.allStudents=data;
  },
  (err:any)=>{
    alert("internal server error");
  }
  )
};
filter(){

  this._allStudentsService.getFilteredAllStudents(this.term).subscribe(
    (data:any)=>{
      this.allStudents = data;
    },
    (err:any)=>{
      alert("internal server error");
    }
  )
}
sort(){
this._allStudentsService.getSortedAllStudents(this.column,this.order).subscribe(
  (data:any)=>{
    this.allStudents = data;
  },
  (err:any)=>{
    alert("internal server error");
  }
)
}
page(no:number){
this._allStudentsService.getPageAllStudents(no,5).subscribe(
  (data:any)=>{
    this.allStudents = data;

  },
  (err:any)=>{
    alert("internal server error");
  }
)
}
delete(id:string){
this._allStudentsService.deleteAllStudents(id).subscribe(
(data:any)=>{
  alert("deleted successfully");
  location.reload();
},
(err:any)=>{
  alert("internal serever error");
}
)
}
}
