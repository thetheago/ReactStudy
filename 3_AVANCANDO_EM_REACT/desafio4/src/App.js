import './App.css';
import UserDetailes from './components/UserDetailes';

const pessoas = [
                  {id: 0, nome: "Thiago", idade: "13", profissao: "Limpador de vidro"},
                  {id: 1, nome: "Joao", idade: "24", profissao: "Catador de lixo"},
                  {id: 2, nome: "Pedro", idade: "20", profissao: "Motorista de Uber"}
                ]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {pessoas.map((pessoa, key) => (
          <UserDetailes key={pessoa.id} nome={pessoa.nome} idade={pessoa.idade} profissao={pessoa.profissao}/>
        ))}
      </header>
    </div>
  );
}

export default App;
