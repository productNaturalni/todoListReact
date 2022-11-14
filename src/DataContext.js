import { createContext, useReducer } from 'react'

import { reducer } from './utils/redusers/todos'

export const data = []

export const MyContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, data)

    return(
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export const Context = createContext(data)