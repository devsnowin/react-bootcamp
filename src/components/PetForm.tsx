/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-shadow */
import { Paid } from '@mui/icons-material';
import {
  Stack,
  FormGroup,
  TextField,
  FormLabel,
  Select,
  MenuItem,
} from '@mui/material';
import Button from '@mui/material/Button';

const PetForm = ({
  animals,
  breeds,
  animal,
  location,
  breed,
  handleLocationChange,
  handleAnimalChange,
  handleBreedChange,
  handleSubmit,
}: any) => {
  return (
    <Stack width='100%' maxWidth='32rem' mx='auto' spacing={2}>
      <FormGroup>
        <TextField
          value={location}
          onChange={handleLocationChange}
          label='Location'
          variant='outlined'
        />
      </FormGroup>
      <FormGroup>
        <FormLabel>Animal</FormLabel>
        <Select value={animal} onChange={handleAnimalChange} label='Animal'>
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
          disabled={breeds.length === 0}
          value={breed}
          onChange={handleBreedChange}
          label='Breed'
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
        <Button
          startIcon={<Paid />}
          type='button'
          variant='contained'
          onClick={handleSubmit}
        >
          Search
        </Button>
      </FormGroup>
    </Stack>
  );
};

export default PetForm;
