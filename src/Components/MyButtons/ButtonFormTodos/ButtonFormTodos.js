import './ButtonFormTodos.scss'

export const MyButton = (props) => {
    const {name, handlerClick} = props
    
    return (
        <button className='ButtonForm' onClick={handlerClick}>
            {name}
        </button>
    )
}
