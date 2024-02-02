import "../style.css"
import HeroImage from "../img/hero.png"

export default function Hero() {
    return (

      <section className="flex justify-center px-20">
          <img className="size-full imagem rounded-lg" src={HeroImage} alt="hero" title="Hero-Image"></img>
      </section>
    )
}
