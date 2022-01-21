import React from "react"
import styled from "styled-components"

const ConteinerProduto = styled.div`
    display: flex;
    flex-direction: column;
    
`


class CardCarrinho extends React.Component {
    render() {
        return <ConteinerProduto>
            <p>1x</p>
            <p>Produto</p>
            <button>Remover</button>
        </ConteinerProduto>
    }
}

export default CardCarrinho