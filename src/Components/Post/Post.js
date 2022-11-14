import React, { useContext } from 'react'
import './Post.scss'

import { Context } from '../../DataContext'
import { ButtonPost } from '../MyButtons/ByttonPostTodo/ButtonPostTodo'

export const Post = (props) => {
    const { id, content, complited, create } = props
    const [state, dispatch] = useContext(Context)

    const handleDeletePOst = (event) => {
        event.preventDefault()
        const stateNow = [...state]

        const index = stateNow.findIndex(elem => elem.id === props.id)
        stateNow.splice(index, 1)

        dispatch({
            type: 'DELETE_POST',
            newState: stateNow,
        })
    }

    const handleComplitedPost = (event) => {
        event.preventDefault()

        const stateNow = [...state]

        const index = stateNow.findIndex(elem => elem.id === props.id)

        if (!stateNow[index].complited) {
            stateNow[index].complited = true
        } else {
            stateNow[index].complited = false
        }

        dispatch({
            type: 'COMPLITED',
            newState: stateNow,
        })
    }


    return (
        <div className='post' id={id}>
            <ButtonPost content= {!complited ? '' : '✓'} handlerClick={handleComplitedPost}/>
            <div className='post__content'>
                {content}
            </div>
            <div className='post__box'>
                <ButtonPost content='✖' handlerClick={handleDeletePOst}/>
                <div className='post__create'>{create}</div>
            </div>
        </div>
    )
}
