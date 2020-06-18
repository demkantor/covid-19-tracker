import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

// fetch main dataset from api
export const fetchData = async () => {
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);
        // console.log(confirmed, recovered, deaths, lastUpdate);

        return { confirmed, recovered, deaths, lastUpdate };

    } catch (error) {
        return console.error('error fetching main data set', error);

    };
};

// fetch daily stats from api
export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        // console.log(data);
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }));

        return modifiedData;
        
    } catch (error) {
        return console.error('error fetching daily data set', error);
    }
};

// fetch country specific data from api
export const fetchCountries = async () => {
    try {
        const { data: { countries }} = await axios.get(`${url}/countries`);
        // console.log('api:', countries);

        return countries.map((country) => country.name);
    } catch (error) {
        return console.error('error fetching country data set', error);
    }
};