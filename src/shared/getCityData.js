import axios from 'axios';

const getCityData = (city, callback) => {
  axios.get(`https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22 ${city} %22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`)
    .then((res) => {
        const { location, atmosphere, humidity } = res.data.query.results.channel;
        const forecast = res.data.query.results.channel.item;
        callback({ location, atmosphere, humidity, forecast });
    })
    .catch((err) => { console.log(err); });
};

export default getCityData;
