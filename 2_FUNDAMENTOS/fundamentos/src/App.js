//components
import FirstComponent from "./components/FirstComponent.js"
import TemplateExpressions from "./components/TemplateExpressions.js";
import MyComponent from "./components/MyComponent.js";
import Events from "./components/Events.js";


//css
import './App.css';




function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent/>
      <TemplateExpressions/>
      <MyComponent/>
      <Events/>
    </div>
  );
}

export default App;
