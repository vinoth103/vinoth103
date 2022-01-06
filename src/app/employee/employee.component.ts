import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  formvalue !:FormGroup;
  constructor(private formbuilder:FormBuilder ,private api :ApiService) { }
  Employees!:any;
  p : number = 1;
  ngOnInit() {
    this.formvalue = this.formbuilder.group({

    })
    this.initial();
  }

  initial(){
    this.api.getemployee().subscribe(res=>{

       this.Employees = res;
      console.log(this.Employees);
    });
   }


}
