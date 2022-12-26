import {
  AppBar,
  IconButton,
  Typography,
  Link,
  Box,
  Stack,
} from '@mui/material';
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
        <Typography
          component={Link}
          href='/'
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
