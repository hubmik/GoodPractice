import { Component, OnInit } from "@angular/core";
import { Chart } from "node_modules/chart.js";
import 'chartjs-plugin-annotation';
import { bindCallback } from "rxjs";

@Component({
  selector: "app-linear-function",
  templateUrl: "./linear-function.component.html",
  styleUrls: ["./linear-function.component.scss"],
})
export class LinearFunctionComponent implements OnInit {
  public aParam: number = -3;
  public bParam: number = 5;

  constructor() {}

  ngOnInit(): void {
    this.renderChart(this.aParam, this.bParam);
  }

  renderChart(a: number, b: number): void {

    var labelsSet = this.fillChartData();

    var dataChart = {
      labels: labelsSet,
      datasets: [
        {
          label: 'f(x) = a*x+b',
          function: (x: number) => a * x + b,
          data: [],
          borderColor: 'rgba(75, 1, 192, 1)',
          fill: false,
        },
      ],
    };

    Chart.pluginService.register({
      beforeInit: (chart: { config: { data: any } }) => {
          for (var i = 0; i < dataChart.labels.length; i++) {
            var fct = dataChart.datasets[0].function,
              x = dataChart.labels[i],
              y = fct(x);
            dataChart.datasets[0].data.push(y);
          }
      },
    });

    var options = {
      title: {
        display: true,
        text: 'Graph of a Linear Function',
      },
      annotation: {
        annotations: [
          {
            drawTime: 'afterDraw',
            type: 'line',
            mode: 'vertical',
            scaleID: 'x-axis-0',
            value: 0,
            borderColor: 'black',
            borderWidth: 1
          },
          {
            drawTime: 'afterDraw',
            type: 'line',
            mode: 'horizontal',
            scaleID: 'y-axis-0',
            value: 0,
            borderColor: 'black',
            borderWidth: 1
          }
        ],
      },
      scales: {
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Y axis",
            },
            ticks: {
              beginAtZero: false,
              min: -15,
              max: 15,
            },
          },
        ],
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "X axis",
            },
          },
        ],
      },
    };

    var lineChart = new Chart("linear-function-chart", {
      type: "line",
      data: dataChart,
      options: options
    });
  }

  fillChartData(): number[] {
    var labelsSet = new Array(7);
    for (var i = 0, j = -15; i < labelsSet.length; i++, j += 5) {
      labelsSet[i] = j;
    }
    return labelsSet;
  }

}
