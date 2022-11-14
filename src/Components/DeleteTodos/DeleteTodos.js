import { useContext } from 'react'
import './DeleteTodos.scss'

import { Context } from '../../DataContext'
import { MyButton } from '../MyButtons/ButtonFormTodos/ButtonFormTodos'

export const DeleteTodos = () => {
    const [state, dispatch] = useContext(Context)

    const methodsDelete = {
        deleteAllPosts: () => {
            dispatch({ type: 'DELETE_ALL' })
        },

        deleteLastPost: () => {
            if (state.length) {
                const newState = [...state]
                newState.pop()
    
                dispatch({
                    type: 'DELETE_LAST',
                    list: newState,
                })
            }
        },
    }

    return (
        <div className='delete-todos'>
            <MyButton 
                handlerClick={methodsDelete.deleteAllPosts} 
                name='Delete All' 
            />
            <MyButton 
                handlerClick={methodsDelete.deleteLastPost} 
                name='Delete Last' 
            />
        </div>
    )
}
