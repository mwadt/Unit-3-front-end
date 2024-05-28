import { useState } from "react";
import { createRecipe } from '../services/recipeService.js'

function Create() {
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: "",
    instructions: "",
  });

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  


  return (
    <form onSubmit={ () => createRecipe(recipe) }> 
        <label htmlFor="name">Name</label> 
        <input 
            type="text" 
            name="name"
            id="name"   
            value={recipe.name} 
            onChange={handleChange} 
        />
        
        <label htmlFor="ingredients">Ingredients</label>
        <input 
            type="text" 
            name="ingredients"
            id="ingredients" 
            value={recipe.ingredients} 
            onChange={handleChange}
        />
       
        <label htmlFor="instructions"> Instructions: </label>
        <input
          type="text"
          name="instructions"
          value={recipe.instructions}
          onChange={handleChange}
        />
      
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default Create; 