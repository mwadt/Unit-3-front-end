import { useEffect, useState } from "react";
import { updateRecipe } from '../services/recipeService.js'
import './Edit.css'

function Edit({ recipe, id, setPageDisplay, handleUpdate }) {

    const [formData, setFormData] = useState({
        name: recipe.name,
        ingredients: recipe.ingredients,
        cuisineType: recipe.cuisineType,
    });

    useEffect(() => {
        setFormData({
            name: recipe.name,
            ingredients: recipe.ingredients,
            cuisineType: recipe.cuisineType,
        });
    }, [recipe]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await handleUpdate(id, formData)
        setPageDisplay('list')
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

            <label htmlFor="Cuisine Type"> Cuisine Type: </label>
            <input
                type="text"
                name="cuisineType"
                value={formData.cuisineType}
                onChange={handleChange}
            />

            <button type="submit">Update Recipe</button>
        </form>
    );
}



export default Edit