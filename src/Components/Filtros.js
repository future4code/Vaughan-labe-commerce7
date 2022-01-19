import styled from "styled-components";
import React from "react";

const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
`;
const ConteinerInput = style.label`
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 margin-b`;

export default class Filtros extends React.Component {
  render() {
    <Conteiner>

      <h3> Filtros </h3>
      <input
        //MinimoValor
        type="number"
        value={this.props.minFiltro}
        onChange={this.props.}
        />

     
      <input
        //MáximoValor
        type="number"
        value={this.props.maxFiltro}
        onChange={this.props.onChangeMax}
        />

      <input
        //BuscaNome
        type="number"
        value={this.props.nameFiltro}
        onChange={this.props.onChangename}
        />
    </Conteiner>;
  }
}
