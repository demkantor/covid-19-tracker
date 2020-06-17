import React, { Component } from 'react';

import { Cards, Chart, Country } from './components';
import styles from './App.module.css';

import { fetchData } from './api';


class App extends Component {

  state = {
    data: {}
  };

  componentDidMount = async () => {
    const data = await fetchData();

    this.setState({ data });
  }
  render() {
    const { data } = this.state;

    return (
      <div className={styles.container}>
        <Cards data={data} />
        <Country />
        <Chart />
      </div>
    )
  }
};

export default App;
