import React from 'react'

function Searchbar() {
    return (
        <div>
            <form className="searchForm">
                <input type="text" name="search" placeholder="Search..." />
                <input type="submit" value="Search" />
            </form>
        </div>
    )
}

export default Searchbar
