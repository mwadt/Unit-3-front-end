import { useNavigate } from "react-router-dom";

function Navbar({ setPageDisplay }) {
    const navigate = useNavigate();
    return (
        <>
        <div className="navbar">
            <ul>
                <li onClick={() => setPageDisplay('home')}>Home</li>
                <li onClick={() => setPageDisplay("create")}>New Recipe</li>
                <li onClick={() => setPageDisplay("list")}>All Recipes</li>
            </ul>
            
        </div>
        </>
    )
}

export default Navbar;