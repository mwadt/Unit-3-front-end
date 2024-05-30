import React from 'react'
import './List.css'

function List({ allRecipes, handleDelete, setEditId, setPageDisplay }) {
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
                
                <button className="deleteButton" onClick={() => handleDelete(recipe._id)}>Delete</button>
                <button className='editButton' onClick={() => {
                    setEditId(recipe._id);
                    setPageDisplay('edit');
                }
                }
                >Edit</button>
    
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