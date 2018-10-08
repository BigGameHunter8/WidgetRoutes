import React from 'react';
import styles from './Homepage.scss';
import City from '../City/City';

const Homepage = (props) => {
    const { cities, data } = props;
    return (
        <div className={styles.homepage}>
            <h1 className={styles.heading}>{cities}</h1>
            {Object.keys(data).map((city, index) => {
                return <City cityName={city} data={data[city]} key={index} />;
            })}
        </div>
    );
};

export default Homepage;
