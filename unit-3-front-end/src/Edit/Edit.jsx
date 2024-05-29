import { useState } from "react";

function EditRecipe({ recipe, handleUpdate}) {

    const [form, setForm] = useState({
        name: recipe.name,
        ingredients: recipe.ingredients,
        instructions: recipe.instructions,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                handleUpdate(formData);
            }}
        >
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



export default function Edit() {
    const [recipe, setRecipe] = useState({
        name: "",
        ingredients: "",
        instructions: "",
    });
    })
    
    return (
        
    )
}