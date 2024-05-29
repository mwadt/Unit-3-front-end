import { useState } from "react";
import { updateRecipe } from '../services/recipeService.js'

function Edit({ recipe, id}) {

    const [formData, setFormData] = useState({
        name: recipe.name,
        ingredients: recipe.ingredients,
        instructions: recipe.instructions,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateRecipe(id, formData)
    };

    return (
        <form onSubmit={ handleSubmit } >
        
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
            />

            <label htmlFor="ingredients">Ingredients</label>
            <input
                type="text"
                name="ingredients"
                id="ingredients"
                value={formData.ingredients}
                onChange={handleChange}
            />

            <label htmlFor="instructions"> Instructions: </label>
            <input
                type="text"
                name="instructions"
                value={formData.instructions}
                onChange={handleChange}
            />

            <button type="submit">Update Recipe</button>
        </form>
    );
}



export default Edit