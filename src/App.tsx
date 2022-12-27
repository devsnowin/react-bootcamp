import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Container } from '@mui/system';
import Home from './pages/Home';
import PetDetail from './pages/PetDetail';
import Navbar from './components/Navbar';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Container>
          <Navbar handleOpen={handleClickOpen} />
          <Routes>
            <Route
              path='/'
              element={
                <Home
                  isOpen={isOpen}
                  handleClickOpen={handleClickOpen}
                  handleClose={handleClose}
                />
              }
            />
            <Route path='/pets/:id' element={<PetDetail />} />
          </Routes>
        </Container>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
