import { useContext } from "react"
import { authContext } from "../Context/Context"
import { Navigate, useLocation } from "react-router-dom"
import { PropTypes } from 'prop-types';

const Praivate = ({children}) => {
  const {user,loading} = useContext(authContext)
  const loacation = useLocation()

  if(loading){
    return <div className="absolute top-1/2 left-1/2 text-4xl"><span className="loading  loading-spinner loading-lg text-primary"></span></div>
  }
   
   if(!user){
    return <Navigate to='/login' state={loacation?.pathname || '/'}></Navigate>
   }
  return (
    <div>
      {children}
    </div>
  )
}

export default Praivate

Praivate.propTypes = {
    children:PropTypes.node
}