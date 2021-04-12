import {Component, Input, OnInit} from '@angular/core';

class ICoordinateSystem {
  labelY!: number;
  pixelHeightY!: number;
}

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() {
  }

  // TODO
  @Input() def!: ChartDef;
  @Input() height!: number;
  @Input() width!: number;

  coordinateSystem!: ICoordinateSystem[];
  rotate = '';
  points = '';

  public ngOnInit(): void {
    // TODO
    if (this.def.isValid) {
      this.coordinateSystem = [];
      this.fillAuxilaryPoints();
      this.rotate = 'matrix(1 0 0 -1 0 ' + this.height + ')';
      this.def.points.sort((a, b) => (a.xValue > b.xValue) ? 1 : ((b.xValue > a.xValue) ? -1 : 0));
      this.calculatePoints();
    }
  }

  public fillAuxilaryPoints(): void {
    this.def.points.sort((a, b) => (a.yValue > b.yValue) ? 1 : ((b.yValue > a.yValue) ? -1 : 0));

    const divider = (this.def.points[this.def.points.length - 1].yValue - this.def.points[0].yValue) / 4;
    const startVal: number = this.def.points[0].yValue;
    for (let i = 0; i < 5; i++) {
      this.coordinateSystem.push({
        labelY: Math.round(divider * Math.abs(i - 5) + startVal), pixelHeightY:
          Math.round((this.height - 60) / 4 * (i - 1) + 30)
      });
    }
    this.coordinateSystem.push({labelY: Math.round(startVal), pixelHeightY: Math.round((this.height - 60) / 4 * 4 + 30)});
  }

  public calculatePoints(): void
  {
    const givenXRange = (this.def.points[this.def.points.length - 1].xValue - this.def.points[0].xValue); // given max - given min
    const xPixelInGraphRange = ((this.width - 30) - 40); // pixel max - pixel min

    const givenYRange =
      (this.coordinateSystem[0].labelY - this.coordinateSystem[this.coordinateSystem.length - 1].labelY); // given max - given min
    const yPixelInGraphRange = ((this.height - 30) - 30); // pixel max - pixel min

    for (const point of this.def.points)
    {
      const xPixelValue = (((point.xValue - this.def.points[0].xValue) * xPixelInGraphRange) / givenXRange) + 40;
      this.points = this.points + Math.round(xPixelValue) + ',';

      const yPixelValue =
        (((point.yValue - (this.coordinateSystem[this.coordinateSystem.length - 1].labelY )) * yPixelInGraphRange) / givenYRange) + 30;
      this.points = this.points + Math.round(yPixelValue) + ' ';
    }
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
