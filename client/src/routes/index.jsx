import { useRoutes } from 'react-router-dom'
import { Hero,Settings, Dashboard, Actions, MessagePanel } from '../pages/index.js'
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
                    path: 'server',
                    element: <Server />
                },
                {
                    path: 'settings',
                    element: <Settings />
                },
                {
                    path: 'actions',
                    element: <Actions />
                },
                {
                    path: 'message-panel',
                    element: <MessagePanel />
                }
            ]
        }
    ])

}