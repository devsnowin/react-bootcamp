import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Container } from '@mui/material';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Loader from './components/Loader';

import './global.css';

const PetDetail = lazy(() => import('./pages/PetDetail'));
const About = lazy(() => import('./pages/About'));
const ErrorPage = lazy(() => import('./pages/404'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Loader />}>
        <Container>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/pets/:id' element={<PetDetail />} />
            <Route path='/*' element={<ErrorPage />} />
          </Routes>
        </Container>
      </Suspense>
    </QueryClientProvider>
  );
};

export default App;
