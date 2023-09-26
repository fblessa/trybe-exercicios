// src/App.tsx

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CoffeeList from './pages/CoffeeList';
import Coffee from './pages/Coffee';
import NotFound from './pages/NotFound';
import Layout from './pages/Layout';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Routes>
        <Route path="/" element={ <Layout />}>
          <Route index element={ <Home /> } />
          <Route path="/coffees" element={ <CoffeeList /> } />
          <Route path="/coffees/:coffee" element={ <Coffee />} />
          <Route path="/*" element={ <NotFound /> } />
        </Route>
      </Routes>
    </>
  )
}

export default App;

