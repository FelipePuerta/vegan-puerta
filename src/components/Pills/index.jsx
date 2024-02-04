import "../style.css"
import React from 'react'
import { Link, useParams } from "react-router-dom"
import { translateType } from "../../utils/stringFunctions"



function Pills({ types }) {

    const { filter } = useParams()

    return (

        <div className="flex gap-5 items-center justify-center py-10">
            <Link to={`/`} className={(filter === undefined) ? "inline-block rounded-xl py-1 px-3 bg-lime-500 text-white font-semibold" : "inline-block rounded-x1 py-1 px-3 bg-slate-300 text-white font-semibold"}>Todos</Link>   
            { types.map((item, index) => (
                <Link to={`/${item}`} key={index} className={(filter === `${item}`) ? "inline-block rounded-x1 py-1 px-3 bg-lime-500 text-slate-700 font-semibold": "inline-block py-1 px-3 rounded-x1 bg-slate-300 text-white font-semibold"}>{ translateType(item) }</Link>
            ))}
        </div>

    )
}

export default Pills
