export default function Filters(props) {

    const lifespanSortButton = (eventKey)=> {
      props.setLifespanSort(eventKey.target.checked)
    }
  
    const selectHabitatFilter = (eventKey) => {
      const landCheckbox = document.querySelector('input[value="Land"]');
      const oceanCheckbox = document.querySelector('input[value="Ocean"]');
      
      if ((landCheckbox.checked && oceanCheckbox.checked) || (!landCheckbox.checked && !oceanCheckbox.checked )) {
        props.setHabitat("All");
      } else if (landCheckbox.checked){
        props.setHabitat("Land")}
        else if(oceanCheckbox.checked){
          props.setHabitat("Ocean");
        }
       
       
      }
  
  
      return(
          <div className="FilterText" >
          <h2>Sort by</h2>
          <input type="checkbox" onChange={lifespanSortButton} /> Lifespan (Highest to Lowest)
  
          <h2>Filter by Habitat:</h2>
          <div onChange={selectHabitatFilter}>
            
            <input type="checkbox" value="Land" name="habitat" /> Land
            <br></br>
            <input type="checkbox" value="Ocean" name="habitat" /> Ocean
            <br></br>
           
          </div>
  
          
         </div> 
      )
  }