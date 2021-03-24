import Chart, {  ChartData, ChartDataSets, ChartLegendOptions, ChartPoint } from 'chart.js';
import  theme  from '../styles/theme';
const { fonts } = theme;

interface Chart1 extends ChartData {
  
  ctx:string;
  chartType:string;
  legend:ChartLegendOptions;
  axes:string;
  borderColor:string;
  data:any,
  backgroundColor:string;

  }
  

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

const buildChart:any = (config:any) => {
  const { ctx, chartType, labels, data, backgroundColor, borderColor, axes, legend } = config;

const chart :Chart =  new Chart(ctx, {
  type: chartType,
  data: {
    labels,
    datasets: [
      {
        data,
        backgroundColor,
        borderColor,
        borderWidth:1,
      }
    ]
  },
  
  
  options: {
    scales: buildScales(axes),
    legend: buildLegend(legend),
  },
});
console.log(chart)

  
};

export default buildChart;