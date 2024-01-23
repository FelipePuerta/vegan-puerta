import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pills from "./components/Pills";

export default function App() {
  return <main>
    <Header />
    <Hero texto="Aqui vai o Hero Image"/>
    <Pills texto="Aqui vai as Pills" />
  </main>;
}