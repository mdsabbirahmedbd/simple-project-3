
import { Outlet } from 'react-router-dom';
import Navbar from './../componants/Navbar';

const Root = () => {
  return (
    <div className="container mx-auto work">
   <Navbar></Navbar>
   <Outlet></Outlet>
    </div>
  )
}

export default Root
