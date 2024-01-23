import "../style.css"
import Logo from "../Logo/index"
import Navbar from "../Navbar/index"
import Search from "../Search"
import FeatherIcon from 'feather-icons-react';

export default function Header() {
    return (
    <header>  

        <div className="container"> 
            <Navbar></Navbar>
            <Logo></Logo>
            <Search></Search>
            <FeatherIcon className="cart" icon="shopping-cart"/>
        </div>

    </header>
    )
}