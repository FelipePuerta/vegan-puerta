import React, { useState } from "react"
import FeatherIcon from 'feather-icons-react';

function ItemCard( { item }) {

  const [quantity, setQuantity] = useState(0)

  return (

    <div className="relative w-64 p-4 rounded-lg flex flex-col justify-between fundo-card drop-shadow-lg">

      

        <img className="h-36 w-full object-cover rounded" src={item.imageUrl} alt=""></img>  
        <h1 className="text-md text-slate-700 font-semibold mt-2">{ item.name }</h1>
        
        <p className="text-xs text-slate-600">{ item.description }</p>
      {/* Quantidade de Kcals */}
      <div className="flex justify-between items-center mt-5">
        <p className="text-xs font-medium text-slate-600">{ item.numOfKcals }kcal</p>
      </div>
      {/* verificando se o preço possui desconto */}
      <div className="flex flex-col items-end">
          <p className={ item.priceWithDiscount ? 'line-through text-sm text-slate-600 font-medium' : 'text-lg text-slate-600 font-medium'}>{
            item.price?.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })
          }</p>
          {/* se sim */}
          <p className={ item.priceWithDiscount ? 'text-green-500 text-lg font-medium' : ''}>{
          item.priceWithDiscount?.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })
        }</p>
      </div>
      {/* ações */}
      <div className="flex justify-between mt-4">
        {/* quantidade */}
        <div className="flex gap-2 items-center">

          <button onClick={() => quantity > 0 && setQuantity(quantity - 1)} className="border-none bg-lime-400 rounded w-5 h-5">
          <p className="relative top-[-3px] text-black font-semibold">-</p>
          </button>

          <p className="font-semibold">{ quantity }</p>

          <button onClick={() => quantity < item.quantityAvaiable && setQuantity(quantity + 1)} className="border-none bg-lime-400 rounded w-5 h-5">
          <p className="relative top-[-3px] text-black font-semibold">+</p>
          </button>
        </div>
        <button className="bg-lime-400 rounded px-3 py-1 text-slate-800 font-semibold text-xs cursor-pointer hover:bg-lime-700'">
          
        

          <p>Adicionar ao carrinho</p>
        </button>

      </div>
    </div>
    

    
  )
}

export default ItemCard