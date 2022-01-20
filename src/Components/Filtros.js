import styled from "styled-components";
import React from "react";

const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
`;
const ConteinerInput = styled.input`
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 margin-b;
 `

export default class Filtros extends React.Component {
  render() {
    return (
    <Conteiner>
      <h3> Filtros </h3>
      <ConteinerInput
        //MinimoValor
        type="number"
        value={this.props.minFiltro}
        onChange={this.props.onChangeMin}
        />
      <ConteinerInput
        //MáximoValor
        
        type="number"
        value={this.props.maxFiltro}
        onChange={this.props.onChangeMax}
        />
      <ConteinerInput
        //BuscaNome
        type="number"
        value={this.props.nameFiltro}
        onChange={this.props.onChangename}
        />
    </Conteiner>
    )
  }
}
