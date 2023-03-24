import './App.css';
import {useState} from 'react'
import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import { Routes ,Route } from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import Trailer from './components/Trailer';


function App() {
  const [filter, setFilter] = useState('')  
  const [rate, setRate]=useState(0)
  const [Movielist,setMovieList]=useState([{
    id:uuidv4(),
    title:"Troll ",
    description:'Deep in the mountain of Dovre, something gigantic awakens after being trapped for a thousand years. Destroying everything in its path, the creature is rapidly approaching the capital of Norway. A group of people band together to stop him from causing deadly havoc.',
    posterURL:'https://upload.wikimedia.org/wikipedia/en/e/ec/Troll_%282022%29.jpeg',
    rating:1,
    TrailerURL:"https://www.youtube.com/embed/AiohkY_XQYQ" ,
  }, 
  {id:uuidv4(),
    title:'Avengers : Endgame',
    description :'The Titan Thanos, having managed to appropriate all six Infinity Stones and reunite them on the Golden Gauntlet, was able to achieve his goal of pulverizing half the population of the Universe. Five years later, Scott Lang, aka Ant-Man, manages to escape from the subatomic dimension where he was stuck. He offers the Avengers a solution to bring back to life all the missing beings, including their allies and teammates: recover the Infinity Stones in the past.',
    posterURL:'https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0,0,540,810&width=480',
    rating:2,
    TrailerURL:"https://www.youtube.com/embed/6ZfuNTqbHE8",
  },
  {id:uuidv4(),
     title:'Avatar 2',
  description:"Jake Sully and Ney'tiri have formed a family and do everything to stay as close together as possible. However, they are forced to leave their homes and explore the different still mysterious regions of Pandora. When an old threat resurfaces, Jake will have to fight an uphill war against the humans.",
  posterURL:'https://iegybest.stream/wp-content/uploads/2022/12/Avatar-The-Way-of-Water.jpg',
  rating:4,
  TrailerURL:"https://www.youtube.com/embed/d9MyW72ELq0",
  },
  
 
  {id:uuidv4(),
     title:'Black Adam',
  description:'In ancient Kahndaq, Teth Adam received almighty powers from the gods. After using these powers for revenge, he was imprisoned, becoming Black Adam. Almost 5,000 years have passed and Black Adam has gone from man to myth to legend.',
  posterURL:'https://iegybest.stream/wp-content/uploads/2022/10/Black-Adam.jpg',
  rating:5,
  TrailerURL:"https://www.youtube.com/embed/mkomfZHG5q4",
  },
  { id:uuidv4(),
    title:'Black Panther 2',
  description:"Queen Ramonda, Shuri, MBaku, Okoye and the Dora Milajes struggle to protect their nation",
  posterURL:' https://fr.web.img6.acsta.net/c_310_420/pictures/22/10/17/10/28/5232325.jpg',
  rating:3,
  TrailerURL:"https://www.youtube.com/embed/_Z3QKkl1WyM",

  }
])

  const handleFilter= (val) => {setFilter(val)}
  const handleRate = (val) => {
    setRate(val)}
    const handleAddFilm = (val) => {
      setMovieList([...Movielist,val])}
  
  return (
    
    <div className="App">
      
      <Filter handleFilter={handleFilter} handleRate={handleRate}/>    
      
      <Routes>
      <Route path='/' element={
      <> 
        <AddMovie handleAddFilm={handleAddFilm}/>   
        <div className="App-header">
        <MovieList  list={Movielist.filter(elm=>elm.title.toUpperCase().includes(filter.toUpperCase()) && elm.rating >=rate)}/> 
        </div>
      </>}> 
      </Route>
      <Route path='/:title/:id' element={<Trailer list={Movielist}/>}></Route>
     
      </Routes>
      
    </div>
  );
}

export default App;
