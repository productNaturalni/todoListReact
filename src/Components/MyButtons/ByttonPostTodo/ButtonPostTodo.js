import './ButtonPostTodo.scss'

export const ButtonPost = (props) => {
    const {content, handlerClick} = props
    return (
        <button
            className='ButtonPost'
            onClick={handlerClick}
        >
            {content}
        </button>
    )
}
