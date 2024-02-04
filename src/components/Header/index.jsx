import "../style.css"
import Navbar from "../Navbar/index"


export default function Header() {
    return (
        <header>

            <div className="rounded-b-lg bg-white">
                <Navbar></Navbar>
            </div>

        </header>
    )
}

// <FeatherIcon className="cart" icon="shopping-cart"/>