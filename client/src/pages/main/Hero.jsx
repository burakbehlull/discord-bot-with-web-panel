import { Link } from 'react-router-dom'
export default function Hero(){
    return (
        <>
            HERO
            <nav>
                <Link to="/bot">Bot Settings</Link>
                <Link to="/guild">Sunucu ve User Actions</Link>
                <Link to="/messagepanel">Message Panel</Link>

            </nav>

            <main>
                
            </main>
        </>
    )
}