import { NavLink, Navigate } from "react-router-dom";
import "./navbar.scss";


const NavBar = () => {

    return (
        <>
            {/* <div class="header">
            <img src="https://images.pexels.com/photos/1518500/pexels-photo-1518500.jpeg?auto=compress&cs=tinysrgbs" />
        </div> */}

            <nav class="nav-container">
                <div class="component-nav"><NavLink to="/" exact="/" replace={true}>Logo Here</NavLink></div>
                <div style={{ float: 'right', paddingRight: '5px' }} class="component-nav"><div class="about">About</div></div>
            </nav>
        </>
    )
}
export default NavBar;