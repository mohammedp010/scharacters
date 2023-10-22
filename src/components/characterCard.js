import React from 'react';
import { Box,Stack, Heading, Text, Button, ButtonGroup, useColorModeValue } from '@chakra-ui/react';

const CharacterCard = ({ character, onClick }) => {
  const cardBgColor = useColorModeValue('white', 'gray.700');

  return (
    <Box
      borderWidth="10px"
      borderRadius="3xl"
      overflow="hidden"
      cursor="pointer"
      transition="transform 0.2s"
      _hover={{ transform: 'scale(1.05)' }}
      onClick={() => onClick(character)}
      mb={4}
      bg={cardBgColor}
      ml="600px"
      mr="-600px"
      bgColor="black"
      color="white"
      w="250px"
      h="300px" 
    >
    
      <Stack mt='6' spacing='3' p={4}>
        <Heading size='md'>{character.name}</Heading>
        <Text>{character.height} meters</Text>
        <Text>{character.mass} kg</Text>
      </Stack>
      <Stack p={14}>
        <ButtonGroup spacing='2'>
          <Button variant='solid' ml="7" colorScheme='black'>
            Tap!
          </Button>
        </ButtonGroup>
      </Stack>
    </Box>
  );
};

export default CharacterCard;
