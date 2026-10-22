import { Component, EventEmitter, input, Input, OnChanges, output, Output, SimpleChanges } from '@angular/core';
import { SalaryByGender } from '../employee/employee';

@Component({
  imports: [],
  selector: 'app-employee-footer',
  styleUrl: './employee-footer.scss',
  templateUrl: './employee-footer.html',
})
export class EmployeeFooter implements OnChanges{

  @Input() totals : SalaryByGender = {male: 0, female: 0};
  @Output() receivedTotals = new EventEmitter<string>();

  message = input<string>();
  event = output<string>();

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['totals']){
      // this.receivedTotals.emit('Os totais de salários de homens e mulheres foram recebidos.');
      this.event.emit('Olá mundo Event');
    }
  }

}
