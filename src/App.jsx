import "./App.css";
import ItemCount from "./components/ItemCount";
import { useState } from "react";
import Header from "./components/Header/index"
import Hero from "./components/Hero/index"

export default function App() {
  const [count, setCount] = useState(0)

  
  return <main>
   <ItemCount stock={15} count={count} setCount={setCount} />
    
  </main>;
}

  //<Header />
  //<Hero />