import React from 'react';
import { Link } from 'react-router-dom';
import styles from './City.scss';

const City = (props) => {
    const { data } = props;
    const { city } = data.location;
    const { date, day, text } = data.forecast.forecast[0];

    return (
        <div className={`${styles.city} ${styles[props.cityName]}`}>
            <h1>{city}</h1>
            <span className={styles.info}>{date}</span>
            <span className={styles.info}>{day}</span>
            <span className={styles.info}>{text}</span>
            <div>
                <Link to={`/details/${props.cityName}`} className={styles.button}>Details</Link>
            </div>
        </div>
    );
};

export default City;
