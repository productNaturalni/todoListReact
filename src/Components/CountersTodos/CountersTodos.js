import './CountersTodos.scss'

export const CountersTodos = (props) => {
    const { state } = props
    return (
        <div className='posts-counters'>
            <div className='posts-counters__content'>
                <span className='posts-counters__content_description'>
                    All:
                </span>
                {state.length}
            </div>
            <div className='posts-counters__content'>
                <span className='posts-counters__content_description'>
                    Complited:
                </span>
                {state.filter(post => post.complited).length}
            </div>
        </div>
    )
}
