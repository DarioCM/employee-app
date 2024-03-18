import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  saveEmployee(): void {
    this.employeeService.createEmployee(this.employee).subscribe(data => {
      console.log(data);
      this.employee = new Employee();
    });
  }

  onSubmit(): void {
    this.saveEmployee();
  }
}
