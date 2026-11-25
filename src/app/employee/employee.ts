import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeFooter } from '../employee-footer/employee-footer';
import { LoggedUser } from '../logged-user';
import { JsonPipe } from '@angular/common';

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
    EmployeeFooter,
    ReactiveFormsModule,
    JsonPipe
  ],
  selector: 'app-employee',
  styleUrl: './employee.scss',
  templateUrl: './employee.html',
})
export class Employee implements OnInit {

  // protected employee = signal<EmployeeModel>({name: '', salary: 0, gender: ''});
  formGroup : FormGroup;
  formBuilder = inject(FormBuilder);

  protected employees = signal<EmployeeModel[]>([]);
  protected totals = signal<SalaryByGender>({male: 0, female: 0});

  constructor(protected user: LoggedUser) {
    this.formGroup = this.createFormGroup();
  }

  ngOnInit() {
    this.onChangeGender();
  }

  private createFormGroup(){
    return this.formGroup = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      salary: new FormControl('', [Validators.required]),
    });
  }

  onChangeGender (){
    this.formGroup.controls['gender'].valueChanges.subscribe((value) => {
      console.log(value);
      if(value === 'M'){
        this.formGroup.controls['salary'].setValue(5000);
      }
    });
  }


  protected add(){
    this.employees.update(oldEmployees => [...oldEmployees, this.formGroup.getRawValue()]);
    this.formGroup.reset({});
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
