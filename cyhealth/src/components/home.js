import React, {useState, useEffect} from "react";

function Home() {
    const [data, setData] = useState([]);


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
    };

    useEffect( () => {
    
    fetch('https://covid-193.p.rapidapi.com/statistics/', options)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));
}, []);
return (
    <div>{data}</div>
)}

export default Home;

