import React from "react";

function Table({data, search}) {

    const Searcher = data.filter(item => (item.country.includes(search)))

    const rows = Searcher.map((val,key) => {
        return (
            <tr key={key}>
                {/* <td>{val.day}</td> */}
                <td>{val.continent}</td>
                <td>{val.country}</td>
                <td>{val.population}</td>
                <td>{val.cases.new}</td>
                <td>{val.cases.active}</td>
                <td>{val.cases.recovered}</td>
                <td>{val.cases.critical}</td>
                <td>{val.cases.total}</td>
                <td>{val.deaths.new}</td>
                <td>{val.deaths.total}</td>
                <td>{val.tests.total}</td>
            </tr>
        )
    })

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Continent</th>
                    <th>Country</th>
                    <th>Population</th>
                    <th>New Cases</th>
                    <th>Active Cases</th>
                    <th>Recovered Cases</th>
                    <th>Critical Cases</th>
                    <th>total Cases</th>
                    <th>New Deaths</th>
                    <th>Total Deaths</th>
                    <th>Tests</th>
                </tr>
                </thead>
                <tbody>
                   {rows}
                </tbody>
            </table>
        </div>
    )

}

export default Table;