
import { set } from 'mongoose'
import './App.css'

function App() {
  

  return (

   <h1>Welcome to the Recipe App!</h1>
   const getRecipes = async () => {
    const allRecipes = await RecipeList.index()
    setRecipeList(allRecipes)
  } 

  const handleCreate = async (recipe) => {
    const newRecipe = await RecipeList.create(recipe)
    
  }
  )
}

  const handleClick = (recipe) => {
    setSelectedRecipe(recipe)
    setView('show')
  }

  const clickedNavbar = (page) => {
    setView(page)
  }

  const handleDelete = async (recipe) => { 
    const deletedRecipe = await RecipeList.delete(recipe)
    getRecipes()
    setView('index')
  }

export default App
