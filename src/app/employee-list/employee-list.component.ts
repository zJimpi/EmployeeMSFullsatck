import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

  employees!: Employee[];

  constructor(private employeeService: EmployeeService, private router:Router) {}
  ngOnInit(): void {
    //creating a method
    this.getEmployees();
  }

  //defining the method
  getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data =>{
      this.employees = data;
    });
  }

  //update method
  updateEmployee(id:number){
    this.router.navigate(['update-employee', id]);
  }

  //delete method
  deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id).subscribe( data => {
      console.log(data);
      
      this.getEmployees();
    })
  }

}
