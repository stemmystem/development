# Development

### Link to Deployed Website
If you used the stencil code, this is `https://stemmystem.github.io/development`

### Goal and Value of the Application

My application is called the 'Noah's Ark Calculator' and it is an application to calculate the total weight of various
types animals to transport/save, allowing users to filter/sort for desired animals (e.g. longest lifespan) 
should an apocalypse ever arise. I got inspired by the Noah's Ark stories I used to read to when I was little; this is a fun app
that enables users to view information about animals and calculate the number of animals they can save, as 
airplanes and ships usually have a limit on the maximum weight it can carry. Outside of an 'theoretical apocalypse',
this app can teach children about the different terrains that animals can inhabit, and it filters to display 
animals that live in the selected terrain (ocean vs land). The cart also calculates and displays the weight of an 
aggregate of animals by animal name and frequency. 

### Usability Principles Considered

Learnability and memorability: The cart and filter is displayed on the left as users would naturally chronologically look left before 
right, and they would be able to set the filters/ordering and then looking right to see the newly sorted/filtered 
components. The cart is also displayed underneath the filters as users will add animals to cart after they have filtered for their
desired animal types and selected. Also, the buttons on the animal cards have shadows on them so users know that it is an
interactable element, and it bounces up when hovered over. 

The animal cards have information displayed above them to display the datatypes that can be filtered for (as there is 
also extraneous information on the collectible 'top trump' card which cannot be filtered for ). 


### Organization of Components
I have 2 components in my program:
- AnimalItems.js
- filters.js
My animal-data.json contains all the animal item data. 
My animal item component uses props to access data and in the app class clicks are handled. 
My filters.js component is displayed in the app class (more explanation in below prompt)
App.js contains an AnimalItem.js and filters.js component. 

### How Data is Passed Down Through Components
I created a const for filteredData to display animal items that pass through the filters that users input. 
I do this by using filter() on a json that has my animal data (animal-data.json) and checking if it matches the habitat, and then 
 I made AnimalItem components for each individual item by mapping this filtered data to match each data type, e.g: weight={item.weight}
 (in app.js). 

For the filters component, I handle the checkbox logic in the filters.js file, and in app.js I use a Set to store animal names to avoid adding duplicate items to the cart, and map this data to display the information. 

### How the User Triggers State Changes

1. By checking the lifespan checkbox, which then sorts the animals from highest to shortest lifespan
--> const [lifespanSort, setLifespanSort] = useState(false)
--> useState() is used, and if lifespanSort is true (it is checked) data is sorted
2. By checking the Land/Ocean/both/neither checkbox 
-->  const [currHabitat, setHabitat] = useState("All")
--> consts are created for land/oceancheckbox and if they are checked, the corresponding habitat is set on the props
3.  By clicking add animal weight/ remove animal weight button 
--> There is an 'onClick()' method called by button press which then handles calculations in the app class

