import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.scss'
import { App } from './Components/App/App'
import { MyContext } from './DataContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <MyContext>
            <App />
        </MyContext>
    </React.StrictMode>
)