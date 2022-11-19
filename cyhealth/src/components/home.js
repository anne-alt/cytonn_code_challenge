import React, {useState, useEffect} from "react";

function Home() {
    const [data, setData] = useState([]);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'baddc226acmshf0a25cef37c726bp16aa86jsnd78faf82c85a',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
    };

    useEffect( () => {
    
    fetch('https://covid-193.p.rapidapi.com/statistics/',options)
        .then(response => response.json())
        .then(data => console.log(data.response))
        .catch(err => console.error(err));
}, []);
return (
    <div>{data}</div>
)
}

export default Home;

