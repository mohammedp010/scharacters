import React from 'react';

const CharacterCard = ({ character, onClick }) => {
  return (
    <div className="character-card" onClick={() => onClick(character)}>
      <h2>{character.name}</h2>
      <p>Height: {character.height}</p>
      <p>Mass: {character.mass}</p>
    </div>
  );
};

export default CharacterCard;
