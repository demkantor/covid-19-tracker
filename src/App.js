import React, { Component } from 'react';

import { Cards, Chart, Country } from './components';
import styles from './App.module.css'

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Cards />
        <Country />
        <Chart />
      </div>
    )
  }
};

export default App;
