import react, {useState, useEffect } from 'react';
import {useRouteMatch} from 'react-router-dom';
import GhPolyglot from 'gh-polyglot';
import {Section,UserInfoStyles} from './styles';

import Charts from '../../Components/Charts';

interface UserParams  {
    user:string;

}

interface userData {
avatar_url:string;
name:string;
created_at:string;
location:string;
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

  console.log(langData)

  const getRepoData = () => {
    fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
      .then(response => {
        if (response.status === 404) {
          return setError({ active: true, type: 404 });
        }
        if (response.status === 403) {
          return setError({ active: true, type: 403 });
        }
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
    <Section>
   {userData && (
            <UserInfoStyles>
                {userData.avatar_url && (
                  <div className ="avatar">
                    <img src = {userData.avatar_url} alt ="avatar"/>
                  </div>
                )}
      {userData.name && <h1>{userData.name}</h1>}
      {userData.created_at && <h1>{userData.created_at}</h1>}
      {userData.location && <h1>{userData.location}</h1>}
      <Charts langData = {langData}/>



            </UserInfoStyles>
        )
                }) 


  </Section>
  )

};
export default UserData

