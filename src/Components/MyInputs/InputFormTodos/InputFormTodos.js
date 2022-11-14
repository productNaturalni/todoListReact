import './InputFormTodos.scss'

export const InputFormTodos = (props) => {
    const {type, value, handlerInput} = props
    return (
        <input className='input-form-todo' type={type} onChange={handlerInput} value={value} />
    )
}
