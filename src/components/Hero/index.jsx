import "../style.css"
import HeroImage from "../img/hero.png"

export default function Hero() {
    return (

      <section className="h-10vh flex justify-center z-50 lg:py-10 px-20 py-4">
        <div className="flex">
          <img className="rounded-lg" src={HeroImage} alt="hero" title="Hero-Image"></img>
        </div>

      </section>
    )
}