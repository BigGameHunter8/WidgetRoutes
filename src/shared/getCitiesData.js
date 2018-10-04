import getCityData from './getCityData';

const async = require('async');

const getCitiesData = (cities, result) => {
    const data = {};
    async.forEachOf(cities, (value, key, callback) => {
        getCityData(value, (cityData) => {
            setTimeout(() => {
                data[value] = cityData;
                callback();
            }, 100);
        });
    }, (err) => {
        if (err) console.error(err.message);
            result(data);
    });
};

export default getCitiesData;
