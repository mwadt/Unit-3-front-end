

function List({ allRecipes, handleDelete }) {
    console.log(allRecipes)
  return (


    <>
     {allRecipes.map((recipe) => {
        return (
            <>
            <div key={recipe.id}>
            <h3>{recipe.name}</h3>
            <p>{recipe.ingredients}</p>
            <p>{recipe.instructions}</p>
            <button onClick={() => handleDelete(recipe.id)}>Delete</button>
            {/* <button onClick={() => setEditId(recipe.id)}>Edit</button> */}
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