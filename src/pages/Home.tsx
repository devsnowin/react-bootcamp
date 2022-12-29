/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import { Container, Stack } from '@mui/material';

import { searchPets } from '../lib/pet';
import PetCard from '../components/PetCard';
import PetForm from '../components/PetForm';
import useBreedList from '../lib/hooks';
import Loader from '../components/Loader';
import Error from '../components/Error';
import { RootState } from '../store';
import { all } from '../features/searchSlice';

const animals = ['cat', 'dog', 'bird', 'rabbit', 'reptile'];

function Home() {
  const [animal, setAnimal] = useState<Animal | null>(null);
  const [breeds] = useBreedList(animal);
  const dispatch = useDispatch();
  const searchParams = useSelector(
    (state: RootState) => state.searchParams.value
  );

  const { data, isError, isLoading } = useQuery<Pet[]>(
    ['search', searchParams],
    searchPets
  );

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = {
      animal: formData.get('animal') ?? '',
      breed: formData.get('breed') ?? '',
      location: formData.get('location') ?? '',
    };
    dispatch(all(obj));
  };

  const handleAnimalChange = (e: any) => {
    setAnimal(e.target.value);
  };

  if (isLoading) return <Loader />;
  if (isError) return <Error />;
  const pets = data;

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
        justifyContent='center'
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
