export const getAllRecipes = async () => {}



export const getRecipe = async (id) => {}

export const deleteRecipe = async (id) => {}

export const createRecipe = async (recipe) => {
    const response = await fetch('http://localhost:3000/recipes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(recipe)
    })
    const result = await response.json()
    console.log(result)
}



