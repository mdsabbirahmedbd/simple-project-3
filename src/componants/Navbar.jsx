
import { Link, NavLink } from "react-router-dom"



const Navbar = () => {



    const links = <>
     <li><NavLink className={({isActive}) => isActive && 'text-primary underline font-bold' } to={'/'}>Home</NavLink></li>
     <li><NavLink className={({isActive}) => isActive && 'text-primary underline font-bold' } to={'/contact'}>Contact</NavLink></li>
     <li><NavLink className={({isActive}) => isActive && 'text-primary underline font-bold' } to={'/register'}>Register</NavLink></li>
     
    </>

  return (
    <div>
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {links}
      </ul>
    </div>
    <div><h1 className="lg:text-4xl text-xl font-semibold">TripAdvisor</h1></div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="space-x-5 menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end space-x-3">
  <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box lg:w-52">
        <li>
          <a >
            Profile
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
     <Link to={'/login'}><a className="btn btn-primary">login</a></Link>
   
 </div>

</div>
    </div>
  )
}


export default Navbar



