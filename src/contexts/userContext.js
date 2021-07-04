import {React, useContext, createContext} from 'react'
import {useLocalStorage} from '../hooks/useLocalStorage'

const UserContext = createContext();




export const UserProvider = ({children}) => {

  const [user, setUser] = useLocalStorage('user',null)




  const setUserContext = (new_user) => {
    setUser(new_user)
  }

  return (
    <UserContext.Provider value={{user, setUserContext}}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  const context = useContext(UserContext)
  return context
}
