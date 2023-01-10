import React, {useState, useEffect} from "react";
import {Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement} from "chart.js"
import {Line} from "react-chartjs-2"
import Cases from "./Cases";

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

        const times = cases.map(item => (item.time).slice(11)).reverse()
        const onlyTime = times.map(item => item.slice(0,5))
        const news = cases.map(item => (item.cases.new)).reverse()
        const active = cases.map(item => (item.cases.active)).reverse()
        const critical = cases.map(item => (item.cases.critical)).reverse()
        const recovered = cases.map(item => (item.cases.recovered)).reverse()
        const total = cases.map(item => (item.cases.total)).reverse()
        const newdt = cases.map(item => (item.deaths.total)).reverse()
        const newd = cases.map(item => (item.deaths.new)).reverse()


    const data = {
        labels: onlyTime,
        datasets: [
            {
              label: 'New Cases',
              data: news,
              borderWidth: 2,
              borderColor: '#30011E', 
              lineTension: 0,
              fill: false,
           },
        //    {
        //     label: 'Active Cases',
        //     data: active,
        //     borderWidth: 2,
        //     borderColor: '#B86026',
        //     lineTension: 0,
        //       fill: false,

        //  },
         {
            label: 'Critical Cases',
            data: critical,
            borderWidth: 2,
            borderColor: '#FCB07E',
            lineTension: 0,
              fill: false,
         },
        //  {
        //     label: 'Recovered Cases',
        //     data: recovered,
        //     borderWidth: 2,
        //     borderColor: '#A44200',
        //     lineTension: 0,
        //       fill: false,
        //  },
         {
            label: 'New Deaths',
            data: newd,
            borderWidth: 2,
            borderColor: 'red',
            lineTension: 0,
              fill: false,
         },
        //  {
        //     label: 'Total Deaths',
        //     data: newdt,
        //     borderWidth: 2,
        //     borderColor: 'maroon',
        //     lineTension: 0,
        //       fill: false, 
        //  },
        ]
      }

const option = {
    title: {
        display: true,
        text: ''
    },

    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Covid History Data'
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
            fontSize: 26,
            display: false,
            position: 'top',
            labels: {
                boxWidth: 80,
                fontColor: 'black'
              }
        },
      }

    return (
        <div>
            < Line
            data = {data}
            options = {option}
            // height={150}
            />
            <Cases cases={cases}/>

        </div>
    )
    
}

export default History

