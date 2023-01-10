import React, {useState, useEffect} from "react";
import Search from "./Search";
import Table from "./Table";

function Home() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState([])


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'baddc226acmshf0a25cef37c726bp16aa86jsnd78faf82c85a',
            // process.env.REACT_APP_API_KEY,
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
    };

    useEffect( () => {

    fetch('https://covid-193.p.rapidapi.com/statistics/', options)
        .then(response => response.json())
        .then(data => setData(data.response))
        .catch(err => console.error(err));
}, []);
return (
    <div>
        <Search search={search} setSearch={setSearch}/>
        <Table data={data} search={search}/>
    </div>
)}

export default Home;

