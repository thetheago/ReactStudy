const TemplateExpressions = () => {
    
    const name = "Thiago";

    const data = {
        age: 31,
        job: "Programmer",
    };

    return(
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <h2>Idade : {data.age}</h2>
            <h2>Trabalho : {data.job}</h2>
            <p>{console.log("JSX React")}</p>
        </div>
    );


};

export default TemplateExpressions;