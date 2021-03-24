import react, {useState, useEffect } from 'react';
import {useRouteMatch} from 'react-router-dom';
import GhPolyglot from 'gh-polyglot';
import {Section,UserInfoStyles,Graphs} from './styles';
import Charts from '../../Components/Charts';
import {FiCalendar } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import Repos from '../../Components/Repos'


interface UserParams  {
    user:string;

}

interface userData {
avatar_url:string;
name:string;
created_at:string;
location:string;
login:string;
html_url:string;
public_repos:string;
followers:string;
following:string;
}


const UserData:React.FC= ()  => {
    
    const [userData,setUserData] = useState<userData|null>(null);
    
    const[langData,setLangData] = useState(null);
    const[repoData,setRepoData] = useState(null);
    const [error,setError] = useState({active:false,type:200})

    const userGeneral = useRouteMatch<UserParams>()
    const username = userGeneral.params.user
    

const getUserData = () => {
    
    fetch(`https://api.github.com/users/${username}`)
    .then(response => {
        if (response.status === 404) {
            return setError ({active: true, type:404})
        }
        if(response.status===403) {
            return setError({active:true,type:403});
        }
       
        return response.json();
        


    }).then(json => setUserData(json))
    .catch(error=> {
        setError({active:true,type:400});
        console.error ('Error:',error);
    })
};


const getLangData = () => {
    const me = new GhPolyglot(`${username}`);
    
    me.userStats((err: Error, stats: react.SetStateAction<null>) => {
      if (err) {
        console.error('Error:', err);
        setError({ active: true, type: 400 });
      }
     
      setLangData(stats);
      
    }); 
    
  };

  

  const getRepoData = () => {
    fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
      .then(response => {
        if (response.status === 404) {
          return setError({ active: true, type: 404 });
        }
        if (response.status === 403) {
          return setError({ active: true, type: 403 });
        }
        console.log(50,response)
        return response.json();
        
      })
      .then(json => setRepoData(json))
      .catch(error => {
        setError({ active: true, type: 200 });
        console.error('Error:', error);
      });
  };

  useEffect(()=> {
    getRepoData();
    getLangData();
    getUserData();
  },[])


  
  return (
    
    <>
   {userData && (
     <>
     <Section>
            <UserInfoStyles>
                {userData.avatar_url && (
                  <div className ="avatar">
                    <img src = {userData.avatar_url} alt ="avatar"/>
                  </div>
                )}
      {userData.name && <h1>{userData.name}</h1>}

      {userData.login && (
          <h2>
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
              @{userData.login}
            </a>
          </h2>
        )}  
<div className= "info">
{userData.location && (
            <span className="info__item">
              <GoLocation className ="icon" size="16" />
              {userData.location}
            </span>
          )}

      {userData.created_at && (
        <>
        <span className ="info__item">
          <FiCalendar className= "icon" size = "16"/>
          Joined{' '}
          {new Date (userData.created_at).toLocaleDateString('pt-BR',{
            month: 'long',
            day: 'numeric',
            year: 'numeric'  
                   })}
        </span>
      </>
      )}

</div>
       <div className="stats">
          <div className="stats__item">
            <span className="num">{userData.public_repos.toLocaleString()}</span>
            <span className="num-label">Repositories</span>
          </div>
          <div className="stats__item">
            <span className="num">{userData.followers.toLocaleString()}</span>
            <span className="num-label">Followers</span>
          </div>
          <div className="stats__item">
            <span className="num">{userData.following.toLocaleString()}</span>
            <span className="num-label">Following</span>
          </div>
        </div>
      
      </UserInfoStyles>
      </Section>
      <Graphs>
        <div className = "chart">
          
          <div className = "chart-container">
          {langData && repoData && <Charts id = "langChart" langData={langData} repoData={repoData}/>}
     
            
          </div>
        </div>
      
        </Graphs>
        <Repos/>

      
            </>
            
        )
                }


 </>
  )

};
export default UserData


