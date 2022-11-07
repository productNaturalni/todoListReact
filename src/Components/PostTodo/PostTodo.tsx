import React from 'react'
import './PostTodo.scss'

export const PostTodo = () => {
  return (
    <div className='post'>
        <div className="post__status">C</div>
        <div className="post__content">Content</div>
        <div className='post__wraper'>
                <button className="post__delete">X</button>
                <div className="post__create">date</div>
        </div>
    </div>
  )
}
