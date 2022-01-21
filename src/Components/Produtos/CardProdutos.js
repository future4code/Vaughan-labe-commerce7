import React from "react";
import styled from "styled-components";


const ConteinerCard = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    
`;
const Descrição = styled.div`
    display: flex;
    flex-direction: column;
    p {
        margin: 0;
    }
`;


export default class CardProdutos extends React.Component {
    render (){
        return <ConteinerCard>
            <img src="https://picsum.photos/100/100" alt="Produtos"/>
            <Descrição>
                <p>Produto</p>
                <p>R$ 1Milhão</p>
                <button>Comprar</button>
            </Descrição>
        </ConteinerCard>
            
        
    }
        
}