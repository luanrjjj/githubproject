import React, {useState,useEffect} from 'react';
import buildChart from '../../utils/buildChart';
import Chart, { ChartLegendOptions } from 'chart.js';
import ChartsStyles from './styles';

const Charts = ({langData,repoData}:any):any=> {
    console.log(langData)
    const [langChartData,setLangChartData] = useState(langData);
    const initLangChart = () => {
        const ctx = document.getElementById ('langChart');
        const labels = langData.map((lang:any)=> lang.label);
        const data = langData.map((lang:any) => lang.value);
        console.log(data)
        
        setLangChartData(data);

        if ( data.length>0) {
            const backgroundColor = langData.map (
                ({color}:any) => `#${color.length>4?color.slice(1):color.slice(1).repeat(2)}B3}`,
            );
            const borderColor = langData.map((lang:any) => `${lang.color}`);
            const charType = 'pie';
            const axes = false;
            const legend = true;
            const config = {ctx,charType,labels,data,backgroundColor,borderColor,axes,legend};
            buildChart(config)
        }
    }
    /*
        useEffect(() => {
            if (langData.length && repoData.length) {
              initLangChart();
              
            }
          }, []);
        */
    
    console.log(langData.length)
    
    const chartSize = 300;
    const langChartError = !(langChartData && langChartData.length > 0);
        
    return (
        <div>
            <ChartsStyles>
                <div className = "chart">
                    <header>
                        <h2>Top Languages</h2>
                    </header>
                    <div className="chart-container">
                    {langChartError && <p>Nothing to see here!</p>}
            <canvas id="langChart" width={chartSize} height={chartSize} />
          </div>
        </div>
                


            </ChartsStyles>
        </div>
    )
}

export default Charts;