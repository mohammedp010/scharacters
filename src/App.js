import './App.css';
import CharacterList from './components/characterList';
import { ChakraProvider } from '@chakra-ui/react';



function App() {
  return (
    <div className="App">
    <ChakraProvider>
      <CharacterList />
    </ChakraProvider>
    </div>
  );
}

export default App;
