import React, {useState, useEffect} from "react";
import {Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement} from "chart.js"
import {Line} from "react-chartjs-2"

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)


function History() {
    const [cases, setCases] = useState([])


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
        .then(info => { setCases(info.response)
            console.log(info.response)
        })
        .catch(err => console.error(err));
}, [])

        const times = cases.map(item => (item.time)).reverse()
        const news = cases.map(item => (item.cases.new)).reverse()
        const active = cases.map(item => (item.cases.active)).reverse()
        const critical = cases.map(item => (item.cases.critical)).reverse()
        const recovered = cases.map(item => (item.cases.recovered)).reverse()
        const total = cases.map(item => (item.cases.total)).reverse()
        const newdt = cases.map(item => (item.deaths.total)).reverse()
        const newd = cases.map(item => (item.deaths.new)).reverse()


    const data = {
        labels: times,
        datasets: [
            {
              label: 'New',
              data: news,
              borderWidth: 1
           },
           {
            label: 'Active',
            data: active,
            borderWidth: 1
         },
         {
            label: 'Critical',
            data: critical,
            borderWidth: 1
         },
         {
            label: 'Recovered',
            data: recovered,
            borderWidth: 1
         },
        //  {
        //     label: 'Total',
        //     data: total,
        //     borderWidth: 1
        //  },
         {
            label: 'Newd',
            data: newd,
            borderWidth: 1
         },
         {
            label: 'Newdt',
            data: newdt,
            borderWidth: 1
         },
        ]
      }

const option = {

    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Line Chart - Multi Axis'
      }
    }, 
        scales: {
          y: {
            type: 'linear',
            display: true,
            position: 'left',
          },
        },
        legend: {
            fontSize: 26
        }
      }

    return (
        <div>
            < Line
            data = {data}
            options = {option}
            height={400}
            />
        </div>
    )
    
}

export default History

