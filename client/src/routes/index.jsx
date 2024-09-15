import { useRoutes } from 'react-router-dom'
import { Hero } from '../pages/index.js'
export default function Routes(){
    return useRoutes([
        {
            path: '/',
            element: <Hero />,
        }
    ])

}