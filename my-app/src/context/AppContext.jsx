import { createContext } from "react";
import { services } from "../assets/assets";

export const AppContext = createContext()

const AppContextProvider = (props) => {

const currencySymbol = 'Rs'

const value = {
    services,
    currencySymbol
}
return (
    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
)
 
}

export default AppContextProvider