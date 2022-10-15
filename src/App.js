import './App.css';
import Card from './components/Card';
import Counter from './components/Counter';

function App() {
    return ( 
      <div className = "App" >
        <Counter/>
        <Card  imageUrl="https://images.pexels.com/photos/161077/prague-vencel-square-czech-republic-church-161077.jpeg?auto=compress&cs=tinysrgb&w=800" />
        {/* <Card name= "Sivakumar" imageUrl="https://images.pexels.com/photos/9651000/pexels-photo-9651000.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" /> */}
        </div>
    );
}

export default App