import "./App.css";
import { useState } from "react";
import animalData from "./assets/animal-data.json"; 
import { AnimalItem } from "./components/AnimalItem"
import Filters from "./components/filters";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
animalData.forEach((item) => {
  
});
/* ############################################################## */

function App() {
  //use useState to create a state variable to hold the state of the cart
   

  //counters
  const [cart, updateCart] = useState(0);
  const [currHabitat, setHabitat] = useState("All")
  const [items, updateItems] = useState([]);
  const [lifespanSort, setLifespanSort] = useState(false)


  const matchesHabitat = (animal) => {
    if (currHabitat === "All") {
      return true
    } else if (animal.habitat === currHabitat) {
      return true
    } else {
      return false
    }
  }

  // filter animalData by habitat
  const filteredData = animalData.filter(matchesHabitat);

  if (lifespanSort) {
    filteredData.sort((a, b) => {return b.lifespan - a.lifespan})
  }

  //   function to calculate the sum of weight for specific animal names
  const calculateWeight = (name) => {
    let totalWeight = 0;
    for (let i = 0; i < items.length; i++) {
      if (items[i][1] === name) {
        totalWeight += items[i][0];
      }
    }
    return totalWeight;
  }

  //   function to increment animal frequency as information in the cart
  const calculateAnimalFreq = (name) =>{
    let animalFreq = 0;
    for (let i = 0; i < items.length; i++) {
      if (items[i][1] === name) {
        animalFreq+=1;
      }
    }
    return animalFreq;
  }

  //   function to remove weight of an animal only if it's already been added to the cart
  function removeWeight(name){
    let found = false;
  const newItems = items.filter(a => {
    if (found || a[1] !== name) {
      return true;
    } else {
      found = true;
      return false;
    }
  });
    // update the state of the items array
    updateItems(newItems);
    // update the state of the cart by subtracting the weight of the removed animal items
    if(found){
      updateCart(cart - items[0][0]);
    }
    
  }
        

  return (
    <div className="App">
    <h1>Noah's Ark Calculator!</h1> 
    <div id="content">
        <div id="gallery">
          <div className = "Left">
          <Filters setLifespanSort={setLifespanSort} setHabitat={setHabitat}  />
          
      <h1>Noah's Cart</h1>
      {/* Render a list of items in the cart */}
      <div>
        {/* use a Set to store animal names to avoid adding duplicate items to the cart */}
        {[...new Set(items.map(a => a[1]))].map(name => (
          <p1>
             {calculateAnimalFreq(name)} x {name} ({calculateWeight(name)} kg total) 
            <br></br>
          
            
          </p1>
        ))}
     
    
      <h2> Total Weight: {cart} kg  </h2>  
  
        <div>
          <button onClick={() => {
            // reset the state of the items array
            updateItems([]);
            // reset the state of the cart
            updateCart(0);
          }}>
            Remove All Animals
          </button>
        </div>
        

      </div>
    </div>
          </div>
  
          {/* Display the list of animal cards*/}
        <div className="DisplayList">
          {filteredData.map((item, index) => ( 
            <div className="DisplayList-item" key={index}>
              <AnimalItem 
                 name={item.name}
                habitat={item.habitat}
                weight={item.weight}
                lifespan = {item.lifespan}
                cart={cart}
                updateCart={updateCart}
                removeWeight={removeWeight}
                items={items}
                updateItems={updateItems}
                image={item.image}
              /> 
            </div>
          ))}
        </div>
       
        
    
        
    
  </div>
  </div>
  
  
)}

export default App;
