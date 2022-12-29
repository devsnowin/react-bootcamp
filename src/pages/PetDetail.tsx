import { Container, Stack, Typography, Box, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { adopt } from '../features/petSlice';
import { useGetPetQuery } from '../features/pet';
import Carousel from '../components/Carousel';
import Error from '../components/Error';
import Loader from '../components/Loader';

const PetDetail = () => {
  const { id } = useParams();
  const { isLoading, data, isError } = useGetPetQuery(id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (isError) return <Error />;
  if (isLoading) return <Loader />;
  const pet = data;

  return (
    <Container>
      <Stack
        minHeight='100vh'
        alignItems='flex-start'
        justifyContent='center'
        gap='1rem'
        mt='-6rem'
      >
        {pet ? (
          <>
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
            <Button
              onClick={() => {
                dispatch(adopt(pet));
                navigate('/');
              }}
            >
              Adpot Me
            </Button>
          </>
        ) : (
          <p>No data</p>
        )}
      </Stack>
    </Container>
  );
};

export default PetDetail;
