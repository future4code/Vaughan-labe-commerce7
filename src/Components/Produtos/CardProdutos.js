import React from "react";
import styled from "styled-components";
import Produtos from "./Produtos";


const ConteinerCard = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    width: 250px;   
    border-radius: 10px;  
    padding: 10px;   
    font-size: 18px;   
    text-align: center;
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
        const produto = this.props.produto
        return <ConteinerCard>
            <img src={produto.foto} alt="Produtos"/>
            <Descrição>
                <p>{produto.nome}</p>
                <p>R${produto.preco},00</p>
                <button>Comprar</button>
            </Descrição>
        </ConteinerCard>
            
        
    }
        
}