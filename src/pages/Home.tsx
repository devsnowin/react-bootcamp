/* eslint-disable react/no-array-index-key */
import { Container, Stack } from '@mui/material';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { searchPets } from '../lib/pet';
import PetCard from '../components/PetCard';
import PetForm from '../components/PetForm';
import useBreedList from '../lib/hooks';
import Loader from '../components/Loader';
import Error from '../components/Error';

const animals = ['cat', 'dog', 'bird', 'rabbit', 'reptile'];

function Home() {
  const [requestParams, setRequestParams] = useState<{
    animal: FormDataEntryValue;
    location: FormDataEntryValue;
    breed: FormDataEntryValue;
  }>({
    animal: '',
    location: '',
    breed: '',
  });
  const [animal, setAnimal] = useState('');
  const [breeds] = useBreedList(animal);

  const {
    data: pets,
    isError,
    isLoading,
  } = useQuery(['search', requestParams], searchPets);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      animal: formData.get('animal') ?? '',
      location: formData.get('location') ?? '',
      breed: formData.get('breed') ?? '',
    };
    setRequestParams(data);
  };

  const handleAnimalChange = (e: any) => {
    setAnimal(e.target.value);
  };

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  return (
    <Container>
      <PetForm
        animals={animals}
        breeds={breeds}
        animal={animal}
        handleAnimalChange={handleAnimalChange}
        handleSubmit={handleSubmit}
      />
      <Stack
        component='div'
        direction={{ md: 'row' }}
        justifyContent='space-between'
        gap={{ md: '2rem' }}
        flexWrap='wrap'
        my='4rem'
      >
        {pets ? (
          pets.map((pet: Pet) => <PetCard key={pet.id} pet={pet} />)
        ) : (
          <p>no data</p>
        )}
      </Stack>
    </Container>
  );
}

export default Home;
