import { Container, Stack, Typography, Box, Button } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import Carousel from '../components/Carousel';
import Error from '../components/Error';
import Loader from '../components/Loader';
import { fetchPet } from '../lib/pet';

const PetDetail = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery<Pet[]>(
    ['details', id],
    fetchPet
  );

  if (isError) return <Error />;
  if (isLoading) return <Loader />;
  const pet = data[0];

  return (
    <Container>
      <Stack
        minHeight='100vh'
        alignItems='flex-start'
        justifyContent='center'
        gap='1rem'
        mt='-6rem'
      >
        <Carousel images={pet.images} />

        <Box textAlign='left'>
          <Typography variant='h2'>{pet.name}</Typography>
          <Typography variant='subtitle1'>
            {pet.animal} - {pet.city} - {pet.state}
          </Typography>
          <Typography variant='caption' textAlign='justify'>
            {pet.description}
          </Typography>
        </Box>
        <Button>Adpot Me</Button>
      </Stack>
    </Container>
  );
};

export default PetDetail;
