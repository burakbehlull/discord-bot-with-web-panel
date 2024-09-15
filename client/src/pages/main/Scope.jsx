import { Link, Outlet } from "react-router-dom"

export default function Scope(){
    return (
        <>
            <nav>
                <Link to="/">Anasayfa</Link>
                <Link to="/guild">Guild</Link>
                <Link to="/guild/server">Sunucu İşlemleri</Link>
                <Link to="/guild/user">Kullanıcı İşlemleri</Link>
            </nav>

            <main>
                <Outlet />
            </main>
        </>
    )
}