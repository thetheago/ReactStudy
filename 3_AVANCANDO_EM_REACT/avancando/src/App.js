import './App.css';
import {useState } from 'react';
//imgs
import Alicejpg from './assets/alice.jpg'
//components
import ManageData from './components/ManageData';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ShowUsername from './components/ShowUsername';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import ShowMessage from './components/ShowMessage';
import ChangeMessage from './components/ChangeMessage';

function App() {

  const name="Jinger";
  const [userName] = useState(name);

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 2, brand: "Toronto", color: "Branco", newCar: true, km: 23},
    {id: 3, brand: "Quid", color: "Vermelho", newCar: false, km: 1},
  ];

  function showMessage(){
    console.log("Evento do componente pai.");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      <div>
        {/* Imagem em public */}
        <img src="/animep.jpg" alt="animeimage" />
        {/* Imagem em asset */}
        <img src={Alicejpg} alt="" />
      </div>
      <hr />
      <ManageData/>
      <hr />
      <ListRender/>
      <hr />
      <ConditionalRender/>
      <hr />
      {/* Props */}
      <ShowUsername name={userName}/>
      <hr />
      {/* Destructuring */}
      {/* <CarDetails brand="VW" km={100} color="Azul" newCar={false}/> */}
      {/* Reaproveitando */}
      {/* <CarDetails brand="Fiat" km={400} color="Rosa" newCar={true}/> */}
      {/* <CarDetails brand="BMW" km={23} color="Preto" newCar={false}/> */}
      <hr />
      {/* Loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar}/>
      ))}
      <hr />
      {/* Fragments */}
      <Fragment variavel="Texto teste"/>
      <hr />
      {/* Children */}
      <Container myValue="Testing"> 
        <p>Teste</p>
      </Container>
      <Container myValue="Testing 2">
        <h5>Alooohaio</h5>
      </Container>
      <hr />
      {/* Executar função */}
      <ExecuteFunction myFunction={showMessage} />
      <hr />
      <ShowMessage mensagem={message}/>
      <ChangeMessage handleMessage={handleMessage}/>
    </div>
  );
}

export default App;
