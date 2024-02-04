import React, { useEffect, useState } from "react";
import Pills from "../../components/Pills";
import { allProducts } from "../../mock/products";
import { type } from "@testing-library/user-event/dist/type";
import ItemCard from "../../components/ItemCard";

function Menu() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(allProducts)
    }, [])

    const uniqueProductTypes = new Set();
    const pills = allProducts.map((product) => {
        if(!uniqueProductTypes.has(product.type)) {
            uniqueProductTypes.add(product.type)
            return product.type
        }
    }).filter((type) => type !== undefined)

    return (
        <div>
            {/* Pills*/}
            <Pills types={ pills } />
            

            {/* ItemCard*/}
            <div className="flex gap-5 flex-wrap justify-center mt-10">
            { products.map((item, index) => <ItemCard key={index} item={item} />)}
            </div>


        </div>
    )
}

export default Menu