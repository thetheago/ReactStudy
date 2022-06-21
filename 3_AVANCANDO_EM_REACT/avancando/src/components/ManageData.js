import { useState } from "react";

const ManageData = () => {
    let someData = 10;

    const [number, setNumber] = useState(15);

  return (
    <div>
      <h1>ManageData</h1>
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() => (someData = 15)}>Mudar variavel</button>
        </div>
        <div>
            <p>Valor: {number}</p>
            <button onClick={() => setNumber(250)}>Mudar State</button>
        </div>
    </div>
  )
}

export default ManageData