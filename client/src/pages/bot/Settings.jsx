import axios from "axios";
import { useState } from "react"

const api = import.meta.env.VITE_API_URI + "/bot"

import {presenceFlags,statusFlags} from '../../helpers/data'
export default function Settings(){
    const [values, setValues] = useState({status: '', presence: 0, presenceName: ''})
    const [data, setData] = useState({})
    const [error, setError] = useState({})
    function handleChange(e){
        setValues({...values, [e.target.name]: e.target.value})
    }
    async function handleStatusClick(){
        await axios.post(api+"/status", {
            status: values.status
        }).then(res=> setData(res.data)).catch(err=> setError(err))
    }
    async function handlePresenceClick(){
        await axios.post(api+"/presence", {
            type: values.presence,
            name: values.presenceName,
        }).then(res=> setData(res.data)).catch(err=> setError(err))
    }
    return (
        <>
            <div className="bot-status">
                {JSON.stringify(data)}
                <select name="status" onChange={handleChange}>
                    {statusFlags?.map((flag,key)=><option key={key} value={flag}>{flag}</option>)}
                </select>
                <button onClick={handleStatusClick}>Ayarla</button>
            </div>

            <div className="bot-presence">
                {JSON.stringify(data)}
                <input type="text" name="presenceName" value={values.presenceName} onChange={handleChange} />
                <select name="presence" onChange={handleChange}>
                    {presenceFlags?.map((flag,key)=><option key={key} value={flag.value}>{flag.name}</option>)}
                </select>
                <button onClick={handlePresenceClick}>Ayarla</button>
            </div>
        </>
    )
}