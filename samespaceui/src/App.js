import React, { useEffect, useState } from 'react';
import './App.css';
import Search from './components/Search/Search';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import { ColorExtractor } from 'react-color-extractor'; // Import the ColorExtractor component

function App() {
  const [searchdata, setData] = useState([]);
  const [id, setId] = useState();
  const [filteredData, setFilteredData] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [addToFav, setAddFav] = useState([]);
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);
  const [imageColors, setImageColors] = useState([]); // State to hold extracted image colors

  useEffect(() => {
    fetch('https://cms.samespace.com/items/songs')
      .then((data) => data.json())
      .then((d) => setData(d.data));
  }, []);

  const [gradientColors, setGradientColors] = useState('');

  useEffect(() => {
    // Create linear gradient using the extracted colors
    if (imageColors.length > 0) {
      const colorStops = imageColors.join(', ');
      setGradientColors(`linear-gradient(135deg, ${colorStops})`);
    }
  }, [imageColors]);

  // Function to handle image color extraction
  console.log(imageColors);
  console.log(gradientColors);

  return (
    <div style={{ background: gradientColors }} className="App">
      <Navbar
        searchData={searchdata}
        setFilteredData={setFilteredData}
        addToFav={addToFav}
        recentlyPlayed={recentlyPlayed}
        setRecentlyPlayed={setRecentlyPlayed}
      />

      <div className="content-wrapper">
        <Search
          searchData={searchdata}
          setId={setId}
          filteredData={filteredData}
          setFilteredData={setFilteredData}
          setAddFav={setAddFav}
          currentTrack={currentTrack}
          setRecentlyPlayed={setRecentlyPlayed}
        />

        <Music
          id={id}
          searchData={searchdata}
          currentTrack={currentTrack}
          setCurrentTrack={setCurrentTrack}
          setRecentlyPlayed={setRecentlyPlayed}
        />

        {/* Use ColorExtractor component to extract colors */}
        {currentTrack && (
          <ColorExtractor src={`https://cms.samespace.com/assets/${currentTrack.cover}`} getColors={(colors) => setImageColors(colors)} />
        )}

        {/* Display extracted colors */}
        <div className="extracted-colors">
          {imageColors.map((color, index) => (
            <div
              key={index}
              style={{ backgroundColor: color }}
              className="extracted-color"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
