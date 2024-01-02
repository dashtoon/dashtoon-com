import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import './Layout.css'

const Layout = () => {

  return (
    <>
      <Header/>
      <Outlet />
    </>
  )
};

export default Layout;