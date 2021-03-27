import React, { Component } from "react";
import "./Pokecard.css";

class Pokecart extends Component {
  paddId(id) {
    return `${id}`.padStart(3, "0");
  }

  render() {
    const { name, type, baseExp, id } = this.props;

    const fancyImg = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.paddId(
      id
    )}.png`;
    return (
      <div className="Pockecard">
        <div className="Pockecard-image-holder">
          <img className="Pockecard-image" src={fancyImg} alt={name} />
        </div>
        <h4 className="Pockecard-heading">{name}</h4>
        <p>Type: {type}</p>
        <p>EXP: {baseExp}</p>
      </div>
    );
  }
}

export default Pokecart;
