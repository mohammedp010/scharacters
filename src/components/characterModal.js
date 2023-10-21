import React from 'react';

const CharacterModal = ({ character, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h2>{character.name}</h2>
        <p>Height: {character.height} meters</p>
        <p>Mass: {character.mass} kg</p>
        <p>Birth Year: {character.birth_year}</p>
        <p>Number of Films: {character.films.length}</p>
        <p>Created: {character.created}</p>
      </div>
    </div>
  );
};

export default CharacterModal;
