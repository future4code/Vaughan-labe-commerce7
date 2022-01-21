import React from 'react';
import Filtros  from './Components/Filtros';
import Produtos from './Components/Produtos/Produtos';
import styled from "styled-components";
import Carrinho from './Components/Carrinho/Carrinho';

const ConteinerApp = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  :root{
  margin: 0;
  padding: 0;
  
}
`



// const produto = [
//   {
// 	id: 1,
// 	name: "JavaScript guia do programador",
// 	value: 10000.0,
// 	imageUrl: "https://picsum.photos/10/20",
// },
// {
// 	id: 2,
// 	name: "O melhor do JavaScript",
// 	value: 10000.0,
// 	imageUrl: "https://picsum.photos/200/200",
// },
// {
// 	id: 3,
// 	name: "Html, xhtml e css para leigos",
// 	value: 10000.0,
// 	imageUrl: "https://picsum.photos/200/200",
// },
// {
// 	id: 4,
// 	name: "Primeiros passos com React",
// 	value: 10000.0,
// 	imageUrl: "https://picsum.photos/1/200",
// },
// {
// 	id: 5,
// 	name: "React aprenda praticando",
// 	value: 10000.0,
// 	imageUrl: "https://picsum.photos/1/200",
// },
// {
// 	id: 6,
// 	name: "Como estudar e aprender",
// 	value: 10000.0,
// 	imageUrl: "https://picsum.photos/1/200",
// }
// ]

class App extends React.Component{
  state = {
    minFilter: 100,
    maxFilter: 1000,
    nameFilter: 'Produto',
    productsInCart: [
      {
        id: 6,
        name: "Foguete da Missão Apollo 11",
        value: 10000.0,
        imageUrl: "https://picsum.photos/1/200",
      }
    ]

  }

  render () {
    return (
      <ConteinerApp>
        <Filtros
        />
        <Produtos
        />
        <Carrinho 
        />
      </ConteinerApp>
    )
  }
}
  export default App
