import React, { Component } from "react";
import Pokedex from "./Pokedex";

class Pokegame extends Component {
  static defaultProps = {
    data: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
    ],
  };

  render() {
    const firstHand = [];
    const secondHand = [...this.props.data];
    while (firstHand.length < secondHand.length) {
      let rand = Math.floor(Math.random() * secondHand.length);
      let randPoke = secondHand.splice(rand, 1)[0];
      firstHand.push(randPoke);
    }

    function computeTotal(arr) {
      return arr
        .map(el => el.base_experience)
        .reduce((acc, next) => acc + next, 0);
    }

    return (
      <div className="Pokegame">
        <Pokedex
          data={firstHand}
          total={computeTotal(firstHand)}
          isWinner={
            computeTotal(firstHand) > computeTotal(secondHand) ? true : false
          }
        />
        <Pokedex
          data={secondHand}
          total={computeTotal(secondHand)}
          isWinner={
            computeTotal(firstHand) < computeTotal(secondHand) ? true : false
          }
        />
      </div>
    );
  }
}

export default Pokegame;
