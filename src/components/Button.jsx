import "./Button.css"

export default function Button(props) {
    return (
        <>
        <button className={props.fundo}>{props.texto}</button>
        </>
    )
}