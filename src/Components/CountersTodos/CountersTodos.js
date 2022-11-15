import { useCallback, useContext } from 'react'
import './CountersTodos.scss'

import { Context } from '../../DataContext'

export const CountersTodos = (props) => {
    const [state, dispatch] = useContext(Context)

    const lengthAllPosts = useCallback(() => {
        return state.length
    }, [state])

    const complitedPostLength = useCallback(() => {
        return state.filter(post => post.complited).length
    }, [state])

    return (
        <div className='posts-counters'>
            <div className='posts-counters__content'>
                <span className='posts-counters__content_description'>
                    All:
                </span>
                {lengthAllPosts()}
            </div>
            <div className='posts-counters__content'>
                <span className='posts-counters__content_description'>
                    Complited:
                </span>
                {complitedPostLength()}
            </div>
        </div>
    )
}
