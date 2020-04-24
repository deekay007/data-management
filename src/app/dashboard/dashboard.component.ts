import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { StudentsService } from '../shared/students.service';
import { VolunteersService } from '../shared/volunteers.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  numberStudents: number = 0;
  numberVolunteers: number = 0;

  ngOnInit(): void {
  }

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['Students', 'Volunteers', 'Supporters', 'BloodDonors'];
  public pieChartData: SingleDataSet = [500, 200, 100, 300];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor( private studentsService: StudentsService,
                private volunteersService: VolunteersService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();

    this.numberStudents = this.studentsService.noOfStudents();
    this.numberVolunteers = this.volunteersService.noOfVolunteers();
  }

}
