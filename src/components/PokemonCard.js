import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const [cardFace, setCardFace] = useState("front")

  return (
    <Card>
      <div
        onClick={() => setCardFace(cardFace === "front" ? "back" : "front")}
      >
        <div className="image">
          <img 
            alt={pokemon.name} 
            src={cardFace === "front" ? pokemon.sprites.front : pokemon.sprites.back} 
          />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
