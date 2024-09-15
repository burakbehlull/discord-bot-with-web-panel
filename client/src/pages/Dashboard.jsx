import { Outlet, Link } from "react-router-dom";

export default function Dashboard(){
    return (
        <section id="dashboard">
            <nav>
                <Link to="/">Home</Link>
                <Link to="settings">Bot Settings</Link>
                <Link to="actions">User Actions</Link>
                <Link to="message-panel">Message Panel</Link>
            </nav>

            <main>
                <Outlet />
            </main>
            
            

        </section>
    )
}