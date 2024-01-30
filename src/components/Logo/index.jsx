
import "../style.css"
import Imagem from "../img/logo.png"


export default function Logo() {

    return (
        <div>    
            <img className="flex items-center flex-1" src={Imagem} alt="Logo" title="logo" />
        </div>
    )
}