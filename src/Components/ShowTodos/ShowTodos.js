import React, { useContext, useState, useEffect } from 'react'

import './ShowTodos.scss'
import { Context } from '../../DataContext'
import { MyButton } from '../MyButtons/ButtonFormTodos/ButtonFormTodos'
import { InputFormTodos } from '../MyInputs/InputFormTodos/InputFormTodos'

export const ShowTodos = () => {
    const [state, dispatch] = useContext(Context)
    const [inputSearch, setInputSearch] = useState('')

    const handleShowAllPosts = (event) => {
        event.preventDefault()

        state
            .filter(post => !post.complited)
            .forEach(post => document
                .getElementById(post.id)
                .classList
                .remove('show__complited')
            )
    }

    const handleShowComplitedPosts = (event) => {
        event.preventDefault()

        state
            .filter(post => !post.complited)
            .forEach(post => document
                .getElementById(post.id)
                .classList
                .add('show__complited')
            )
    }

    const searchPosts = (event) => {
        event.preventDefault()

        setInputSearch(event.target.value)

    }

    useEffect(() => {
        state.forEach(post => document
            .getElementById(post.id)
            .classList
            .remove('search')
        )
        if (!!inputSearch) {
           
            state
                .filter(post => !post.content.includes(inputSearch))
                .forEach(post => document
                    .getElementById(post.id)
                    .classList
                    .add('search')
                )
        } 
    }, [inputSearch])

    return (
        <div className='show-todos'>
            <MyButton name='Show All' handlerClick={handleShowAllPosts} />
            <MyButton name='Show Complited' handlerClick={handleShowComplitedPosts} />
            <InputFormTodos type='search' handlerInput={searchPosts} value={inputSearch} />
        </div>
    )
}
