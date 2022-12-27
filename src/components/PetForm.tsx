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
  isOpen,
  handleAnimalChange,
  handleSubmit,
  handleClose,
}: any) => {
  return (
    <Stack width='100%' maxWidth='32rem' mx='auto' spacing={2}>
      <Dialog open={isOpen} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>Search pets</DialogTitle>
          <DialogContent>
            <FormGroup sx={{ width: '30rem', paddingBlock: '0.8rem' }}>
              <TextField
                name='location'
                label='Location'
                variant='outlined'
                type='text'
              />
            </FormGroup>
            <FormGroup sx={{ width: '30rem', paddingBlock: '0.8rem' }}>
              <FormLabel>Animal</FormLabel>
              <Select
                value={animal}
                onChange={handleAnimalChange}
                label='Animal'
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
            <FormGroup sx={{ width: '30rem', paddingBlock: '0.8rem' }}>
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
            <DialogActions sx={{ width: '30rem' }}>
              <Button type='submit' variant='contained'>
                Search
              </Button>
            </DialogActions>
          </DialogContent>
        </form>
      </Dialog>
    </Stack>
  );
};

export default PetForm;
