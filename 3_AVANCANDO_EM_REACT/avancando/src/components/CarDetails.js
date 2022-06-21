const CarDetails = ({brand, km, color, newCar}) => {
  return (
    <div>
        <h1>CarDetails</h1>
        <h3>Detalhes do carro</h3>
        <ul>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Cor: {color}</li>
        </ul>
        {newCar && <p>Este carro eh novo!</p>}
    </div>
  )
}

export default CarDetails