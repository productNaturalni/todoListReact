import React, { useContext, useCallback, useMemo } from 'react'
import './App.scss'

import { Context } from '../../DataContext'
import { HeaderForm } from '../HeaderForm/HeaderForm'
import { PostsBox } from '../PostsBox/PostsBox'

export const App = () => {
    const storageKeyData = 'storagePosts'
    const [state, dispatch] = useContext(Context)

    const startSession = () => {
        const data = JSON.parse(localStorage.getItem(storageKeyData))
        dispatch({
            type: 'LOAD__PAGE',
            list: data,
        }, [])
    }
    const finishSession = () => {
        localStorage.setItem(storageKeyData, JSON.stringify(state))
    }

    window.addEventListener('load', startSession)
    window.addEventListener('beforeunload', finishSession)

    const renderForm = useCallback(() => <HeaderForm />, [])
    const renderPosts = useCallback(() => <PostsBox />, [])

    return (
        <div className='wrapper'>
            {renderForm()}
            {renderPosts()}
        </div>
    )
}
