import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button } from '@chakra-ui/react';

const CharacterModal = ({ character, onClose }) => {
  return (
    <Modal isOpen={!!character} onClose={onClose} motionPreset='slideInBottom'>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{character.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody align="left" bgColor="black" color="white">
          <p>Height: {character.height} meters</p>
          <p>Mass: {character.mass} kg</p>
          <p>Birth Year: {character.birth_year}</p>
          <p>Number of Films: {character.films.length}</p>
          <p>Created: {character.created}</p>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="black" bgColor="grey" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CharacterModal;
