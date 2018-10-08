import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import styles from './App.scss';
import listofcities from './shared/listofcities';
import Homepage from './components/Homepage/Homepage';
import getCitiesData from './shared/getCitiesData';
import Details from './components/Details/Details';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: listofcities,
      data: null,
    };
  }

  componentDidMount() {
    getCitiesData(this.state.cities, (data) => {
      this.setState({ data: data });
    });
  }

  render() {
    const { cities, data } = this.state;

    return data ? (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => { return <Homepage cities={cities} data={data} />; }} />
          <Route exact path="/details/:cityname" render={(route) => { return <Details cities={cities} data={data} match={route.match} />; }} />
        </Switch>
      </BrowserRouter>
    ) : (<p>Loading</p>);
  }
}

export default App;
