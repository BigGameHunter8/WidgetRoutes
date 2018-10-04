import React, { Component } from 'react';
import styles from './App.scss';
import listofcities from './shared/listofcities';
import City from './components/City/City';
import getCitiesData from './shared/getCitiesData';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: listofcities,
      data: {},
    };
  }

  componentDidMount() {
    getCitiesData(this.state.cities, (data) => {
      this.setState({ data: data });
    });
  }

  render() {
    const { cities, data } = this.state;
    return (
      <div className={styles.app}>
        <h1>{cities}</h1>
        {Object.keys(data).map((city, index) => { return <City data={data[city]} key={index} />; })}
      </div>
    );
  }
}

export default App;
