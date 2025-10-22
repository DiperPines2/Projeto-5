import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard contador={0} legenda="pendentes" />
        <FiltroCard contador={0} legenda="concluídas" />
        <FiltroCard contador={0} legenda="urgentes" />
        <FiltroCard contador={0} legenda="importantes" />
        <FiltroCard contador={0} legenda="normal" />
        <FiltroCard contador={0} legenda="todas" ativo />
        {/* passamos como props as propriedades legenda e contador */}
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
