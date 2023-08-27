import logo from './logo.svg';
import './App.css';
import Search from './components/Search/Search';
import { useEffect, useState } from 'react';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';

function App() {

  const [searchdata,setData]=useState([]);
  const [id,setId]=useState();
  const [filteredData,setFilteredData]=useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [addToFav,setAddFav]=useState([]);
  const [recentlyPlayed,setRecentlyPlayed]=useState([]);

  useEffect(()=>{
    fetch('https://cms.samespace.com/items/songs').then((data)=>(data.json()))
    .then((d)=>setData(d.data));
  },[]);

  let appStyle = {
    background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url('${currentTrack?.cover}') center/cover`,
  };


  return (
    <div style={appStyle} className="App">
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

      </div>
    </div>
  );
}

export default App;
