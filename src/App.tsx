import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import PetDetail from './pages/PetDetail';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pets/:id' element={<PetDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
