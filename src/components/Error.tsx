import { Box, Typography } from '@mui/material';

const Error = () => {
  return (
    <Box
      minHeight='100vh'
      mt='-6rem'
      sx={{ display: 'grid', placeItems: 'center' }}
    >
      <Typography variant='h1'>Oh no something bad happened!</Typography>
    </Box>
  );
};

export default Error;
