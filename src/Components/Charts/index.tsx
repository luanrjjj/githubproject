import React, {useRef,useState,useEffect} from 'react';
import buildChart from '../../utils/buildChart';
import langColors from '../../utils/langColors';
import Chart, { ChartLegendOptions } from 'chart.js';
import ChartsStyles from './styles';
import { isNullishCoalesce } from 'typescript';
import { Canvas} from '../Canvas';



const Charts = ({langData,repoData}:any)=> {
    console.log(3,repoData);
    console.log(500,langData)
    

    //   Gráfico dos Linguagens Utilizadas  //

    const [langChartData,setLangChartData] = useState(null);
    
    const initLangChart = () => {
        const ctx = document.getElementById ("langChart");
        const labels = langData.map((lang:any)=> lang.label);
        const data = langData.map((lang:any) => lang.value);
        
        
        setLangChartData(data);

        if ( data.length>1) {
            const backgroundColor = langData.map(({color}:any) => `#${ color.length > 4? color.slice(1):color.slice(1).repeat(2)}B3`,
            )                 
                                                                                            
    
            const borderColor = langData.map((lang:any) => `${lang.color}`);
            console.log(11,borderColor)
            const chartType = 'pie';
            const axes = false;
            const legend = true;
            const config = {ctx,chartType,labels,data,backgroundColor,borderColor,axes,legend};
            
            buildChart(config)
            
        }
    }

//   Gráfico dos Repositórios mais curtidos  //
    const [starChartData,setStarChartData] = useState(null);


                  
    const initmostStarred = () => {
        const ctx = document.getElementById ("starChart");
        const LIMIT = 5;
        const sortProperty = 'stargazers_count';
        const mostStarredRepos = repoData.filter((repo: { fork: any; })=>!repo.fork).sort((a: { [x: string]: number; },b: { [x: string]: number; })=> b[sortProperty] - a[sortProperty]).slice(0,LIMIT);
        console.log(100,mostStarredRepos)
        const labels = mostStarredRepos.map((repo:any)=> repo.name);
        const data = mostStarredRepos.map((repo:any) => repo[sortProperty]);        
        console.log(200,data)                                                
       
        
        setLangChartData(data);

        if ( data.length>1) {
            const backgroundColor = langData.map(({color}:any) => `#${ color.length > 4? color.slice(1):color.slice(1).repeat(2)}B3`,
            )                 
                                                                                            
    
            const borderColor = langData.map((lang:any) => `${lang.color}`);
            const chartType = 'bar';
            const axes = true;
            const legend = false;
            const config = {ctx,chartType,labels,data,backgroundColor,borderColor,axes,legend};
            buildChart(config);
          
            
        }
        
    }

    const [LangStarred,setLangStarred] = useState(null)

                   //   Linguagens mais curtidas nos repositórios  //
    const initLangStarred = () => {
        const ctx = document.getElementById ("langStarChart");
        const LIMIT = 5;
        const sortProperty = 'stargazers_count';
        const filteredRepos = repoData.filter((repo: { fork: any; stargazers_count: number; }) => !repo.fork && repo.stargazers_count>0 )
        const uniqueLangs = new Set (filteredRepos.map((repo: { language: any; })=>repo.language))
        const labels = Array.from(uniqueLangs.values()).filter(l => l);
        const data = labels.map(lang => {
          const repos = filteredRepos.filter((repo: { language: unknown; }) => repo.language === lang);
          const starsArr = repos.map((r: { stargazers_count: any; }) => r.stargazers_count);
          const starSum = starsArr.reduce((a: any, b: any) => a + b, 0);
          return starSum;  
                                                  
        });
        
        setLangStarred(data);

        if ( data.length>1) {
            const chartType = 'doughnut';
      const axes = false;
      const legend = true;
      const borderColor= (labels).map((label) => langColors.label);
      const backgroundColor = borderColor.map(color => `${color}B3`);
      const config = { ctx, chartType, labels, data, backgroundColor, borderColor, axes, legend };
      console.log(config)
      buildChart(config);
          
            
        }
        
    }

    useEffect(() => {
        
        if (langData && repoData) {     
          initLangChart();
          initmostStarred();
   
       
        }
      }, []);
    
      
    const chartSize = 300;
    const langChartError = !(langChartData && langChartData.length > 0);
 
    return (
        
        
        <div>
            {langData!=null && repoData && (
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
                

        <div className = "chart">
                    <header>
                        <h2>Repositories More Starred</h2>
                    </header>
                    <div className="chart-container">
                    {langChartError && <p>Nothing to see here!</p>}
                    <canvas  id="starChart" width={chartSize} height={chartSize}/>            
          </div>
        </div>

        <div className = "chart">
                    <header>
                        <h2>Starred By Languages</h2>
                    </header>
                    <div className="chart-container">
                    {langChartError && <p>Nothing to see here!</p>}
                    <canvas  id="langStarChart" width={chartSize} height={chartSize}/>            
          </div>
        </div>


            </ChartsStyles>
       
        )
        }
         </div>
    )


    }
export default Charts;