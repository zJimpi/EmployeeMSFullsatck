import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit{

  employee: Employee =new Employee();

  constructor(private employeeService:EmployeeService, private router:Router ){}
  ngOnInit(): void {
    
  }

  //to save the employee and show it on consol
  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe( data=>{
      console.log(data); 
      //after saving is done redirects to the employee list page
      this.goToEmployeeList();
    },error => console.log(this.employee));
  }
//redirect to the employee page
    goToEmployeeList(){
      this.router.navigate(['/employees']);
    }
  
  onSubmit(){
    this.saveEmployee();
    

  }

}
