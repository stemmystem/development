export function AnimalItem(props){
    
    const handleClick = () => {
        {props.updateCart((prevCount) => prevCount + props.weight)}
        {props.items.push([props.weight,  props.name])}
    }

     

    return(
        
        //component using props
        <div >
         
        <h><b>Name:</b> {props.name}</h>
        <p><b>Habitat:</b>{props.habitat}</p>
        <p><b>Lifespan:</b>{props.lifespan}</p>
        <p><b>Weight:</b>{props.weight}</p>
       
         
           <img src = {props.image}/>
           <button onClick = {handleClick} class = "button"> Add Animal Weight!</button>
           <button onClick={() => {props.removeWeight(props.name)
        }}>Remove Animal Weight</button>

        </div>
    );
}
