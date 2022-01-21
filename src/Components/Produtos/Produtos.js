import React from "react";
import styled from "styled-components";
import CardProdutos from "./CardProdutos";

const ConteinerProdutos = styled.div`
    border: 1px solid black;
`;
const Opcoes = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const JanelaDeProdutos = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    padding: 10px;
`

export default class Produtos extends React.Component {
    render (){
        return <ConteinerProdutos>
            <Opcoes>
                <p>Quantidade de produtos: 6</p>
                <label>
                    Ordenação:
                    <select>
                        <option>Crescente</option>
                        <option>Decrescente</option>
                    </select>
                </label>
            </Opcoes>
            <JanelaDeProdutos>
                <CardProdutos/>
                <CardProdutos/>
                <CardProdutos/>
                <CardProdutos/>
                <CardProdutos/>
                <CardProdutos/>
            </JanelaDeProdutos>
            
            
        </ConteinerProdutos>
            
        
    }
        
}