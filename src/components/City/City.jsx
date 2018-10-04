import React from 'react';
import styles from './City.scss';


const City = (props) => {
    const { data } = props;
    console.log(data);
    return (
        <div className={`${styles.city} ${styles.Chisinau}`}>
            <h1>{data.location.city}</h1>
            <span className={styles.info}>Date</span>
            <span className={styles.info}>Day</span>
            <span className={styles.info}>Text</span>
            <button type="submit">Details</button>
        </div>
    );
};

export default City;
