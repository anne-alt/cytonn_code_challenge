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
              borderWidth: 2,
              borderColor: '#30011E', 
              lineTension: 0,
              fill: false,
           },
           {
            label: 'Active',
            data: active,
            borderWidth: 2,
            borderColor: '#B86026',
            lineTension: 0,
              fill: false,

         },
         {
            label: 'Critical',
            data: critical,
            borderWidth: 2,
            borderColor: '#FCB07E',
            lineTension: 0,
              fill: false,
         },
         {
            label: 'Recovered',
            data: recovered,
            borderWidth: 2,
            borderColor: '#A44200',
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
         {
            label: 'Total Deaths',
            data: newdt,
            borderWidth: 2,
            borderColor: 'maroon',
            lineTension: 0,
              fill: false, 
         },
        ]
      }

const option = {
    title: {
        display: true,
        text: ' '
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
            fontSize: 26,
            display: false,
            position: 'top',
            labels: {
                boxWidth: 80,
                fontColor: 'black'
              }
        }
      }

    return (
        <div>
            < Line
            data = {data}
            options = {option}
            height={150}
            // width={2.0}
            />
            <button style={{backgroundColor:'#30011E'}}>New</button>
            <button style={{backgroundColor:'#B86026'}}>Active</button>
            <button style={{backgroundColor:'#FCB07E'}}>Critical</button>
            <button style={{backgroundColor:'#A44200'}}>Recovered</button>
            <button style={{backgroundColor:'red'}}>New Deaths</button>
            <button style={{backgroundColor:'maroon'}}>Total Deaths</button>

        </div>
    )
    
}

export default History

