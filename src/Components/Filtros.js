import styled from "styled-components";
import React from "react";

const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 10px;
`;

const ConteinerInput = styled.label`
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 `;

export default class Filtros extends React.Component {
  render() {
    return <Conteiner>
      <h3> Filtros </h3>
      <div>
        <ConteinerInput>
          Valor mínimo:
          <input
            type="number"
            value={this.props.minFiltro}
            onChange={this.props.minFiltro}
          />
        </ConteinerInput>
        <ConteinerInput>
          Valor máximo:
          <input
            type="number"
            value={this.props.maxFiltro}
            onChange={this.props.onChangeMax}
          />
        </ConteinerInput>
        <ConteinerInput>
          Busca:
          <input
            type="number"
            value={this.props.nameFiltro}
            onChange={this.props.onChangename}
          />
        </ConteinerInput>
      </div>
    </Conteiner>
  }
}
