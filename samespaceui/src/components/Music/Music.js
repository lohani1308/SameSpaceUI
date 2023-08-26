import React, { useState, useRef } from 'react';
import '../../App.css';

function Music({ id, searchData }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);

    const audioRef = useRef(null);

    const t = searchData.filter((d) => Number(d.id) === Number(id));

    const handleBackPress = () => {
        if (audioRef.current) {
            audioRef.current.currentTime -= 10; // Go back 10 seconds
        } 
    };

    const handlePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleForwardPress = () => {
        if (audioRef.current) {
            audioRef.current.currentTime += 10; // Go forward 10 seconds
        }
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

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
                        <audio ref={audioRef} onTimeUpdate={handleTimeUpdate}>
                            <source src={d.url} type='audio/mp3' />
                        </audio>

                        <div class="range-container">
                            <input type="range" class="range-input" min="0" max={audioRef.current ? audioRef.current.duration : 0} step="0.1" value={currentTime} />
                        </div>

                        <div class="music-controls">
                            <button type="button" id="button_bw" class="btn" onClick={handleBackPress}>
                                <i class="fas fa-backward"></i>
                            </button>

                            <button type="button" id="button_play" class="btn play-btn" onClick={handlePlayPause}>
                                <i class={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
                            </button>

                            <button type="button" id="button_fw" class="btn" onClick={handleForwardPress}>
                                <i class="fas fa-forward"></i>
                            </button>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    );
}

export default Music;
