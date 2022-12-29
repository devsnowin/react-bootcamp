import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Container } from '@mui/system';
import { Provider } from 'react-redux';

import Home from './pages/Home';
import PetDetail from './pages/PetDetail';
import Navbar from './components/Navbar';
import About from './pages/About';
import ErrorPage from './pages/404';
import store from './app/store';

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
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Container>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/pets/:id' element={<PetDetail />} />
              <Route path='/*' element={<ErrorPage />} />
            </Routes>
          </Container>
        </Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
