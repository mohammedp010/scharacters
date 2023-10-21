import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './characterCard';
import CharacterModal from './characterModal';
import Loader from './loader';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('https://swapi.dev/api/people');
        setCharacters(response.data.results);
      } catch (error) {
        setError(error.message || 'An error occurred while fetching data.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
  };

  const handleCloseModal = () => {
    setSelectedCharacter(null);
  };


  return (
    <div className="character-list-render">
      {loading ? (
        <Loader />
      ) : (
        <div className="character-list">
          {characters.map((character) => (
            <CharacterCard
              key={character.name}
              character={character}
              onClick={handleCharacterClick}
            />
          ))}
        </div>
      )}

      {selectedCharacter && (
        <CharacterModal character={selectedCharacter} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default CharacterList;
