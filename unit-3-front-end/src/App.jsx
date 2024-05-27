
import { get, set } from 'mongoose'
import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { createRecipe } from './services/recipeService.js'
import Navbar from './Navbar/Navbar'

const mockData=[
  {name: 'test', ingredients: 'test', instructions: 'test', id: 1},
  {name: 'test', ingredients: 'test', instructions: 'test', id: 2},
  {name: 'test', ingredients: 'test', instructions: 'test', id: 3},

]
function App() {
  const [recipeList, setRecipeList] = useState([])
  const [showEdit, setShowEdit] = useState(0)
  const [form, setForm] = useState({

    name: '',
    ingredients: '',
    instructions: ''
  })
  const getRecipes = async () => { 
    // const allRecipes = await RecipeList.index()
    // setRecipeList(allRecipes)
  } 

useEffect(() => { getRecipes()}, [])
  const handleCreate = async (e) => {
    e.preventDefault()
    console.log(e.target.name.value)
    // const newRecipe = await createRecipe({
    //   name: e.target.name.value, 
    //   ingredients: e.target.ingredients.value,
    //   instructions: e.target.instructions.value
      
    // })
    setForm({ 
      name: '', 
      ingredients: '', 
      instructions: ''
    })
  }

  // const handleClick = (recipe) => {
  //   setSelectedRecipe(recipe)
  //   setView('show')
  // }

  // const clickedNavbar = (page) => {
  //   setView(page)
  // }

  const handleDelete = async (id) => { 
    // const deletedRecipe = await RecipeList.delete(id)
    // getRecipes()
   console.log('delete', id)
   getRecipes()
  }




  return (
<>
  <Navbar />
   <h1>Welcome to the Recipe App!</h1>
   <form onSubmit={handleCreate} >
      <label htmlFor="name">Name</label>
      <input value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} type="text" name="name" id="name" />
      <label htmlFor="ingredients">Ingredients</label>
      <input value={form.ingredients} onChange={(e) => setForm({...form, ingredients: e.target.value})} type="text" name="ingredients" id="ingredients" />
      <label htmlFor="instructions">Instructions</label>
      <input value={form.instructions} onChange={(e) => setForm({...form, instructions: e.target.value})} name="instructions" id="instructions" />
      <button type="submit">Add Recipe</button>
   </form>
   
   {mockData.map((recipe, i) => {
      return <div key={i}>
        <h1>{recipe.name}</h1>
        <h2>{recipe.ingredients}</h2>
        <h3>{recipe.instructions}</h3>
        <button onClick={() => handleDelete(recipe.id)}>Delete</button>
        <button onClick={() => setShowEdit(recipe.id)}> Update</button>
        {showEdit === recipe.id && <form>   
          <label htmlFor="name">Name</label>
            <input value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} type="text" name="name" id="name" />
            <label htmlFor="ingredients">Ingredients</label>
            <input value={form.ingredients} onChange={(e) => setForm({...form, ingredients: e.target.value})} type="text" name="ingredients" id="ingredients" />
            <label htmlFor="instructions">Instructions</label>
            <input value={form.instructions} onChange={(e) => setForm({...form, instructions: e.target.value})} name="instructions" id="instructions" />
            <button type="submit">Update Recipe</button>
        </form>}
      </div>
   }
  )}
</>
  )
}

 
  

 
export default App
