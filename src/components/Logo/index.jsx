
import "../style.css"
import Imagem from "../img/logo.png"


export default function Logo() {

    return (
        <div>    
            <img className="logo" src={Imagem} alt="Logo" title="logo" />
        </div>
    )
}