import React from 'react';
import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {Container, withStyles, Switch} from "@material-ui/core";
import { blue, grey } from '@material-ui/core/colors';
import Header from './components/header/Header';
import Definiton from './components/Definiton';

function App() {

  const [meanings, setMeanings] = useState([]);
  const [word, setWord] = useState("");
  const [category, setCategory] = useState('en');
  const [LightMode, setLightMode]= useState(false)
  

  const DarkMode = withStyles({
    switchBase: {
      color: grey[300],
      '&$checked': {
        color: grey[500],
      },
      '&$checked + $track': {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

const dictionaryAPI = async() =>{

  const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);
  setMeanings(data.data)
  //console.log(data);
 //  const res = await data.json();

  //const data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/plane`)
}

//console.log(meanings);


useEffect(() => {
  dictionaryAPI();
}, [category, word])



  return (
    <div className="App" style ={{height : '100vh', backgroundColor:LightMode?"white":'#282c34', 
    color:LightMode?"black":'white',
    transition:"all 0.5s linear"}}>
   <Container maxWidth="md"
      style={{display:'flex', flexDirection:'column', height: '100vh',justifyContent:"space-evenly"}}>

      <div style={{position:"absolute", top:0, right:15, paddingTop : 10}}>
        <span >{ LightMode ? "Dark" : "Light"}</span>
        <DarkMode checked={LightMode} onChange = {()=> setLightMode(!LightMode)} />
        </div>

     <Header category ={category} setCategory ={setCategory} word ={word} setWord ={setWord} LightMode={LightMode}/>
    {meanings && (<Definiton word ={word} meanings ={meanings} category ={category} LightMode={LightMode} />)}
   </Container>
    
    </div>
  );
}

export default App;
