import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
  );

  function Cases({cases}) {
    const options = {
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
            text: 'Covid History Cases Data'
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
      };

      const times = cases.map(item => (item.time).slice(11)).reverse()
      const onlyTime = times.map(item => item.slice(0,5))      
      const news = cases.map(item => (item.cases.new)).reverse()
      const active = cases.map(item => (item.cases.active)).reverse()
      const critical = cases.map(item => (item.cases.critical)).reverse()
      const recovered = cases.map(item => (item.cases.recovered)).reverse()

      const data = {
        labels: onlyTime,
        datasets: [
           {
            label: 'Active Cases',
            data: active,
            borderWidth: 1,
            borderColor: '#B86026',
         },
         {
            label: 'Recovered Cases',
            data: recovered,
            borderWidth: 1,
            borderColor: '#A44200',
         },
        ],}

         return (
            <Line options={options} data={data}/>
         )

  }

  export default Cases