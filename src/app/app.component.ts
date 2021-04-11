import { Component } from '@angular/core';
import {ChartDef} from './line-chart/line-chart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'reusable-chart';
  public def1: ChartDef;
  public def2: ChartDef;
  public def3: ChartDef;

  constructor() {
    this.def1 = new ChartDef('TestX', 'TestY', [
      {
        xValue: 5,
        yValue: 5
      },
      {
        xValue: 10,
        yValue: 10
      },
      {
        xValue: 15,
        yValue: 10
      },
      {
        xValue: 18,
        yValue: 8
      },
      {
        xValue: 20,
        yValue: 30
      }
    ], 'A Test Chart');
    this.def2 = new ChartDef('Years', 'Stock', [
      {
        xValue: 2010,
        yValue: 50
      },
      {
        xValue: 2011,
        yValue: 82
      },
      {
        xValue: 2012,
        yValue: 109
      },
      {
        xValue: 2013,
        yValue: 166
      },
      {
        xValue: 2014,
        yValue: 191
      },
      {
        xValue: 2015,
        yValue: 208
      },
      {
        xValue: 2016,
        yValue: 186
      },
      {
        xValue: 2017,
        yValue: 140
      },
      {
        xValue: 2018,
        yValue: 155
      },
      {
        xValue: 2019,
        yValue: 193
      },
      {
        xValue: 2020,
        yValue: 40
      },
      {
        xValue: 2021,
        yValue: 67
      }
    ], 'Initech Stock Prices');
    this.def3 = new ChartDef(null, null, [
      {
        xValue: 2.5,
        yValue: 19
      },
      {
        xValue: 5,
        yValue: 8
      },
      {
        xValue: 7.5,
        yValue: 19
      }
    ], 'A simple chart');
  }
}
