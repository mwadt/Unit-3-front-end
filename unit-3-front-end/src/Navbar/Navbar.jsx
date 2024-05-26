function navbar({clickedNavbar}) {
    return (
        <>
        <div className="navbar">
            <ul>
                <li onClick={() => clickedNavbar("home")}>Home</li>
                <li onClick={() => clickedNavbar("create")}>New Recipe</li>
                <li onClick={() => clickedNavbar("edit")}>Edit Recipe</li>
                <li onClick={() => clickedNavbar("index")}>All Recipes</li>
            </ul>
            
        </div>
        </>
    )
}