import { Link, Outlet } from "react-router-dom"

export default function Scope(){
    return (
        <>
            <nav>
                <Link to="/">Anasayfa</Link>
                <Link to="/guild">Guild</Link>
                <Link to="/guild/server">Sunucular</Link>
            </nav>

            <main>
                <Outlet />
            </main>
        </>
    )
}