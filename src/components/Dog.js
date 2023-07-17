import React, {useState} from "react"

function DogDisplay ({displayDog}){

const [isOn, setOn] = useState(displayDog.isGoodDog)


function handleClick(e){
   setOn((isOn) => !isOn)
   console.log(displayDog)

   fetch(`http://localhost:3001/pups/${displayDog.id}`, {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        isGoodDog: !displayDog.isGoodDog
    })
   })
   .then((response) => response.json())
   .then((data) => console.log(data))
}

console.log(isOn)

    return (
        <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
            <h2>{displayDog.name}</h2>
            <img src={displayDog.image}></img>
            {displayDog ? <button onClick={handleClick}>{isOn ? "Good Dog!" : "Bad Dog!"}</button> : null}
        </div>
      </div>
    )
}

export default DogDisplay;