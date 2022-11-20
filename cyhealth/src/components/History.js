import React, {useState, useEffect} from "react";
import {Line, LineChart, Tooltip} from 'recharts'


function History() {
    const [history, setHistory] = useState([])

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
    };

    useEffect( () => {
    
    fetch('https://covid-193.p.rapidapi.com/history?country=all&day=2020-06-02', options)
        .then(response => response.json())
        .then(data => console.log(data.response.cases.active))
        .catch(err => console.error(err));
}, []);
}

export default History