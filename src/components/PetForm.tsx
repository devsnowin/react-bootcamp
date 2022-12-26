/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-shadow */
import {
  Stack,
  FormGroup,
  TextField,
  FormLabel,
  Select,
  MenuItem,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
} from '@mui/material';
import Button from '@mui/material/Button';

const PetForm = ({
  animals,
  breeds,
  animal,
  location,
  breed,
  isOpen,
  handleLocationChange,
  handleAnimalChange,
  handleBreedChange,
  handleSubmit,
  handleOpen,
  handleClose,
}: any) => {
  return (
    <Stack width='100%' maxWidth='32rem' mx='auto' spacing={2}>
      <Button onClick={handleOpen}>Search</Button>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>Search pets</DialogTitle>
        <DialogContent>
          <FormGroup sx={{ width: '30rem' }}>
            <TextField
              value={location}
              onChange={handleLocationChange}
              label='Location'
              variant='outlined'
              type='text'
            />
          </FormGroup>
          <FormGroup sx={{ width: '30rem' }}>
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
          <FormGroup sx={{ width: '30rem' }}>
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
          <DialogActions sx={{ width: '30rem' }}>
            <Button type='button' variant='contained' onClick={handleSubmit}>
              Search
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </Stack>
  );
};

export default PetForm;
