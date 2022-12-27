import { Box, Typography } from '@mui/material';

const ErrorPage = () => {
  return (
    <Box
      minHeight='100vh'
      mt='-6rem'
      display='grid'
      sx={{
        placeItems: 'center',
      }}
    >
      <Typography variant='h2' fontWeight='600'>
        Page not found :(
      </Typography>
    </Box>
  );
};

export default ErrorPage;
