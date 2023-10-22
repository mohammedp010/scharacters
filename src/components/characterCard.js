import React from 'react';
import {
  SimpleGrid,
  Box,
  Text,
  Heading,
  Button
} from '@chakra-ui/react';

const CharacterCard = ({ character, onClick }) => {

  return (
    <SimpleGrid columns={2} spacing={4} minChildWidth="375px">
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        cursor="pointer"
        transition="transform 0.2s"
        _hover={{ transform: 'scale(1.5)' }}
        onClick={() => onClick(character)}
        bg="gray"
      >
        <Heading size='md' mt="10">{character.name}</Heading>
        <Text>{character.height} meters</Text>
        <Text>{character.mass} kg</Text>
        <Button colorScheme='black' color="yellow">Tap!</Button>
      </Box>
    </SimpleGrid>
  );
};

export default CharacterCard;
