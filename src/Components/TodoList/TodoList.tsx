import React, { useEffect, useState } from 'react'
import { PostTodo } from '../PostTodo/PostTodo'
import './TodoList.scss'

export const TodoList: React.FC = () => {
type Posttodo = {
    id: number
    text:string
}

    const [postsHtmlElement, setPostsHtmlElement] = useState<JSX.Element>(<></>)
    const [postsTodo, setPostTodo] = useState<Posttodo[]>([])

    const addPost = (event: any): void => {
        event.preventDefault()

        const newPost: Posttodo = {
            id: Date.now(),
            text: 'hello'
        }

        setPostTodo([...postsTodo, newPost])
    }

    

    const deleteAllPosts = (event: any): void => {
        event.preventDefault()

        setPostTodo([])
    }
    
    useEffect((): void => {
        if (!!postsTodo.length) {
            console.log(postsTodo.length);
            setPostsHtmlElement(<div className="posts"></div>)
        } else {
            setPostsHtmlElement(<></>)
        }
    }, [postsTodo])
  return (
    <div className='TodoList'>
        <button className='button-todo' onClick={deleteAllPosts}>Delete all</button>

        <form className='TodoList__form' onSubmit={addPost}>
            <input type="text" />
            <button type='submit' className='button-todo'>add</button>
        </form>
        {postsHtmlElement}
    </div>
  )
}
