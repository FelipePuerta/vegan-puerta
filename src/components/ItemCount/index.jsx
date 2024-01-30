import { useState } from "react"
import "../style.css"


export function Contador(){

    const[count, setCount] = useState(0)
    const[stock, setStock] = useState(0)

    return (
        <main>
            <ItemCount stock={15} count={count} setCount={setCount} />
        </main>
    )
}

export default function ItemCount({stock, count, setCount}) {
    function handleAdd() {
        if (count < stock) setCount(count+1)
    }
    
    function handleRemove() {
        if (count > 0) setCount(count-1)
    }
    
    return (
        <div className="flex p-2">
            <button onClick={handleRemove} className="mr-10">-</button>
            <p>{count}</p>
            <button onClick={handleAdd} className="ml-10">+</button>   
        </div>
    )
}







