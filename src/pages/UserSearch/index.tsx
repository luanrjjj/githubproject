import React,{useState,useEffect,FormEvent} from 'react';

import {Title,Form,Users} from './styles';
import Header from '../../Components/Header/index'

import api from '../../services/api'

import { Link } from 'react-router-dom';

import { FiChevronRight }  from 'react-icons/fi'


interface User {
    full_name:string;
    login:string;
    description: string;
    avatar_url:string;
    owner: {
        login:string;
        avatar_url:string;
    }
}

const UserSearch : React.FC = () => {
    const [newUser,setNewUser] = useState('');
    const [inputError,setInputError] = useState('');
    const [ users,setUsers] = useState <User[]>(()=> {
    const storageUsers = localStorage.getItem(`@GithubExplorer:users`)

    if (storageUsers) {
        return JSON.parse(storageUsers)
    }

    return [];

    })


    useEffect (()=> {
        localStorage.setItem (
            `GithubExplorer:users`,JSON.stringify(users));
        

    },[users]);

    async function handleAddUser (event:FormEvent<HTMLFormElement>):Promise<void> {
        event.preventDefault();

        if (!newUser) {
            setInputError('Digite o autor/nome do repositório');
            return;
        }
        try {
            const response = await api.get(`users/${newUser}`)
            
            const user = response.data
           

            setUsers ([...users,user]);
            setNewUser('');
            setInputError('');
        } catch(err) {
            setInputError('Erro na busca por esse Repositório')
        }
        

    }


return (
    <>
    <Header/>
    <Title>Explore Repositórios no Github</Title>

    <Form onSubmit = {handleAddUser} >
        <input
        value = {newUser}
        onChange ={(e)=> setNewUser(e.target.value)}
        placeholder = "Digite o nome do repositório"/>
        <button type ="submit"> Pesquisar</button>
    </Form>

    <Users>
        {users.map(user=> (
            <Link key = {user.login} to= {`/users/${user.login}`} >
                <img src ={user.avatar_url} alt = {user.login}/>
                <div> 
                    <strong>{user.login}</strong>
                    <p>{user.description}</p>
                </div>
                <FiChevronRight size ={20}/>
            </Link>
        ))}
        
    </Users>

    </>
)
}
export default UserSearch;