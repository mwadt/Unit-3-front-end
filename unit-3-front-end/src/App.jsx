
import { get, set } from 'mongoose'
import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'
import Create from './Create/Create.jsx'
import Navbar from './Navbar/Navbar'
import Edit from './Edit/Edit'
import List from './List/List'
import { deleteRecipe } from './services/recipeService'
import { getAllRecipes } from './services/recipeService'

const mockData=[
  {name: 'test', ingredients: 'test', instructions: 'test', id: 1},
  {name: 'test', ingredients: 'test', instructions: 'test', id: 2},
  {name: 'test', ingredients: 'test', instructions: 'test', id: 3},

]
function App() {
  const [recipeList, setRecipeList] = useState([])
  const [editId, setEditId] = useState(0)
 
  const [pageDisplay, setPageDisplay] = useState('home')

  const getRecipes = async () => { 
    const allRecipes = await getAllRecipes()
    setRecipeList(allRecipes); 
    // setRecipeList(allRecipes)
  } 

  
useEffect(() => {
   getRecipes()}, 
   [])
  

  // const handleClick = (recipe) => {
  //   setSelectedRecipe(recipe)
  //   setView('show')
  // }

  // const clickedNavbar = (page) => {
  //   setView(page)
  // }

  const handleDelete = async (id) => { 
   await deleteRecipe(id)
   console.log('delete', id)
   getRecipes()
  }
//set page display and set edit id




  return (
<>
  <Navbar setPageDisplay={setPageDisplay}/>
  {pageDisplay === 'home' && 
   <h1>Welcome to the Recipe App!</h1>
  }  
  {pageDisplay === 'create' &&
    <Create />
  }
  {pageDisplay === 'edit' &&
    <Edit id={ editId }/>
  }
  {pageDisplay === 'list' &&
    <List allRecipes={recipeList} handleDelete={handleDelete}/>
  }
  
   
</>
  )
}

 
  

 
export default App
