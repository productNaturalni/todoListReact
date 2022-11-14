import React, { useContext} from 'react'
import './App.scss'

import { Context } from '../../DataContext'
import { Post } from '../Post/Post'
import { CountersTodos } from '../CountersTodos/CountersTodos'
import { FormTodos } from '../FormTodos/FormTodos'
import { DeleteTodos } from '../DeleteTodos/DeleteTodos'
import { ShowTodos } from '../ShowTodos/ShowTodos'

export const App = () => {
    const storageKeyData = 'storagePosts'
    const [state, dispatch] = useContext(Context)


    const startSession = () => {
        const data = JSON.parse(localStorage.getItem(storageKeyData))
        dispatch({
            type: 'LOAD__PAGE',
            list: data,
        })
    }
    const finishSession = () => {
        localStorage.setItem(storageKeyData, JSON.stringify(state))
    }

    window.addEventListener('load', startSession)
    window.addEventListener('beforeunload', finishSession)

    const render = (elem) => <Post
        key={elem.id.toString()}
        id={elem.id}
        content={elem.content}
        complited={elem.complited}
        create={elem.create}
    />

    return (
        <div className='wrapper'>
            <div className='header'>
                <DeleteTodos/>
                <FormTodos/>
                <CountersTodos state={state}/>
                <ShowTodos/>
            </div>
            <div className='main'>
                {state.map(render)}
            </div>
        </div>
    )
}
