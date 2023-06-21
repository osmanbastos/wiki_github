import gitLogo from "../assets/github.png";
import Input from "../components/input";
import { Container } from "./styles";

function App() {
  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="logo do github" />
      <Input />
    </Container>
  );
}

export default App;
