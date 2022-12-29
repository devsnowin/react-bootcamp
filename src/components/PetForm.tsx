/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-shadow */
import { useSelector } from 'react-redux';
import {
  Stack,
  FormGroup,
  TextField,
  FormLabel,
  Select,
  MenuItem,
  Avatar,
} from '@mui/material';
import Button from '@mui/material/Button';

import { RootState } from '../store';

const PetForm = ({
  animals,
  breeds,
  animal,
  handleAnimalChange,
  handleSubmit,
}: any) => {
  const adoptedPet = useSelector((state: RootState) => state.adoptedPet.value);

  return (
    <Stack width='100%' maxWidth='32rem' mx='auto'>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          marginBlock: '4rem',
        }}
      >
        {adoptedPet ? (
          <FormGroup sx={{ marginInline: 'auto' }}>
            <Avatar
              src={adoptedPet.images[0]}
              alt={adoptedPet.name}
              sx={{ width: 120, height: 120 }}
            />
          </FormGroup>
        ) : null}
        <FormGroup>
          <TextField
            name='location'
            label='Location'
            variant='outlined'
            type='text'
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Animal</FormLabel>
          <Select
            value={animal}
            onChange={handleAnimalChange}
            label='Animal'
            id='animal'
            name='animal'
          >
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            {animals.map((animal: string, i: number) => (
              <MenuItem key={i} value={animal}>
                {animal}
              </MenuItem>
            ))}
          </Select>
        </FormGroup>
        <FormGroup>
          <FormLabel>Breed</FormLabel>
          <Select
            disabled={!breeds?.length}
            label='Breed'
            id='breed'
            name='breed'
          >
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            {breeds.map((breed: string, i: number) => (
              <MenuItem key={i} value={breed}>
                {breed}
              </MenuItem>
            ))}
          </Select>
        </FormGroup>
        <FormGroup>
          <Button type='submit' variant='contained' size='large'>
            Search
          </Button>
        </FormGroup>
      </form>
    </Stack>
  );
};

export default PetForm;
