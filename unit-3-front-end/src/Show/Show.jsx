

function Show({ selectedRecipe, handleDelete, handleUpdate }) {
    return (
        <div>
            <h1>{selectedRecipe.name}</h1>
            <h2>{selectedRecipe.description}</h2>
            <h3>{selectedRecipe.instructions}</h3>
            <button onClick={() => handleDelete(selectedRecipe)}>Delete</button>
            <button onClick={() => handleUpdate(selectedRecipe)}>Update</button>
        </div>
    )
}

export default Show;