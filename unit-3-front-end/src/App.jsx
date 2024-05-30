
import './App.css'
import { useState, useEffect } from 'react'
import Create from './Create/Create.jsx'
import Navbar from './Navbar/Navbar'
import Edit from './Edit/Edit'
import List from './List/List'

import { getAllRecipes, deleteRecipe, updateRecipe } from './services/recipeService'

// data created to test front end before connecting to backend
// const mockData=[
//   {name: 'test', ingredients: 'test', instructions: 'test', id: 1},
//   {name: 'test', ingredients: 'test', instructions: 'test', id: 2},
//   {name: 'test', ingredients: 'test', instructions: 'test', id: 3},

// ]
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
  const handleUpdate = async (id, updatedRecipe) => {
  await updateRecipe(id, updatedRecipe);
  getRecipes();
  }
  
  const selectedRecipe = recipeList.find((recipe) => recipe._id === editId)

  return (
<>
  
  {pageDisplay === 'home' && 
    <>
      <h1>Welcome to the Recipe App!</h1>
      <Navbar setPageDisplay={setPageDisplay}/>
   </>
  }  
  {pageDisplay === 'create' &&
    <>
      <Navbar setPageDisplay={setPageDisplay}/>
      <Create 
      getRecipes={getRecipes}
      setPageDisplay={setPageDisplay}/>
    </>
  }
  {pageDisplay === 'edit' &&
  <>
  <Navbar setPageDisplay={setPageDisplay}/>
    <Edit 
    id={ editId }
    recipe={selectedRecipe}
    setPageDisplay={setPageDisplay}
    handleUpdate={handleUpdate}
    />
  </>
  }
  {pageDisplay === 'list' &&
  <>
  <Navbar setPageDisplay={setPageDisplay}/>
    <List allRecipes={recipeList}
     handleDelete={handleDelete}
     setEditId={setEditId}
     setPageDisplay={setPageDisplay}
    />
  </>
  }
</>
  )
  }


  

 
export default App
