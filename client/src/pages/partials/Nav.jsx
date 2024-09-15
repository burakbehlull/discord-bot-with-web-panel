import { Link } from "react-router-dom"

export default function Nav(){
    return (
        <nav>
            <ul>
                <li><Link to="/">Anasayfa</Link></li>
                <li><Link to="/bot">Bot Ayarları</Link></li>
                <li><Link to="/guild">Sunucu İşlemleri</Link></li>
                <li><Link to="/messagepanel">Mesaj Paneli</Link></li>
            </ul>
        </nav>
    )
}