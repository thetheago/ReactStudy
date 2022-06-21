import './MyForm.css';
import {useState} from 'react';

const MyForm = ({user}) => {
    // 6 - controlled inputs

    // 3 - gerenciamento de dados

    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email : "");
    
    const [bio, setBio] = useState(user ? user.bio : "");

    const [role, setRole] = useState(user ? user.role : "");

    const handleName = (e) => {
      setName(e.target.value);
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("Enviando o formulário");
      console.log(name +"\n"+ email +"\n"+ bio +"\n"+ role);

      // 7 - limpar formulario
      setName('');
      setEmail('');
      setBio('');
    };

    

  return (
    <div>
        {/* 5 - envio de form */}
        {/* 1- criação de form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite o seu nome" value={name} onChange={handleName} />
            </div>
            {/* 2 - label envolvendo input */}
            <label>
                <span>E-mail</span>
                {/* simplificação de manipulação de state */}
                <input type="email" name="email" placeholder="Digite o seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>
            {/* 8 - textarea */}
            <label>
              <span>Bio: </span>
              <textarea name="bio" placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>
            {/* 9 - select */}
            <label>
              <span>Função no sistema</span>
              <select name="role" value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="user">Usuário</option>
                <option value="editor">Editor</option>
                <option value="admin">Admnistrador</option>
              </select>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm