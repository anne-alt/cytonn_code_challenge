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
        const critical = cases.map(item => (item.cases.critical)).reverse()
        const active = cases.map(item => (item.cases.active)).reverse()
        const recovered = cases.map(item => (item.cases.recovered)).reverse()
        const total = cases.map(item => (item.cases.total)).reverse()
        const sumCases = total.reduce((a,b) => a+b, 0)
        console.log(sumCases)
        const newdt = cases.map(item => (item.deaths.total)).reverse()
        const sumDeaths = newdt.reduce((a,b) => a+b, 0)
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
         {
            label: 'Critical Cases',
            data: critical,
            borderWidth: 2,
            borderColor: '#FCB07E',
            lineTension: 0,
              fill: false,
         },
         {
            label: 'New Deaths',
            data: newd,
            borderWidth: 2,
            borderColor: 'red',
            lineTension: 0,
              fill: false,
         },
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
            />
            <Cases cases={cases}/>

            <ol>
              <li>Total Cases: {sumCases}</li>
              <li>Total Deaths: {sumDeaths}</li>
            </ol>

        </div>
    )
    
}

export default History

