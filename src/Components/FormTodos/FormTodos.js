import { useContext, useState } from 'react'
import './FormTodos.scss'

import { Context } from '../../DataContext'
import { MyButton } from '../MyButtons/ButtonFormTodos/ButtonFormTodos'
import { InputFormTodos } from '../MyInputs/InputFormTodos/InputFormTodos'

export const FormTodos = () => {
    const [state, dispatch] = useContext(Context)
    const [inputValue, setInputValue] = useState('')

    const setContentStringByValueInput = (event) => {
        event.preventDefault()

        setInputValue(event.target.value)
    }

    const handleAddddPOst = (event) => {
        event.preventDefault()
        if (inputValue) {
            const dateCreate = new Date()
            const newPost = {
                id: dateCreate.getTime().toString(),
                content: inputValue,
                complited: false,
                create: dateCreate.toLocaleDateString(),
            }

            dispatch({
                type: 'ADD',
                newPost: newPost,
            })

            setInputValue('')
        }
    }

    return (
        <form className='form-todos'>
            <InputFormTodos type='text' handlerInput={setContentStringByValueInput} value={inputValue} />
            <MyButton handlerClick={handleAddddPOst} name='Add' />
        </form>
    )
}
