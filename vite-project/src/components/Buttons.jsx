export function Button(props) {
  return (
    <button>{props.texto}</button>
  )
}

export function BotaoManeiro(props) {
  function exibirBomDia(){
    alert(props.texto)
  }

  return (
    <>
      <button style={{backgroundColor: props.cor}} onClick={exibirBomDia}>Dizer {props.texto}</button>
    </>
  )
}
