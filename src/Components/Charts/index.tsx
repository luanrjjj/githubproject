import React, {useRef,useState,useEffect} from 'react';
import buildChart from '../../utils/buildChart';
import Chart, { ChartLegendOptions } from 'chart.js';
import ChartsStyles from './styles';
import { isNullishCoalesce } from 'typescript';
import { Canvas} from '../Canvas';

const Charts = ({langData}:any)=> {
    console.log(3,langData)

    const [langChartData,setLangChartData] = useState(null);
    
    const initLangChart = () => {
        const ctx = document.getElementById ("langChart");
        const labels = langData.map((lang:any)=> lang.label);
        const data = langData.map((lang:any) => lang.value);
        console.log(5,data)
        console.log(6,labels)
        
        setLangChartData(data);

        if ( data.length>1) {
            const backgroundColor = langData.map((lang:any) => `${lang.color}`)
                //({color}:any) => `#${color.color>4?color.slice(1):color.slice(1).repeat(2)}B3}`,
            
    
            const borderColor = langData.map((lang:any) => `${lang.color}`);
            console.log(11,borderColor)
            const charType = 'pie';
            const axes = false;
            const legend = true;
            const config = {ctx,charType,labels,data,backgroundColor,borderColor,axes,legend};
            
            buildChart(config)
            
        }
    }

    useEffect(() => {
        
        if (langData) {     
          initLangChart();
       
        }
      }, []);
    
      
    const chartSize = 300;
    const langChartError = !(langChartData && langChartData.length > 0);
 
    return (
        
        
        <div>
            {langData!=null && (
            <ChartsStyles>
                
                <div className = "chart">
                    <header>
                        <h2>Top Languages</h2>
                    </header>
                    <div className="chart-container">
                    {langChartError && <p>Nothing to see here!</p>}
                    <canvas  id="langChart" width={chartSize} height={chartSize}/>
                    
                       
                   
                
            
          </div>
        </div>
                


            </ChartsStyles>
       
        )
        }
         </div>
    )


    }
export default Charts;