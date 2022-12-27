import { Link } from 'react-router-dom';
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from '@mui/material';
import { truncateString } from '../lib/general';

const PetCard = ({ pet }: { pet: Pet }) => {
  return (
    <Card sx={{ maxWidth: 345, width: '100%' }}>
      <CardMedia
        component='img'
        sx={{ height: 180 }}
        image={pet.images[0]}
        title={pet.name}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {pet.name}
        </Typography>
        <Typography
          variant='body2'
          color='text.secondary'
          overflow='hidden'
          width='90%'
        >
          {truncateString(pet.description, 100)}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/pets/${pet.id}`}>
          <Button size='small'>View</Button>
        </Link>
        <Button size='small'>Buy</Button>
      </CardActions>
    </Card>
  );
};

export default PetCard;
