import React, { useCallback, useState } from 'react';
import Loading from '../Loading/Loading';
import './Search.css';
import Find from './Find';

function Search( { searchData,setId } ) {

    //console.log(searchData);
    const [filteredData,setFilteredData]=useState([]);

    const handleClick=(e)=>{
        e.stopPropagation();
        setId(e.target.id);
    }

    useState(()=>{
        setFilteredData(searchData)
    },[searchData]);

    return (
        <div className='search--section'>
            <div>
                <Find searchData={searchData} setFilteredData={setFilteredData}/>
            </div>

            <div className='songs'>
                {
                    filteredData ? ( filteredData?.map((d)=>(
                            <div key={d.id}  className='main' onClick={handleClick}>
                                <div className='music--single'>
                                    <div className='image'>
                                        <img id={d.id}  src={ ` https://cms.samespace.com/assets/${d.cover}` } />
                                    </div>

                                    <div className='about--section' id={d.id}>
                                        <p id={d.id}>{d.name}</p>
                                        <span id={d.id} style={ { marginTop:'0', fontSize:'10px'} }>{d.artist}</span>
                                    </div>
                                </div>
                                <div>
                                    <p id={d.id}> {d.date_updated} </p>
                                </div>
                            </div>
                        ))
                    ) : (<div>No Songs</div>)
                }
            </div>
        </div>
    )
    }

 export default Search;
