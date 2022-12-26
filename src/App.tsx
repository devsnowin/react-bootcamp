/* eslint-disable react/no-array-index-key */
import { Container, Typography, Stack } from '@mui/material';
import { useState, useEffect } from 'react';

import { getPet } from './lib/pet';
import useBreedList from './lib/hooks';
import Pet from './components/Pet';
import PetForm from './components/PetForm';

const animals = ['cat', 'dog', 'bird', 'rabbit', 'reptile'];

function App() {
  const [location, setLocation] = useState('');
  const [animal, setAnimal] = useState('');
  const [breed, setBreed] = useState('');
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);

  const fetchPets = async () => {
    const data = await getPet(animal, location, breed);
    setPets(data);
  };

  useEffect(() => {
    fetchPets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  return (
    <Container>
      <Typography
        variant='h1'
        fontSize='2em'
        fontWeight='bold'
        textAlign='center'
        my='2rem'
      >
        Pet Store
      </Typography>
      <PetForm
        animals={animals}
        breeds={breeds}
        animal={animal}
        location={location}
        breed={breed}
        handleAnimalChange={handleAnimalChange}
        handleLocationChange={handleLocationChange}
        handleBreedChange={handleBreedChange}
        handleSubmit={fetchPets}
      />
      <Stack
        component='div'
        direction={{ md: 'row' }}
        alignItems='center'
        gap={{ md: '2rem' }}
        flexWrap='wrap'
        my='4rem'
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
