import Titulo from "./Titulo"

function App() {
  return (
    <div>
      <Titulo nome="Rodrigo" cor="red" />
      <Titulo paragrafo={true} />
      <Titulo cor="blue" />
      <Titulo />
    </div>
  )
}

export default App