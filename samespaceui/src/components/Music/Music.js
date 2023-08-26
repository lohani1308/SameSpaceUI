import React from 'react';
import '../../App.css';

function Music( { id,searchData } ) {

    console.log(id);
    console.log(searchData);

    const t=searchData.filter((d)=>Number(d.id) === Number(id));

   console.log(t)

    return (
            <div className='music--player'>
            {t.map((d) => (
                <div className='music--card' key={d.id}>
                <div className='music--info'>
                    <div className='music--details'>
                    <div className='music--title'>{d.name}</div>
                    <div className='music--artist'>{d.artist}</div>
                    </div>
                    <div className='image'>
                    <img id={d.id} src={`https://cms.samespace.com/assets/${d.cover}`} alt={d.name} />
                    </div>
                </div>
                <div className='music--control'>
                    <audio>
                    <source src={d.url} type='audio/mp3' />
                    </audio>
                    <div class="player text-center">
                    <button type="button" id="button_fbw" class="btn" onclick='buttonRewindPress()'>
                    <i class="fa fa-fast-backward"></i>
                    </button>
                    
                    <button type="button" id="button_bw" class="btn" onclick='buttonBackPress()'>
                    <i class="fa fa-backward"></i>
                    </button>
                    
                    <button type="button" id="button_play" class="btn" onclick='buttonPlayPress()'>
                    <i class="fa fa-play"></i>
                    </button>
                    
                    <button type="button" id="button_stop" class="btn" onclick='buttonStopPress()'>
                    <i class="fa fa-stop"></i>
                    </button>
                    
                    <button type="button" id="button_fw" class="btn" onclick='buttonForwardPress()'>
                    <i class="fa fa-forward"></i>
                    </button>
                    
                    <button type="button" id="button_ffw" class="btn" onclick='buttonFastforwardPress()'>
                    <i class="fa fa-fast-forward"></i>
                    </button>    
                </div>
                    </div>
                </div>
            ))}
            </div>

        )
}

export default Music