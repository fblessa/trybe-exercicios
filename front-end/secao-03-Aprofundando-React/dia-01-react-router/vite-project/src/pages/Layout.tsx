// src/components/layout/index.tsx

import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <footer>
        <span>Trybe - todos os direitos reservados</span>
      </footer>
    </>
  )
}

export default Layout;
