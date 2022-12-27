import { Link, NavLink } from 'react-router-dom';
import { Typography, Stack, Box } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/ban-types
const Navbar = () => {
  return (
    <Stack
      direction='row'
      alignItems='center'
      justifyContent='space-between'
      height='6rem'
    >
      <NavLink to='/'>
        <Typography
          variant='h1'
          fontSize='2em'
          fontWeight='bold'
          textAlign='center'
          my='2rem'
          sx={{
            textDecoration: 'none',
            display: 'flex',
            placeItems: 'center',
            gap: '0.6rem',
          }}
        >
          <img src='./cat.png' alt='logo' width={48} height={48} />
          Pet Store
        </Typography>
      </NavLink>
      <Box display='flex' gap='2rem'>
        <Link to='/'>
          <Typography>Home</Typography>
        </Link>
        <Link to='/about'>
          <Typography>About</Typography>
        </Link>
      </Box>
    </Stack>
  );
};

export default Navbar;
