import { useRoutes } from 'react-router-dom'
import { Hero, Login, Register } from '../pages/index.js'

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
        }
    ])

}