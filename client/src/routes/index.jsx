import { useRoutes } from 'react-router-dom'
import { Hero, Login, Register, Scope, 
    Server, Servers, User, MessagePanel, Bot } from '../pages/index.js'

export default function Routes(){

    return useRoutes([
        {
            path: '/',
            element: <Hero />,
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/register',
            element: <Register />
        },
        {
            path: '/guild',
            element: <Scope />,
            children: [
                {
                    path: '',
                    element: <Servers />
                },
                {
                    path: 'server',
                    element: <Server />
                },
                {
                    path: 'user',
                    element: <User />
                }
            ]
        },
        {
            path: 'messagepanel',
            element: <MessagePanel />
        },
        {
            path: 'bot',
            element: <Bot />
        },

    ])

}