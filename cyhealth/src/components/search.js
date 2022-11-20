import React from "react";

function Search({search, setSearch}) {
    return (
        <div>
            <input
            placeholder="Search by Country"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            />
            <button>Go!</button>
        </div>
    )
}

export default Search