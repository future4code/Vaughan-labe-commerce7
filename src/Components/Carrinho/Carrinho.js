import React from "react";
import styled from "styled-components";
import CardCarrinho from "./CardCarrinho";


const ConteinerCarrinho = styled.div`
    border: 1px solid black; 
`;
const ListaProdutos = styled.div`
    display: grid;
    gap: 5px;
    padding: 5px;
`

class Carrinho extends React.Component{

    render() {
        return <ConteinerCarrinho>
            <h3>Carrinho</h3>
            <ListaProdutos>
                <CardCarrinho
                />
                <CardCarrinho
                />
            </ListaProdutos>
            <p>Valor Total: R$ ????</p>
        </ConteinerCarrinho>

    }
}

export default Carrinho