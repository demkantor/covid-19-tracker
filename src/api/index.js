import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);
        // console.log(confirmed, recovered, deaths, lastUpdate);

        return { confirmed, recovered, deaths, lastUpdate };

    } catch (error) {
        console.error('error fetching main data set', error);

    };
};

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        // console.log(data);
        
    } catch (error) {
        console.error('error fetching daily data set', error);
    }
}