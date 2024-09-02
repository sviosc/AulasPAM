import './App.css'

let alunos = [
  { nome: "Savalo Horse", curso: ["DS", "ADM"] },
  { nome: "Miranata Filoxina", curso: ["ADM", "MA"] }
]

export function App() {

  return (
    <>
      {
        alunos.map((element) => (
          <div key={element.nome}>
            {element.nome}
            {
              element.cursos.map((curso) => (
                <h1 key={curso}>{curso}</h1>
              ))
            }
          </div>
        )
        )
      }
    </>
  )
}
