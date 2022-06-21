import './App.css';
import CarDetails from './components/CarDetails';

function App() {

  const carros = [{id: 0, marca: "BMW", cor: "Vermelho", kilometragem: "0km"},
                  {id: 1, marca: "Ferrari", cor: "Amarelo", kilometragem: "30km"},
                  {id: 2, marca: "Carroça", cor: "Marrom", kilometragem: "0km"}];

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{color: "gold"}}>Titulo</h1>
        {carros.map((carro) => (<CarDetails key={carro.id} marca={carro.marca} cor={carro.cor} kilometragem={carro.kilometragem}/>))}
      </header>
    </div>
  );
}

export default App;
