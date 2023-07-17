import React, {useState, useEffect} from "react";
import DogDisplay from "./Dog"




function App() {

  const [dogs, setDogs] = useState([]);
  const [display, setDisplay] = useState("");
  const [filter, setFilter] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3001/pups')
    .then((response) => response.json())
    .then((data) => setDogs(data))
  }, [])



const filteredDogs = dogs.filter((dog) => {
  if(filter){
    return dog.isGoodDog
  }
else return true
})

console.log(filteredDogs)


const dogList = filteredDogs.map((dog) => <span onClick={() => displayDog(dog)} key={dog.id}>{dog.name}</span>)
  
function displayDog(dog){
  setDisplay(dog)

}

function handleFilter(){
setFilter((filter) => !filter)
}
console.log(display)
  return  (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter" onClick={handleFilter}>{filter ? "Filter good dogs: ON" : "Filter good dogs: OFF"}</button>
      </div>
      <div id="dog-bar">{dogList}</div>
      <DogDisplay displayDog={display}/>
    </div>
  );
}

export default App;
