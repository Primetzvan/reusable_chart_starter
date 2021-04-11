import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() {
  }

  // TODO

  public ngOnInit(): void {
    // TODO
  }

}

export class ChartDef {

  public readonly isValid: boolean;

  constructor(public readonly xAxisLabel: string | null,
              public readonly yAxisLabel: string | null,
              public readonly points: IPoint[],
              public readonly title: string) {
    this.isValid = this.validate();
  }

  private validate(): boolean {
    return !(this.points === null || this.points.length < 2);
  }

}

export interface IPoint {
  xValue: number;
  yValue: number;
}
