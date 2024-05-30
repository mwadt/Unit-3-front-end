// export const getAllRecipes = async () => {}



// export const updateRecipe = async (id, recipe) => {
//     const response = await fetch(`http://localhost:3000/recipes/${id}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(recipe)
//     })

//     const result = await response.json()
//     return result
// }

// export const deleteRecipe = async (id) => {
//     const response = await fetch(`http://localhost:3000/recipes/${id}`, {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json'
//         },
        
//     })
//     const result = await response.json()
//     console.log(result)
// }

// export const createRecipe = async (recipe) => {
//     const response = await fetch('http://localhost:3000/recipes', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(recipe)
//     })
//     const result = await response.json()
//     console.log(result)
// }


// export const getAllRecipes = async () => {
//     try {
//         const response = await fetch('http://localhost:3000/recipes', {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//         })
//         const result = await response.json()
//         return result
//     } catch (error) {
//         console.error('Error fetching recipes:', error)
//         throw error
//     }
// }

// export const updateRecipe = async (id, recipe) => {
//     try {
//         const response = await fetch(`http://localhost:3000/recipes/${id}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(recipe)
//         })
//         const result = await response.json()
//         return result
//     } catch (error) {
//         console.error('Error updating recipe:', error)
//         throw error
//     }
// }

// export const deleteRecipe = async (id) => {
//     try {
//         const response = await fetch(`http://localhost:3000/recipes/${id}`, {
//             method: 'DELETE',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//         })
//         const result = await response.json()
//         return result
//     } catch (error) {
//         console.error('Error deleting recipe:', error)
//         throw error
//     }
// }

// export const createRecipe = async (e, recipe) => {
    
//     try {
//         console.log('Sending request to create recipe:', recipe);
//         const response = await fetch('http://localhost:3000/recipes', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(recipe)
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const result = await response.json();
//         console.log('Received response:', result);
//         return result;
//     } catch (error) {
//         console.error('Error creating recipe:', error.message);
//         throw error;
//     }
// };

export const getAllRecipes = async () => {
    try {
        
        const response = await fetch('http://localhost:3000/recipes', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const result = await response.json()
        console.log(result)
        return result
    } catch (error) {
        console.error('Error fetching recipes:', error)
        throw error
    }
}

export const updateRecipe = async (id, recipe) => {
    try {
        const response = await fetch(`http://localhost:3000/recipes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(recipe)
        })
        const result = await response.json()
        return result
    } catch (error) {
        console.error('Error updating recipe:', error)
        throw error
    }
}

export const deleteRecipe = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/recipes/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const result = await response.json()
        return result
    } catch (error) {
        console.error('Error deleting recipe:', error)
        throw error
    }
}

export const createRecipe = async (recipe) => {
    try {
        const response = await fetch('http://localhost:3000/recipes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(recipe)
        })
        const result = await response.json()
        return result
    } catch (error) {
        console.error('Error creating recipe:', error)
        throw error
    }
}
