const Challenge = () =>{

    const numbers = {
        x : 2,
        y : 5,
    };

    const somarNumbers = () => {
        console.log(numbers.x + numbers.y);
    };

    return(
        <div>
            <p>Os números sao</p>
            <p>{numbers.x} e {numbers.y}</p>
            <button onClick={somarNumbers}>Somar</button>
        </div>
    );

};

export default Challenge;