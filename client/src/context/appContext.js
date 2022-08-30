import React, { useReducer, useContext} from 'react';
import reducer from './reducer'
import { DISPLAY_ALERT } from './action';

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
}

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT })
  }
  
  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext);
}

export { AppProvider, initialState, useAppContext }