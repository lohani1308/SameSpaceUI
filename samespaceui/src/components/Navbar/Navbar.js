import React, { useState } from 'react';
import './Navbar.css';

function Navbar({ searchData, setFilteredData ,addToFav }) {

  const handletopTracks=(e)=>{
      const filterData=searchData.filter((d)=>d.top_track === true );
      setFilteredData(filterData);
  }

  const handleForYou=()=>{
    setFilteredData(searchData);
  }

  const handleFav=()=>{
    console.log(addToFav);
    
    setFilteredData(addToFav);
  }

  return (
    <div className='navbar'>
      <div className='navbar-item' onClick={ handleForYou }>For You</div>
      <div className='navbar-item' onClick={ handletopTracks }>Top Tracks</div>
      <div className='navbar-item' onClick={ handleFav }>Favourites</div>
      <div className='navbar-item'>Recently Played</div>
  </div>
  )
}

export default Navbar