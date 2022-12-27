import { Link, NavLink } from 'react-router-dom';
import { IconButton, Typography, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// eslint-disable-next-line @typescript-eslint/ban-types
const Navbar = ({ handleOpen }: { handleOpen: any }) => {
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
      <Link to='/'>
        <IconButton onClick={handleOpen} color='inherit'>
          <SearchIcon fontSize='medium' />
        </IconButton>
      </Link>
    </Stack>
  );
};

export default Navbar;
