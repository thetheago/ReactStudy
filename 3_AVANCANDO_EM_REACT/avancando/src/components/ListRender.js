import { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["Matheus", "Thiago", "Juca"]);

    const [user, setUsers] = useState([
        {id: 1, nome: "Bart", age: 12},
        {id: 2, nome: "Homer", age: 34},
        {id: 3, nome: "Lisa", age: 11},
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id);
        });
    };

  return (
    <div>
        <h1>ListRender</h1>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {user.map((user) => (
                <li key={user.id}>
                    {user.nome} - {user.age}
                </li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
}

export default ListRender