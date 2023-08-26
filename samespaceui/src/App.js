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

  useEffect(()=>{
    fetch('https://cms.samespace.com/items/songs').then((data)=>(data.json()))
    .then((d)=>setData(d.data));
  },[]);


  return (
    <div className="App">
        <Navbar searchData={searchdata} setFilteredData={setFilteredData} />
        <Search searchData={searchdata} setId={setId} filteredData={filteredData} setFilteredData={setFilteredData}/>
        <Music id={id} searchData={searchdata}/>
    </div>
  );
}

export default App;
