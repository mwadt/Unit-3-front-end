import React from 'react'

function List({ allRecipes, handleDelete }) {
    console.log(allRecipes)
  return (


    <>
     {allRecipes.map((recipe) => {
        return (
            <>
            <div key={recipe._id}>
                <h3>{recipe.name}</h3>
                <p>{recipe.cuisineType}</p>
                <p>{recipe.ingredients}</p>
                {/* <p>{recipe.ingredients}</p> */}
                
                <button onClick={() => handleDelete(recipe._id)}>Delete</button>
                <button onClick={() => setEditId(recipe._id)}>Edit</button>
            </div>
            </>
        )

        }
    )
  
    }

    </>
)
}


export default List