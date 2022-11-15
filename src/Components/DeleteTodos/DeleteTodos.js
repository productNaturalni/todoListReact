import { useContext } from 'react'
import './DeleteTodos.scss'

import { Context } from '../../DataContext'
import { MyButton } from '../MyButtons/ButtonFormTodos/ButtonFormTodos'

export const DeleteTodos = () => {
    const [state, dispatch] = useContext(Context)

    const handleDeleteAllPosts = () => {
        dispatch({ type: 'DELETE_ALL' })
    }

    const handleDeleteLastPost = () => {
        if (state.length) {
            const newState = [...state]
            newState.pop()

            dispatch({
                type: 'DELETE_LAST',
                list: newState,
            })
        }
    }

    return (
        <div className='delete-todos'>
            <MyButton
                handlerClick={handleDeleteAllPosts}
                name='Delete All'
            />
            <MyButton
                handlerClick={handleDeleteLastPost}
                name='Delete Last'
            />
        </div>
    )
}
