import React from 'react';
import  Filtros  from './Components/Filtros';


const produto = [
  {
	id: 1,
	name: "JavaScript guia do programador",
	value: 10000.0,
	imageUrl: "https://picsum.photos/10/20",
},
{
	id: 2,
	name: "O melhor do JavaScript",
	value: 10000.0,
	imageUrl: "https://picsum.photos/200/200",
},
{
	id: 3,
	name: "Html, xhtml e css para leigos",
	value: 10000.0,
	imageUrl: "https://picsum.photos/200/200",
},
{
	id: 4,
	name: "Primeiros passos com React",
	value: 10000.0,
	imageUrl: "https://picsum.photos/1/200",
},
{
	id: 5,
	name: "React aprenda praticando",
	value: 10000.0,
	imageUrl: "https://picsum.photos/1/200",
},
{
	id: 6,
	name: "Como estudar e aprender",
	value: 10000.0,
	imageUrl: "https://picsum.photos/1/200",
}
]

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
      <div>
        <Filtros
        />
        <div></div>
        <div></div>
      </div>
    )
  }
}
  export default App
