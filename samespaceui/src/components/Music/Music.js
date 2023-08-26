import React, { useState, useRef, useEffect } from 'react';
import '../../App.css';

function Music({ id, searchData }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [currentTrack, setCurrentTrack] = useState(null);

    const audioRef = useRef(null);

    useEffect(() => {
        const filteredTrack = searchData.find((d) => Number(d.id) === Number(id));
        setCurrentTrack(filteredTrack);
    }, [id, searchData]);

    const handleBackPress = () => {
        const previousId = (currentTrack.id - 1 + searchData.length) % searchData.length;
        setCurrentTrack(searchData.find((d) => Number(d.id) === previousId));
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
        const nextId = (currentTrack.id + 1) % searchData.length;
        setCurrentTrack(searchData.find((d) => Number(d.id) === nextId));
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    return (
        <div className='music--player'>
            {currentTrack && (
                <div className='music--card' key={currentTrack.id}>
                    <div className='music--info'>
                        <div className='music--details'>
                            <div className='music--title'>{currentTrack.name}</div>
                            <div className='music--artist'>{currentTrack.artist}</div>
                        </div>
                        <div className='image'>
                            <img id={currentTrack.id} src={`https://cms.samespace.com/assets/${currentTrack.cover}`} alt={currentTrack.name} />
                        </div>
                    </div>
                    <div className='music--control'>
                        <audio ref={audioRef} onTimeUpdate={handleTimeUpdate}>
                            <source src={currentTrack.url} type='audio/mp3' />
                        </audio>

                        <div class="range-container">
                            <input type="range" class="range-input" min="0" max={audioRef.current ? audioRef.current.duration : 0} step="0.1" value={currentTime} />
                        </div>

                        <div class="music-controls">
                            <button type="button" id={currentTrack.id} class="btn" onClick={handleBackPress}>
                                <i class="fas fa-backward"></i>
                            </button>

                            <button type="button" id={currentTrack.id} class="btn play-btn" onClick={handlePlayPause}>
                                <i class={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
                            </button>

                            <button type="button" id={currentTrack.id} class="btn" onClick={handleForwardPress}>
                                <i class="fas fa-forward"></i>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Music;
