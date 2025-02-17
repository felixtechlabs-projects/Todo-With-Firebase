import React, { createContext, useContext } from 'react'
import app from '../environments/environment';

const FirebaseContext = createContext(null);

// custom hook
export const useFirebase = () => useContext(FirebaseContext);

const FirebaseProvider = ({children}) => {
  return (
   <FirebaseContext.Provider value={app}>
    {children}
   </FirebaseContext.Provider>
  )
}

export default FirebaseProvider