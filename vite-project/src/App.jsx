import { useState } from "react"
import MyButton from "./components/Button"
import "./App.css"

function App() {
  const [contador, setContador] = useState(0)

  function increment() {
    setContador(contador + 1)
  }

  function decrement() {
    setContador(contador - 1)
  }

  const botaoDecremento = "#f57474" 
  const botaoIncremento = "#99f574"

  return (
    <div className="contador">
      <MyButton cor={botaoDecremento} operacao="-" onClick={decrement} className="botao" />
      <div className="valor">
        {contador}
      </div>
      <MyButton cor={botaoIncremento} operacao="+" onClick={increment} className="botao" />
    </div>
  )
}

export default App
