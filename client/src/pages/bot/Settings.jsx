import axios from "axios";
import { useState } from "react"

const api = import.meta.env.VITE_API_URI + "/bot/settings"

export default function Settings(){
    const [values, setValues] = useState({status: ''})
    const [data, setData] = useState({})
    const [error, setError] = useState({})
    function handleChange(e){
        setValues({...values, [e.target.name]: e.target.value})
    }
    async function handleClick(){
        await axios.post(api, {
            status: values.status
        }).then(res=> setData(res.data)).catch(err=> setError(err))
    }
    const statusFlags = ["idle", "dnd", "online", "offline"]
    return (
        <>
            <div className="bot-status">
                {JSON.stringify(data)}
                <select name="status" onChange={handleChange}>
                    {statusFlags?.map((flag,key)=><option key={key} value={flag}>{flag}</option>)}
                </select>
                <button onClick={handleClick}>Ayarla</button>
            </div>
        </>
    )
}