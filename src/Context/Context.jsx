import { createContext} from "react"

import { PropTypes } from 'prop-types';

export const authContext = createContext(null)

const Context = ({children}) => {
  return (
      <authContext.Provider>
        {children}
      </authContext.Provider>
  )
}

export default Context

Context.propTypes = {
    children:PropTypes.node
}