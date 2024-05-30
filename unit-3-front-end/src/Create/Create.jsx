import { useState } from "react";
import { createRecipe, getAllRecipes } from '../services/recipeService.js'
import { get } from "mongoose";

function Create() {
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: "",
    cuisineType: "",
  });

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
    
  };


  


  return (
    <form onSubmit={ (e) => {
      e.preventDefault()
      createRecipe(recipe) 
    }  
    }> 
      
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
       
        <label htmlFor="cuisineType"> Cuisine Type: </label>
        <input
          type="text"
          name="cuisineType"
          id="cuisineType"
          value={recipe.cuisineType}
          onChange={handleChange}
        />
      
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default Create; 

// import { useState } from "react";
// import { createRecipe } from '../services/recipeService.js';

// function Create() {
//   const [recipe, setRecipe] = useState({
//     name: "",
//     ingredients: [{ name: "", quantity: "" }],
//     instructions: "",
//     cusineType: "",
//   });

//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setRecipe({ ...recipe, [e.target.name]: e.target.value });
//   };

//   const handleIngredientChange = (index, e) => {
//     const { name, value } = e.target;
//     const ingredients = [...recipe.ingredients];
//     ingredients[index][name] = value;
//     setRecipe({ ...recipe, ingredients });
//   };

//   const addIngredient = () => {
//     setRecipe({
//       ...recipe,
//       ingredients: [...recipe.ingredients, { name: "", quantity: "" }]
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const result = await createRecipe(recipe);
//       setMessage("Recipe created successfully!");
//       console.log(result);
//     } catch (error) {
//       setMessage("Error creating recipe.");
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name</label>
//         <input
//           type="text"
//           name="name"
//           id="name"
//           value={recipe.name}
//           onChange={handleChange}
//         />
        {/* <label htmlFor="cusineType">Cusine Type</label>
        <input
          type="text"
          name="cusineType"
          id="cusineType"
          value={recipe.cusineType}
          onChange={handleChange}
        /> */}
        {/* <label htmlFor="ingredients">Ingredients</label>
        {recipe.ingredients.map((ingredient, index) => (
          <div key={index}>
            <input
              type="text"
              name="name"
              placeholder="Ingredient Name"
              value={ingredient.name}
              onChange={(e) => handleIngredientChange(index, e)}
            />
            <input
              type="text"
              name="quantity"
              placeholder="Quantity"
              value={ingredient.quantity}
              onChange={(e) => handleIngredientChange(index, e)}
            />
          </div>
        ))}
        
        <button type="button" onClick={addIngredient}>
          Add Ingredient
        </button>
        <button type="submit">Add Recipe</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

// export default Create; */}

// import { useState } from "react";
// import { createRecipe } from '../services/recipeService.js';

// function Create() {
//   const [recipe, setRecipe] = useState({
//     name: "",
//     ingredients: [{ name: "", quantity: "" }],
//     instructions: "",
//     cuisineType: ""
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setRecipe({ ...recipe, [name]: value });
//   };

//   const handleIngredientChange = (index, e) => {
//     const { name, value } = e.target;
//     const ingredients = [...recipe.ingredients];
//     ingredients[index][name] = value;
//     setRecipe({ ...recipe, ingredients });
//   };

//   const addIngredient = () => {
//     setRecipe({
//       ...recipe,
//       ingredients: [...recipe.ingredients, { name: "", quantity: "" }]
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const result = await createRecipe(recipe);
//       console.log('Recipe created:', result);
//     } catch (error) {
//       console.error('Error creating recipe:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="name">Name</label>
//       <input
//         type="text"
//         name="name"
//         id="name"
//         value={recipe.name}
//         onChange={handleChange}
//       />
//       <label htmlFor="cuisineType">Cuisine Type</label>
//       <input
//         type="text"
//         name="cuisineType"
//         id="cuisineType"
//         value={recipe.cuisineType}
//         onChange={handleChange}
//       />
//       <label>Ingredients</label>
//       {recipe.ingredients.map((ingredient, index) => (
//         <div key={index}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Ingredient Name"
//             value={ingredient.name}
//             onChange={(e) => handleIngredientChange(index, e)}
//           />
//           <input
//             type="text"
//             name="quantity"
//             placeholder="Quantity"
//             value={ingredient.quantity}
//             onChange={(e) => handleIngredientChange(index, e)}
//           />
//         </div>
//       ))}
//       <button type="button" onClick={addIngredient}>Add Ingredient</button>
//       <label htmlFor="instructions">Instructions</label>
//       <input
//         type="text"
//         name="instructions"
//         id="instructions"
//         value={recipe.instructions}
//         onChange={handleChange}
//       />
//       <button type="submit">Add Recipe</button>
//     </form>
//   );
// }

// export default Create;

// import { useState } from "react";
// import { createRecipe } from '../services/recipeService.js';

// function Create() {
//   const [recipe, setRecipe] = useState({
//     name: "",
//     ingredients: "",
//     // ingredients: [{ name: "", quantity: "" }],
//     // instructions: "",
//     cuisineType: ""
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setRecipe({ ...recipe, [name]: value });
//   };

//   // const handleIngredientChange = (index, e) => {
//   //   const { name, value } = e.target;
//   //   const ingredients = [...recipe.ingredients];
//   //   ingredients[index][name] = value;
//   //   setRecipe({ ...recipe, ingredients });
//   // };

//   // const addIngredient = () => {
//   //   setRecipe({
//   //     ...recipe,
//   //     ingredients: [...recipe.ingredients, { name: "", quantity: "" }]
//   //   });
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       console.log("Recipe being created:", recipe); // Log the recipe to check the data
//       const result = await createRecipe(recipe);
//       console.log('Recipe created:', result);
//     } catch (error) {
//       console.error('Error creating recipe:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="name">Name</label>
//       <input
//         type="text"
//         name="name"
//         id="name"
//         value={recipe.name}
//         onChange={handleChange}
//         required
//       />
//       <label htmlFor="cuisineType">Cuisine Type</label>
//       <input
//         type="text"
//         name="cuisineType"
//         id="cuisineType"
//         value={recipe.cuisineType}
//         onChange={handleChange}
//       />
//       <label>Ingredients</label>
//       {recipe.ingredients.map((ingredient, index) => (
//         <div key={index}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Ingredient Name"
//             value={ingredient.name}
//             onChange={(e) => handleIngredientChange(index, e)}
//             required
//           />
//           <input
//             type="text"
//             name="quantity"
//             placeholder="Quantity"
//             value={ingredient.quantity}
//             onChange={(e) => handleIngredientChange(index, e)}
//             required
//           />
//         </div>
//       ))}
//       <button type="button" onClick={addIngredient}>Add Ingredient</button>
//       <label htmlFor="instructions">Instructions</label>
//       <input
//         type="text"
//         name="instructions"
//         id="instructions"
//         value={recipe.instructions}
//         onChange={handleChange}
//         required
//       />
//       <button type="submit">Add Recipe</button>
//     </form>
//   );
// }

// export default Create