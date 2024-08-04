
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeTheme } from "../Redux/Actions/ThemeAction";

 
export default function NavBar() {

  const MyTheme = useSelector((state) => state.MyTheme.theme)
    const dispatch = useDispatch();

    const hanglingTheme = () => {
      
      dispatch(changeTheme(MyTheme === "light" ? "dark" : "light"));
      
    }
    return(


<ul className="nav">
  <li className="nav-item">
  <Link to="/" className="nav-link">Trendy Movies</Link>
  </li>
  <li className="nav-item">
  <Link to="/home" className="nav-link">Home</Link>
  </li>
  <li className="nav-item">
  <Link to="/about" className="nav-link">About Us</Link>
  </li>
  <li className="nav-item">
  <Link to="/contact" className="nav-link">Contact Us</Link>
  </li>

  <li className="nav-item">
<button className="btn btn-outline-warning" onClick={() => hanglingTheme()}>Theme is {MyTheme}</button>
  </li>
</ul>
    )
}