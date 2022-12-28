import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

hydrateRoot(
  document.getElementById('root') as Element | Document,
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
