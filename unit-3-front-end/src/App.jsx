
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

export default App
