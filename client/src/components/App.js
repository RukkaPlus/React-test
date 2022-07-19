import { Outlet } from 'react-router-dom';
import NavBar from './Navbar';
import '../css/App.css';

const App = () => (
  <div className='App'>
    <NavBar title='Create React App' />
    <main>
      <Outlet />
    </main>
  </div>
);

export default App;
