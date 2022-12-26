import { NavLink } from 'react-router-dom';
import { AppBar, IconButton, Typography, Box, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// eslint-disable-next-line @typescript-eslint/ban-types
const Navbar = ({ handleOpen }: { handleOpen: any }) => {
  return (
    <AppBar position='fixed'>
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        sx={{ paddingInline: '2rem' }}
      >
        <NavLink to='/'>
          <Typography
            variant='h1'
            fontSize='2em'
            fontWeight='bold'
            color='#fff'
            textAlign='center'
            my='2rem'
            sx={{
              textDecoration: 'none',
            }}
          >
            Pet Store
          </Typography>
        </NavLink>
        <Box>
          <IconButton onClick={handleOpen} color='inherit'>
            <SearchIcon fontSize='large' />
          </IconButton>
        </Box>
      </Stack>
    </AppBar>
  );
};

export default Navbar;
