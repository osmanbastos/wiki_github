import { useState } from "react";
import gitLogo from "../assets/github.png";
import Input from "../components/input";
import ItemRepo from "../components/itemRepo";
import { Container } from "./styles";
import Button from "../components/button";

function App() {
  const [repos, setRepos] = useState([]);



  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="logo do github" />
      <Input />
      <Button />
      <ItemRepo />
    </Container>
  );
}

export default App;
