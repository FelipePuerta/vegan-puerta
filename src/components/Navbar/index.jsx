
import "../style.css"
import CartIcon from '../Header/CartIcon';
import { NavLink } from "react-router-dom";
import Search from '../Search/index'


export default function Navbar() {

    return (
        <nav>  
            {/*Container Navbar*/}
            
            <div className="h-10vh flex justify-between z-50 lg:py-10 px-20 py-4">
                <div className="flex items-center flex-1 poppins">
                    <span className="text-3x1 font-bold">Vegann<br></br>Healthy Food<span className="copy">&copy;</span></span>
                </div>
                {/*Nav*/}
                <div className="lg:flex md:flex lg: flex-1 items-center justify-center poppins">
                    <div className="flex-10">
                        <ul className="flex gap-8 mr-16 text-[18px] ">
                            <li>
                                <NavLink
                                    to={`/menu`}
                                    className={({ isActive }) => (isActive ? "text-lime-600" : "")}
                                >
                                  MENU
                                </NavLink>
                            </li>
                            <li>
                            <NavLink
                                    to={`/orders`}
                                    className={({ isActive }) => (isActive ? "text-lime-600" : "")}
                                >
                             PEDIDOS
                            </NavLink>
                            </li>
                            <li>
                            <NavLink
                                    to={`/checkout`}
                                    className={({ isActive }) => (isActive ? "text-lime-600" : "")}
                                >
                             CHECKOUT
                            </NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>

                {/*Search Area*/}
                <div className="flex flex-1 items-center poppins gap-5 justify-end"> 
                    {/* <input className="search-area" type="text" placeholder="O que deseja procurar?"></input> */}
                    <Search />
                    <CartIcon />
                    
                </div>

                {/*Cart-Item*/}
                
            </div>
        </nav>

     //<div className='flex items-center'>
   // <FeatherIcon className="cart" icon="shopping-cart"/>
    //</div>

    )
}
