import React from 'react'

import { CountersTodos } from '../CountersTodos/CountersTodos'
import { DeleteTodos } from '../DeleteTodos/DeleteTodos'
import { FormTodos } from '../FormTodos/FormTodos'
import { ShowTodos } from '../ShowTodos/ShowTodos'

export const HeaderForm = () => {
    return (
        <div className='header'>
            <DeleteTodos />
            <FormTodos />
            <CountersTodos />
            <ShowTodos />
        </div>
    )
}
