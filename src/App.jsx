import React, { Component } from 'react';
import styles from './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greet: 0,
    };
  }

  render() {
    const { greet } = this.state;
    return (
      <div className={styles.app}>
        <h1 className={styles.all}>{greet}</h1>
      </div>
    );
  }
}

export default App;
