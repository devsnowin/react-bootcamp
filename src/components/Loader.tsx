import { Box, CircularProgress } from '@mui/material';

const Loader = () => {
  return (
    <Box
      minHeight='100vh'
      mt='-6rem'
      sx={{ display: 'grid', placeItems: 'center' }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;
