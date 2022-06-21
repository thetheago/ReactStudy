import styles from './CarDetails.module.css';

const CarDetails = ({marca, cor, kilometragem}) => {
  return (
    <div>
        <h2 className={styles.marca}>{marca}</h2>
        <h2 className={styles.cor}>{cor}</h2>
        <h2 className={styles.km}>{kilometragem}</h2>
        <hr />
    </div>
  );
};

export default CarDetails