import { useNavigate } from "react-router-dom";
function navbar({clickedNavbar}) {
    const navigate = useNavigate();
    return (
        <>
        <div className="navbar">
            <ul>
                <li onClick={() => navigate("/")}>Home</li>
                <li onClick={() => navigate("/create")}>New Recipe</li>
                <li onClick={() => navigate("/edit")}>Edit Recipe</li>
                <li onClick={() => navigate("/show")}>All Recipes</li>
            </ul>
            
        </div>
        </>
    )
}

export default navbar;