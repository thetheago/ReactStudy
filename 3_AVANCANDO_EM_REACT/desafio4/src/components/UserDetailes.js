import { useState } from "react"

const UserDetailes = ({nome, idade, profissao}) => {

    const [msg, setMsg] = useState("---");

    const verificarDirigir = () =>{

        if(idade > 18){
            setMsg("Sim");
        }else{
            setMsg("Não");
        }

    };


  return (
    <div>
        <table>
            <tbody>
                <tr>
                    <td>Nome</td>
                    <td>Idade</td>
                    <td>Profissao</td>
                </tr>
                <tr>
                    <td>{nome}</td>
                    <td>{idade}</td>
                    <td>{profissao}</td>
                </tr>
            </tbody>
        </table>
        <button onClick={verificarDirigir}>Pode dirigir?</button>
        <h3>{msg}</h3>
        <hr />
    </div>
  )
}

export default UserDetailes