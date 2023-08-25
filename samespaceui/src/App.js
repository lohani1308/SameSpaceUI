import logo from './logo.svg';
import './App.css';
import Search from './components/Search/Search';
import { useEffect, useState } from 'react';
import Music from './components/Music/Music';

function App() {

  const [searchdata,setData]=useState([]);
  const [id,setId]=useState();

  useEffect(()=>{
    fetch('https://cms.samespace.com/items/songs').then((data)=>(data.json()))
    .then((d)=>setData(d.data));
  },[]);


  return (
    <div className="App">
        <Search searchData={searchdata} setId={setId}/>
        <Music id={id} searchData={searchdata}/>
    </div>
  );
}

export default App;
