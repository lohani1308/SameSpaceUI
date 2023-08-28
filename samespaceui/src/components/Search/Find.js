import React, { useState } from 'react';
import '../../App.css';

function Find( { searchData,setFilteredData, bgcolor } ) {

    console.log(bgcolor);
    const handleSearch=(e)=>{
        const filterdata=searchData.filter((d)=>d.name.toLowerCase().includes(e.target.value.toLowerCase()));
        setFilteredData(filterdata);
    }

    return (
        <div class="search-container" style={{ backgroundColor : bgcolor }}>
            <span class="search-icon">&#128269;</span>
            <input type="text" id="search" class="search-input" placeholder="Search" onChange={handleSearch} />
        </div>
    )
}

export default Find