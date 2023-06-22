import { useState } from "react";
import gitLogo from "../assets/github.png";
import Input from "../components/input";
import ItemRepo from "../components/itemRepo";
import { Container } from "./styles";
import Button from "../components/button";
import { api } from "../services/api"

function App() {

  const [repos, setRepos] = useState([]);
  const [currentRepo, setCurrentRepo] = useState('')

  const handleSearchRepo = async () => {
    const {data} = await api.get(`repos/${currentRepo}`)
    console.log({data})
    if(data.id){

      const isExist = repos.find(repo => repo.id === data.id)

      if(!isExist){
        setRepos(prev => [...prev, data])
        setCurrentRepo('')
        return
      }
    }
    alert('Repositorio nao encontrado')
  }

  const handleRemoveRepo = (id) => {
    console.log('Removendo registro', id);

    // utilizar filter.
  }

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="logo do github" />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo} />)}
    </Container>
  );
}

export default App;
