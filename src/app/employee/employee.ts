import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeFooter } from '../employee-footer/employee-footer';
import { LoggedUser } from '../logged-user';

export interface EmployeeModel {
  name: string;
  gender: string;
  salary: number;
}

export interface SalaryByGender {
  male: number;
  female: number;
}

@Component({
  imports: [
    FormsModule,
    EmployeeFooter
  ],
  selector: 'app-employee',
  styleUrl: './employee.scss',
  templateUrl: './employee.html',
})
export class Employee {

  protected employee = signal<EmployeeModel>({name: '', salary: 0, gender: ''});

  protected employees = signal<EmployeeModel[]>([]);
  protected totals = signal<SalaryByGender>({male: 0, female: 0});

  constructor(protected user: LoggedUser) {

  }


  protected add(){
    this.employees.update(oldEmployees => [...oldEmployees, this.employee()]);
    this.employee.set({name: '', salary: 0, gender: ''});
    this.calculate();
  }

  private calculate(){
    let male = 0;
    let female = 0;

    debugger

    this.employees().forEach(employee => {
      if(employee.gender === 'male'){
        male += employee.salary;
      } else {
        female += employee.salary;
      }
    });
    console.log(male);
    console.log(female);

    this.totals.set({male: male, female: female});
  }

  protected onReceivedTotals(message: string){
    console.log(message);
  }

  protected onMessageEvent(message: string){
    console.log(message);
  }

}
