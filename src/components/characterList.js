import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './characterCard';
import CharacterModal from './characterModal';
import {
  Box,
  Heading,
  Flex,
  Spinner,
  Button,
  Text,
  SimpleGrid,
} from '@chakra-ui/react';

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
      setError(null);
    } catch (error) {
      setCharacters([]);
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
    <Box className="character-list-render" p={2}>
      <Heading color="white" as="h1" size="xl" mb={4} ml="45" mr="-45">
        Star War Characters
      </Heading>

      {error && (
        <Box mb={4}>
          <Heading as='h2' size='2xl' color='red.500'>
            Error
          </Heading>
          <Text color="red.500">{error}</Text>
        </Box>
      )}

      <SimpleGrid columns={[1, 2, 3, 4]} spacing={4}>
        {loading ? (
          <Spinner size="xl" mb={4} ml="549" mr="-549" color="white" />
        ) : (
          characters.map((character) => (
            <CharacterCard
              key={character.name}
              character={character}
              onClick={() => handleCharacterClick(character)}
            />
          ))
        )}
      </SimpleGrid>

      <Flex justify="space-between" mt={4}>
        <Button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          color="black"
          bgColor="#f2ef2c"
        >
          Previous
        </Button>
        <Button onClick={handleNextPage} color="black" bgColor="#f2ef2c">
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
