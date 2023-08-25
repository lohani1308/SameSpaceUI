import React, { useState } from 'react'

function Find( { searchData,setFilteredData } ) {

    const handleSearch=(e)=>{
        const filterdata=searchData.filter((d)=>d.name.toLowerCase().includes(e.target.value.toLowerCase()));
        setFilteredData(filterdata);
    }

    return (
        <div>
            <input type='text' id='search' onChange={handleSearch}/>
        </div>
    )
}

export default Find