import React,{useState,useEffect} from 'react';
import {Section} from './styles';



const Repos = ({repoData}:any)=> {
    const [topRepos,setTopRepos] = useState([]);
    const [sortType,setSortType] = useState('stars');
   
    const map = {
        stars:'stargazers_count',
        forks :'forks_count',
        size:'size',
    };
   
type typed= "stars"|"forks"|"size"

const getTopRepos= (typed:typed) => {
   
    
    
    const LIMIT = 8;
   

    const sortProperty = map[typed];
    const sorted = repoData.filter((repo: { fork: any; }) => !repo.fork).sort((a: { [x: string]: number; },b: { [x: string]: number; }) => b[sortProperty] - a[sortProperty]).slice(0,LIMIT);
      setTopRepos(sorted)
      
}

useEffect(() => {
    if (repoData) {
      getTopRepos(repoData);
    }
  }, []);


  return (
      <Section>
          <header>
              <h2>Top Repos</h2>


          </header>
      </Section>



  )

}

export default Repos;
