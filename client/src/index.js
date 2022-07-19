import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import App from './components/App';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Cupcakes from './components/pages/Cupcakes';
import CupcakesList from './components/pages/CupcakesList';
import CupcakeInfo from './components/pages/CupcakeInfo';
import NewCupcake from './components/pages/NewCupcake';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='cupcakes' element={<Cupcakes />}>
          <Route index element={<CupcakesList />} />
          <Route path=':cupcakeId' element={<CupcakeInfo />} />
          <Route path='new' element={<NewCupcake />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);