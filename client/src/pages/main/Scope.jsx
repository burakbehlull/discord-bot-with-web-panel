import { Link, Outlet } from "react-router-dom"

export default function Scope(){
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Anasayfa</Link></li>
                    <li><Link to="/guild">Guild</Link></li>
                    <li><Link to="/guild/server">Sunucu İşlemleri</Link></li>
                    <li><Link to="/guild/user">Kullanıcı İşlemleri</Link></li>
                </ul>
            </nav>

            <main>
                <Outlet />
            </main>
        </>
    )
}