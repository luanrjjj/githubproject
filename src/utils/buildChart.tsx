import Chart, { ChartLegendOptions } from 'chart.js';
import  theme  from '../styles/theme';
const { fonts } = theme;

const buildScales = ((axes:any) => {
  const scales = {
    xAxes: [
      {
        ticks: {
          fontFamily: fonts.inter,
          fontSize: 12,
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          fontFamily: fonts.inter,
          fontSize: 12,
        },
      },
    ],
  };

  return axes ? scales : undefined;
})

const buildLegend = (legend:ChartLegendOptions) => {
  const leg :ChartLegendOptions = {
    position: 'right',
    labels: {
      fontFamily: fonts.inter,
    },
  };
  return legend ? leg : undefined;
};

const buildChart = (config:any) => {
  const { ctx, chartType, labels, data, backgroundColor, borderColor, axes, legend } = config;

const chart :Chart =  new Chart(ctx, {
  type: chartType,
  /*responsive: true,
  maintainAspectRatio: false,*/
  data: {
    labels,
    datasets: [
      {
        data,
        backgroundColor,
        borderColor,
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: buildScales(axes),
    legend: buildLegend(legend),
    tooltips: {
      titleFontFamily: fonts.inter,
      bodyFontFamily: fonts.inter,
      cornerRadius: 3,
    },
  },
});

  
};

export default buildChart;