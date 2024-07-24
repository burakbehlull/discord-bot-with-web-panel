import { useRoutes } from 'react-router-dom'
import { Hero, Layout,Dashboard } from '../pages/index'
export default function Routes(){
    return useRoutes([
        {
            path: '/',
            element: <Layout element={<Hero />} />,
        },
        {
            path: '/xd',
            element: <Layout element={<Hero />} />,
        }
    ])

}