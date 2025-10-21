import EstiloGlobal, { Container } from './styles'
import BarraLateral from './container/BarraLateral'
import ListaDeTarefas from './container/ListaDeTarefas'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </>
  )
}

export default App
