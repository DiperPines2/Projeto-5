import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const GlobalStyle = createGlobalStyle`
 *{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family: 'Roboto', sans-serif;
  list-style:none;
 }
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll; // Adiciona barra de rolagem vertical
`

export const Titulo = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 40px;
  display: block;
`

export const Campo = styled.input`
  border-radius: 8px;
  border: 1px solid #a1a1a1;
  padding: 8px;
  width: 100%;
  font-weight: bold;
  color: #5e5e5e;
`

export const Botao = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.azulEscuro};
  border-radius: 8px;
  margin-right: 8px;
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default GlobalStyle
