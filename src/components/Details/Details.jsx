import React from 'react';
import celc from '../../shared/calcCelc';
import styles from './Details.scss';

const Details = (props) => {
    const { data, match } = props;
    const cityName = match.params.cityname;
    const { city, country } = data[cityName].location;
    const { date, day, text, low, high } = data[cityName].forecast.forecast[0];
    const { humidity, pressure } = data[cityName].atmosphere;
    return (
        <div className={`${styles.details}`}>
            <div className={`${styles.city} ${styles[cityName]}`} />
            <h1>{city} / {country}</h1>
            <p>{date}</p>
            <p>{day}</p>
            <p>{text}</p>
            <p>Humidity {humidity}</p>
            <p>Pressure {pressure}</p>
            <p>Min temperature {celc(low)}</p>
            <p>Max temperature {celc(high)}</p>
        </div>
    );
};

export default Details;
