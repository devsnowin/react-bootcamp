import { Box, Button, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import AboutImage from '../assets/about-img.jpeg';

const About = () => {
  return (
    <Stack
      minHeight='100vh'
      mt='-6rem'
      direction='row'
      justifyContent='center'
      alignItems='center'
      gap='4rem'
    >
      <img
        src={AboutImage}
        alt='women with his opet'
        width={320}
        style={{ objectFit: 'cover', borderRadius: '20px' }}
      />
      <Box display='grid' gap='1rem'>
        <Typography variant='h2' fontWeight='600'>
          For you pet lovers!
        </Typography>
        <Typography lineHeight='1.8' variant='body1'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia deleniti
          aliquid earum beatae doloribus error quas aut pariatur, esse ea quidem
          magnam eius cupiditate. Perspiciatis, non itaque tempore ab in
          sapiente necessitatibus rem cupiditate explicabo libero dignissimos
          modi molestiae soluta nostrum quam officiis sit minus rerum quia
          nesciunt? Quibusdam, quam?
        </Typography>
        <Link to='/'>
          <Button
            variant='contained'
            sx={{ width: 'fit-content', alignSelf: 'start' }}
          >
            Adpot Now
          </Button>
        </Link>
      </Box>
    </Stack>
  );
};

export default About;
