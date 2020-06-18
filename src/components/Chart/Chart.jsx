import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {

    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setDailyData(await fetchDailyData());
        };

        // console.log(dailyData);

        fetchApi();
    }, []);

    // displays a barchat specific to a country where choosen
    const barChart = (
        confirmed
        ?
        <Bar 
            data={{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [{
                    label: 'People',
                    backgroundColor: ['#0000ff80', '#00ff0080', '#ff000080'],
                    data: [confirmed.value, recovered.value, deaths.value]
                }],
            }}
            options={{
                legend: {display: false },
                title: {display: true, text: `Currently in ${country}`}
            }}
        />
        :
        null
    );

    // set main line chart to display all data
    const lineChart = (
        dailyData.length
        ?
        <Line 
            data={{
                labels: dailyData.map(({ date }) => date),
                datasets: [{
                    data: dailyData.map(({ confirmed }) => confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true
                }, {
                    data: dailyData.map(({ deaths }) => deaths),
                    label: 'Deaths',
                    borderColor: '#red',
                    backgroundColor: '#ff000080',
                    fill: true
                }]
            }}
        />
        :
        null
    );

    // console.log(confirmed, recovered, deaths);

    return (
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    )
};

export default Chart;
