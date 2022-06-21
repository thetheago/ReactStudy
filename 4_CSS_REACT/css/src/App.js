import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {

  const n = 15;

  return (
    <div className="App">
      {/* Css Global */}
      <h1>React com css</h1>
      {/* Css de componente */}
      <MyComponent/>
      <p>Este parágrafo é do app.js</p>
      {/* Inline css */}
      <p style={{color: "blue", padding: "25px", borderTop: "2px solid red"}}>Este elemento foi estilizado de forma inline</p>
      {/* Css inline dinamico */}
      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS dinâmico</h2>
      <h2 style={n > 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS dinâmico</h2>
      {/* CSS Modules */}
      <Title/>
      <h2 className={"my-title"}>Teste</h2>
    </div>
  );
}

export default App;
