import { useState } from "react"


const ConditionalRender = () => {

    const [x] = useState(false);
    const [name, setName] = useState("Joao");

    const changeName = () => {
        if(name === "Joao"){
            setName("Paulo");
        }else{
            setName("Joao");
        }
    };

  return (
    <div>
        <h1>ConditionalRender</h1>
        <h3>Isso sera exibido?</h3>
        {x && <p>Se x for true, sim!</p>}
        {!x && <p>Agora x é falso!</p>} 
        <h3>If ternario</h3>
        {name === "Joao" ? (<div><p>O nome é {name}</p></div>) : (<div><p>O nao é Joao, o nome agora eh {name}</p></div>)}
        <button onClick={changeName}>Mudar o nome</button>
    </div>
  )
}

export default ConditionalRender