/* eslint-disable react/no-array-index-key */
import { Container, Stack } from '@mui/material';
import { useState, useEffect } from 'react';

import { getPet } from './lib/pet';
import useBreedList from './lib/hooks';
import Pet from './components/Pet';
import PetForm from './components/PetForm';
import Navbar from './components/Navbar';

const animals = ['cat', 'dog', 'bird', 'rabbit', 'reptile'];

function App() {
  const [location, setLocation] = useState('');
  const [animal, setAnimal] = useState('');
  const [breed, setBreed] = useState('');
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);
  const [isOpen, setIsOpen] = useState(false);

  const fetchPets = async () => {
    const data = await getPet(animal, location, breed);
    setPets(data);
  };

  useEffect(() => {
    fetchPets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = () => {
    fetchPets();
    setIsOpen(false);
  };

  const handleAnimalChange = (e: any) => {
    setAnimal(e.target.value);
    setBreed('');
  };

  const handleBreedChange = (e: any) => {
    setBreed(e.target.value);
  };

  const handleLocationChange = (e: any) => {
    setLocation(e.target.value);
  };

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      <Navbar handleOpen={handleClickOpen} />
      <PetForm
        animals={animals}
        breeds={breeds}
        animal={animal}
        location={location}
        breed={breed}
        isOpen={isOpen}
        handleAnimalChange={handleAnimalChange}
        handleLocationChange={handleLocationChange}
        handleBreedChange={handleBreedChange}
        handleSubmit={handleSubmit}
        handleOpen={handleClickOpen}
        handleClose={handleClose}
      />
      <Stack
        component='div'
        direction={{ md: 'row' }}
        alignItems='center'
        gap={{ md: '2rem' }}
        flexWrap='wrap'
        mt='8rem'
        mb='4rem'
      >
        {pets ? (
          pets.map((pet: Pet) => <Pet key={pet.id} pet={pet} />)
        ) : (
          <p>no data</p>
        )}
      </Stack>
    </Container>
  );
}

export default App;
