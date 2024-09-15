import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export default function IsLogin({fallback, errorMessage, showLogin}){
    const { isLogin } = useSelector((state)=> state.auth)
    if(errorMessage && !isLogin){
        return errorMessage
    }
    if(!isLogin){
        if(showLogin) return fallback
        
        return <h1 className="no-login"><Link to="/login">Giriş</Link> yapınız.</h1>
    }
    return fallback
}