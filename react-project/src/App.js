// import logo from './logo.svg';
import './App.css';
import React , {useState} from "react";
import Title from './components/Title';
import Module from './components/module';
import EventList from './components/EventList';
import NewMovieForm from './components/NewMovieForm';


function App() {
  const [showEvents , setShowEvents] = useState(true);
  const [showModal , setShowModal] = useState(false);

  const [events , setEvents] = useState([
    // {title : "THOR : LOVE AND THUNDER (2022)" , id : 1},
    // {title : "THE GRAY MAN (2022)" , id : 2},
    // {title : "THE SEA BEAST (2022)" , id : 3},
    // {title : "TOP GUN: MAVERICK (2022)" , id : 4},
    // {title : "DOCTOR STRANGE IN THE MULTIVERSE OF MADNESS (2022)" , id : 5},
    // {title : "HUSTLE (2022)" , id : 6},
  ])

  const handleClick = (id) => {
    console.log(id);
    setEvents((preEvents) => {
      return preEvents.filter((event) => {
        return id !== event.id
      })
    })
  }

  const addMovie = (event) => {
    setEvents((prevEvent) => {
      return [...prevEvent , event]
    })
    setShowModal(false)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const handleOpen = ()=> {
    setShowModal(true)
  }

  const subtitle = "Latest Movies";
  
  return (
    <div className="App">

    <Title title="My Favorite Movies" subtitle={subtitle}/>

      {showEvents && 
      <div>
        <button onClick={() => {setShowEvents(false)}}>Hide</button>
      </div>}

    {!showEvents &&
      <div>
        <button onClick={() => {setShowEvents(true)}}>Show</button>
      </div>}      
      
    {showEvents &&
      <EventList events={events} handleClick={handleClick}/>
      }


    {showModal &&
      <Module handleClose = {handleClose} isSalesModal={true}>

          <NewMovieForm addMovie ={addMovie} />
          
      </Module>
    }
    <br/>
    <br/>
    <button onClick={handleOpen}>Add New Modal</button>

  </div>
  );
}

export default App;