import { Link } from 'react-router-dom'

export default function Hero(){
    return (
        <>
            HERO
            <Link to="/bot/settings">Bot Settings</Link>
            <Link to="/actions">User Actions</Link>
        </>
    )
}