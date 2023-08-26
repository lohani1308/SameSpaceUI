import React, { useCallback, useState } from 'react';
import Loading from '../Loading/Loading';
import './Search.css';
import Find from './Find';

function Search( { searchData,setId,filteredData,setFilteredData,setAddFav } ) {

    //console.log(searchData);

    const handleClick=(e)=>{
        e.stopPropagation();
        setId(e.target.id);
    }

    const handleFav=(e)=>{
        console.log(e.currentTarget.id);

        const fil=searchData.filter((d)=> Number(d.id) === Number(e.currentTarget.id));
        console.log(fil);
        setAddFav((prevFavs) => [...prevFavs, fil[0]]);
    }

    useState(()=>{
        setFilteredData(searchData)
    },[searchData]);

    return (
        <div className='search--section'>
            <div>
                <Find searchData={searchData} setFilteredData={setFilteredData} />
            </div>

            <table className='songs'>
                <tbody>
                    { filteredData ? (
                        filteredData?.map((d) => (
                        <tr key={d.id} className='main' onClick={handleClick}>
                        <td className='music--single'>
                            <div className='image'>
                            <img id={d.id} src={`https://cms.samespace.com/assets/${d.cover}`} alt={d.name} />
                            </div>
                            <div className='about--section' id={d.id}>
                            <p id={d.id}>{d.name}</p>
                            <span id={d.id} style={{ marginTop: '0', fontSize: '10px' }}>
                                {d.artist}
                            </span>
                            </div>
                        </td>
                        <td>
                            <button id={d.id} onClick={ handleFav }>
                                <i class="icon fas fa-plus-circle" title="Add to Fav"></i>
                            </button>
                        </td>
                        </tr>
                    ))
                    ) : (
                    <tr>
                        <td colSpan="2">No Songs</td>
                    </tr>
                    )}
                </tbody>
            </table>

        </div>
    )
    }

 export default Search;
