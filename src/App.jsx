import { MovieMain } from "./components/MovieMain";
import "./App.css";
import { TopCastContainer } from "./components/TopCastContainer";
import { BookingButton } from "./components/BookingButton";
import { useEffect, useState } from "react";
import { getMovie } from "./services/getMovie";

function App() {
  // const [dogs, setDogs] = useState("");
  // // console.log(dogs);
  // useEffect(() => {
  //   fetch("https://api.thecatapi.com/v1/images/search")
  //     .then((response) => response.json())
  //     .then((data) => setDogs(data));
  // }, []);
  
  // const [serie, setSerie] = useState([])

  // useEffect(()=>{
  //   async function fetchData(){
  //     const response = await fetch("https://rickandmortyapi.com/api/character");
  //     const data = await response.json();
  //     setSerie(data.results);
  //   }

  //   fetchData()
  // },[]);

  const [peli, setPeli] = useState("");
  useEffect(() => {
    getMovie().then(res=>setPeli(res))
}, []);


  return (
    <div className="App">
      <MovieMain peli={peli} />

      <TopCastContainer pelis={peli}/>

      <BookingButton />
    </div>
  );
}

export default App;
