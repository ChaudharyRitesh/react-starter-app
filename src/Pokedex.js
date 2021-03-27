import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    const winner = this.props.isWinner;

    return (
      <div className="Pokedex-container">
        <h1
          className={`Pokedex-heading ${
            winner ? "winning-hand" : "losing-hand"
          }`}
        >
          {winner ? "Winning Hand" : "Losing Hand"}
        </h1>
        <p className="Pokedex-total">{this.props.total}</p>
        <div className="Pokedex-cards">
          {this.props.data.map((el, i) => {
            return (
              <Pokecard
                key={i}
                id={el.id}
                name={el.name}
                type={el.type}
                baseExp={el.base_experience}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Pokedex;
