import { Component, OnInit } from "@angular/core";
import { Chart } from "node_modules/chart.js";

@Component({
  selector: "app-linear-function",
  templateUrl: "./linear-function.component.html",
  styleUrls: ["./linear-function.component.scss"],
})
export class LinearFunctionComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    this.renderChart(0, 5);
  }

  renderChart(a: number, b: number): void {

    var labelsSet = this.fillChartData();
    for(var i = 0; i < labelsSet.length; i++){
      labelsSet[i] = i - 15;
    }
    var dataChart = {
      labels: labelsSet,
      datasets: [
        {
          label: "f(x) = a*x+b",
          function: (x: any) => a * x + b,
          data: [], // Don't forget to add an empty data array, or else it will break
          borderColor: "rgba(75, 1, 192, 1)",
          fill: false,
        },
      ],
    };

    Chart.pluginService.register({
      beforeInit: (chart: { config: { data: any } }) => {
        for (var j = 0; j < dataChart.labels.length; j++) {
          var fct = dataChart.datasets[0].function,
            x = dataChart.labels[j],
            y = fct(x);
          dataChart.datasets[0].data.push(y);
        }
      },
    });

    var lineChart = new Chart("linear-function-chart", {
      type: "line",
      data: dataChart,
      options: {
        scales: {
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Oś Y",
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
                labelString: "Oś X",
              }
            },
          ],
        },
      },
    });
  }

  fillChartData(): number[]{
    var labelsSet = new Array(31);
    for(var i = 0; i < labelsSet.length; i++){
      labelsSet[i] = i - 15;
    }
    return labelsSet;
  }

}
