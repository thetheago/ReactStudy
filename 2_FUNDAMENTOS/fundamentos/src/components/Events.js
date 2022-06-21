const Events = () =>{

    const handleMyEvent = (e) => {
        console.log(e);
        console.log("Ativou o evento!");
    };

    const renderSomething = (x) => {
        if(x){
            return <h1>Renderizando isto!</h1>
        }else{
            return <h1>Tambem posso renderizar isto!</h1>
        }
    };


    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou")}>Clique aqui tambem!</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    );

}

export default Events; 