import './App.css';
import Card from './components/Card';
import Counter from './components/Counter';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Animals from './components/Animals';

function App() {
  const [details, setDetails] = useState({})

const fetchDetails = async () => {
 const {data} = await axios.get("https://randomuser.me/api/");
 //console.log(data);
 const details = data.results[0]
 setDetails(details)
 console.log(details);
}

useEffect(() => {
  fetchDetails()
}, [])


    return ( 
      <div className = "App" >
        <Counter/>
        <Card details = {details} />
       <Animals />
        {/* <Card  imageUrl="https://images.pexels.com/photos/161077/prague-vencel-square-czech-republic-church-161077.jpeg?auto=compress&cs=tinysrgb&w=800" />
        {<Card name= "Sivakumar" imageUrl="https://images.pexels.com/photos/9651000/pexels-photo-9651000.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" />}
        */} </div>
    );
}

export default App