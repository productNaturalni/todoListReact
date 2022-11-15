import React, { useContext } from 'react'

import { Context } from '../../DataContext'
import { Post } from '../Post/Post'

export const PostsBox = () => {
    const [state, dispatch] = useContext(Context)

    const render = (elem) => <Post
        key={elem.id.toString()}
        id={elem.id}
        content={elem.content}
        complited={elem.complited}
        create={elem.create}
    />
    
    return (
        <div className='main'>
            {state.map(render)}
        </div>
    )
}
