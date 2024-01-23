import "../style.css"
//1. Receber a props como parâmetro
export default function Pills(props) {
  
    //2. Passar no conteudo o uso da props
    // Obs*: Usar o mesmo nome da props passado na chamada.
    return (
      <section className="pills">  
        <h1>{ props.texto }</h1>
      </section>
  )
}