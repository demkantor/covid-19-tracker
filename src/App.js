import React, { Component } from 'react';

import { Cards, Chart, Country } from './components';
import styles from './App.module.css';

import { fetchData } from './api';


class App extends Component {

  state = {
    data: {},
    country: ''
  };

  componentDidMount = async () => {
    this.updateState();
  };

  // get selected country from user input in Country component
  handleCountryChange = async (country) => {
    this.updateState(country);
  };

  updateState = async (country) => {
    const data = await fetchData(country);
    this.setState({ data, country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src="StopTheSpread.png" alt="StopTheSpread" />
        <Cards data={data} />
        <Country handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    )
  }
};

export default App;
