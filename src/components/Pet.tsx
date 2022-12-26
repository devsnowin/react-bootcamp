import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { truncateString } from '../lib/general';

const Pet = ({ pet }: { pet: Pet }) => {
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
        <Button size='small'>View</Button>
        <Button size='small'>Buy</Button>
      </CardActions>
    </Card>
  );
};

export default Pet;
