import { Outlet, Link } from "react-router-dom";

export default function Dashboard(){
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="settings">Bot Settings</Link>
            <Link to="actions">User Actions</Link>
            <Link to="server">Server</Link>
            
            <Outlet />
        </>
    )
}