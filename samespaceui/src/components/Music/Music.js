import React from 'react';
import '../../App.css';

function Music( { id,searchData } ) {

    console.log(id);
    console.log(searchData);

    const t=searchData.filter((d)=>Number(d.id) === Number(id));

   console.log(t)

    return (
        <div className='music--player'>
                {
                   t.map((d)=>(
                    <>
                        <div>
                            <div>{d.name}</div>
                            <span>{d.artist}</span>
                        </div>

                        <div className='image'>
                            <img id={d.id}  src={ ` https://cms.samespace.com/assets/${d.cover}` } />
                        </div>
                        <div className='music--control'>
                            <audio controls>
                                <source src={d.url} type='audio/mp3'/>
                            </audio>
                        </div>
                    </>
                   ))     
                }
            
        </div>
    )
}

export default Music