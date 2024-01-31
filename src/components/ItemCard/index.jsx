
import { type } from '@testing-library/user-event/dist/type';
import { useEffect, useState } from 'react';

export default function ItemCard() {


  const allProducts = [

    { id: 1,
      type: 'Salada',
      name: 'Salada Russa',
      description: 'Frango, Batata-Inglesa,Cenoura,Ovo,Cebolinha,Ervilhas,Pepino,Maionese, Mostarda',
      price: 50,
      imageUrl: '',
      quantityAvaiable: 30,
    },
  ]

  const [products, setProducts] = useState([]);

  function nossaPromise() {
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(["Salada, Salada Russa, Frango, Batata-Inglesa,Cenoura,Ovo,Cebolinha,Ervilhas,Pepino,Maionese, Mostarda"]); // Completada
        reject(new Error('Promise rejected')); // Rejeitada
      }, 2000);
    });
  }

  async function pegarAPI() {
    console.log("Incio");

    
    nossaPromise()
      .then((resposta) => {
        console.log(resposta);
        setProducts(resposta.concat(['Limão']));
      })
      .catch((error) => {
        console.error(error);
      });

    console.log("Fim");
  }

  useEffect(() => {
    pegarAPI();
}, []); 

  return (
    <main>
      {products.map((products, index) => <p key={products + index} >{products}</p>)}
    </main>
  )
}