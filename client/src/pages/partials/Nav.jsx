import { Link } from "react-router-dom"

export default function Nav(){
    return (
        <nav>
            <ul>
                <li><Link to="/bot">Bot Settings</Link></li>
                <li><Link to="/guild">Server Actions</Link></li>
                <li><Link to="/messagepanel">Message Panel</Link></li>
            </ul>
        </nav>
    )
}