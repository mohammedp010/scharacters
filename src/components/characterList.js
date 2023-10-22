import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './characterCard';
import CharacterModal from './characterModal';
import { Box, Heading, Flex, Spinner, Button } from '@chakra-ui/react';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchCharacters = async (page) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
      setCharacters(response.data.results);
    } catch (error) {
      setError(error.message || 'An error occurred while fetching data.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters(currentPage);
  }, [currentPage]);

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
  };

  const handleCloseModal = () => {
    setSelectedCharacter(null);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <Box className="character-list-render" width={['100%', '50%', '33.33%', '25%']} p={2}>
      <Heading color="white" as="h1" size="xl" mb={4} ml="549" mr="-549">
        Star War Characters
      </Heading>

      {loading ? (
        <Spinner size="xl" mb={4} ml="549" mr="-549" color="white" />
      ) : (
        <Flex className="character-list" flexWrap="wrap">
          {characters.map((character) => (
            <CharacterCard
              key={character.name}
              character={character}
              onClick={() => handleCharacterClick(character)}
              flexBasis={['100%', '48%', '32%', '24%']}
            />
          ))}
        </Flex>
      )}

      <Flex justify="space-between" mt={4}>
        <Button onClick={handlePrevPage} disabled={currentPage === 1} colorScheme="black" bgColor="grey" ml="549" mr="-549">
          Previous
        </Button>
        <Button onClick={handleNextPage} colorScheme="black" ml="549" mr="-549" bgColor="grey">
          Next
        </Button>
      </Flex>

      {selectedCharacter && (
        <CharacterModal character={selectedCharacter} onClose={handleCloseModal} />
      )}
    </Box>
  );
};

export default CharacterList;
