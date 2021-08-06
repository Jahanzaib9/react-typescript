import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./components/List";
import AddToList from './components/AddToList';

export interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState['people']>([
    {
      name: "Lebron James",
      url: "https://upload.wikimedia.org/wikipedia/commons/c/cf/LeBron_James_crop.jpg",
      age: 36,
      note: "He is the best player"
    }
  ])


  return (
    <div className="App">
      <h1>People invited to my Party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
