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
    this.renderChart(3, 5);
  }

  renderChart(a, b): void{
    var dataChart = {
      labels: [1, 2, 3, 4, 5, 6, 7, 8],
      datasets: [
        {
          label: "f(x) = a*x+b",
          function: (x: any) => a*x+b,
          data: [], // Don't forget to add an empty data array, or else it will break
          borderColor: "rgba(75, 1, 192, 1)",
          fill: false,
        },
      ],
    };

    Chart.pluginService.register({
      beforeInit: (chart: { config: { data: any; }; }) => {
        var data = chart.config.data;
        for (var i = 0; i < dataChart.datasets.length; i++) {
          for (var j = 0; j < dataChart.labels.length; j++) {
            var fct = dataChart.datasets[i].function,
              x = dataChart.labels[j],
              y = fct(x);
            dataChart.datasets[i].data.push(y);
          }
        }
      }
    });

    var lineChart = new Chart("linear-function-chart", {
      type: 'line',
      data: dataChart,
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
}
