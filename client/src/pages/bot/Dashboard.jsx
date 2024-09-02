import { Outlet, Link } from "react-router-dom";

export default function Dashboard(){
    return (
        <section id="dashboard">
            <Link to="/">Home</Link>
            <Link to="settings">Bot Settings</Link>
            <Link to="actions">User Actions</Link>
            <Link to="server">Server</Link>
            <Link to="message-panel">Message Panel</Link>
            
            <Outlet />
        </section>
    )
}