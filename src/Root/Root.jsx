
import { Outlet } from 'react-router-dom';
import Navbar from './../componants/Navbar';
import Footer from '../componants/Footer';

const Root = () => {
  return (
    <div className="container mx-auto work">
   <Navbar></Navbar>
   <Outlet></Outlet>
   <Footer></Footer>
    </div>
  )
}

export default Root
