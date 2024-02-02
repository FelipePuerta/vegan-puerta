import React from "react";
import FeatherIcon from 'feather-icons-react';
import { Link } from "react-router-dom";

function CartIcon() {
    return (
        <Link to={`/checkout`} className="relative">
            <span className="absolute top-[-8px] right-[-12px] text-sm bg-lime-600 rounded-full h-5 w-5 text-white text-center font-bold">2</span>
            <FeatherIcon className="cart" icon="shopping-cart"/>
        </Link>
    )
}
export default CartIcon