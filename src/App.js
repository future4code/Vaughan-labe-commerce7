import React from 'react';
import styled from 'styled-components';
import  Filtros  from './Components/Filtros';
// import img1 from "./img/Javascriptguiadoprogramador.png"
// import img2 from "./img/omelhorjs.png"
// import img3 from "./img/htmlparaleigos.png"
// import img4 from "./img/primeirospassoscomreact.png"
// import img5 from "./img/react aprnda praticando.png"
//import img6 from "./img/como estudar e aprender.png"


const ConteinerPrincipal = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 10px;
  gap: 5px;
`


const produto = [
  
  {
	id: 1,
	name: "JavaScript guia do programador",
	value: 280.0,
		//imageUrl: img1,tps://thumbs.dreamstime.com/b/captura-de-tela-com-partes-aleat%C3%B3rias-do-c%C3%B3digo-programa-html-site-simples-marcas-coloridas-na-vista-browser-sobre-fundo-escuro-217013975.jpg",
},
{
	id: 2,
	name: "O melhor do JavaScript",
	value: 250.0,
	//imageUrl: img2,
},
{
	id: 3,
	name: "Html, xhtml e css para leigos",
	value: 200.0,
	//imageUrl: img3,
},
{
	id: 4,
	name: "Primeiros passos com React",
	value: 180.0,
//	imageUrl: img4,
},
{
	id: 5,
	name: "React aprenda praticando",
	value: 150.0,
	//imageUrl: img5,
},
{
	id: 6,
	name: "Como estudar e aprender",
	value: 210.0,
	//imageUrl: img6,
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
        name: "Como estudar e aprender",
        value: 210.0,
       // imageUrl: img6,
      }
    ]

  }

  render () {


    return (
      <ConteinerPrincipal>
        
        <Filtros 
        
        />
        
        <div>
          produtos
        </div>
        

        <div>
          carrinho
        </div>
      </ConteinerPrincipal>
    )
  }
}
  export default App
