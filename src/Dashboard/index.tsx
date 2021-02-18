import React,{useState,useEffect,FormEvent} from 'react';

import {Title,Form} from './styles';
import Header from '../Components/Header/index'

import api from '../services/api'


interface Repository {
    full_name:string;
    description: string;
    owner: {
        login:string;
        avatar_url:string;
    }
}

const Dashboard : React.FC = () => {
    const [newRepo,setNewRepo] = useState('');
    const [inputError,setInputError] = useState('');
    const [ repositories,setRepositories] = useState <Repository[]>(()=> {
    const storageRepositories = localStorage.getItem(`@GithubExplorer:repositories`)

    if (storageRepositories) {
        return JSON.parse(storageRepositories)
    }

    return [];

    })


    useEffect (()=> {
        localStorage.setItem (
            `GithubExplorer:repositories`,JSON.stringify(repositories));
        

    },[repositories]);

    async function handleAddRepository (event:FormEvent<HTMLFormElement>):Promise<void> {
        event.preventDefault();

        if (!newRepo) {
            setInputError('Digite o autor/nome do repositório');
            return;
        }
        try {
            const response = await api.get(`repos/${newRepo}`)
            console.log(response.data)


            const repository = response.data

            setRepositories ([...repositories,repository]);
            setNewRepo('');
            setInputError('');
        } catch(err) {
            setInputError('Erro na busca por esse Repositório')
        }
        

    }


return (
    <>
    <Header/>
    <Title>Explore Repositórios no Github</Title>

    <Form onSubmit = {handleAddRepository} >
        <input
        value = {newRepo}
        onChange ={(e)=> setNewRepo(e.target.value)}
        placeholder = "Digite o nome do repositório"/>
        <button type ="submit"> Pesquisar</button>
    </Form>

    </>
)
}
export default Dashboard;