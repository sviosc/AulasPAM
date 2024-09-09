import "./button.css"

export default function MyButton(props) {
  return <button style={{backgroundColor: props.cor}} onClick={props.onClick} className="botao">{props.operacao}</button>
}
