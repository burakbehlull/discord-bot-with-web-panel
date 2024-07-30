import { useRoutes } from 'react-router-dom'
import { Hero,Settings, Dashboard } from '../pages/index.js'
export default function Routes(){
    return useRoutes([
        {
            path: '/',
            element: <Hero />,
        },
        {
            path: '/bot',
            element: <Dashboard />,
            children: [
                {
                    path: 'settings',
                    element: <Settings />
                }
            ]
        }
    ])

}