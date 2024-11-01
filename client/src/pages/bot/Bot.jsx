import axios from "axios";
import { useState } from "react"

const api = import.meta.env.VITE_API_URI + "/bot"
import {presenceFlags,statusFlags} from '../../helpers/data'

import { Nav } from '../index'

export default function Settings(){
    const [values, setValues] = useState({status: 'idle', presence: "0", presenceName: ''})
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
        <section id="bot">
            <Nav />

            <div className="flex flex-col gap-4">
                {error && error?.message}
                {data?.success && data?.success}

                <div>
                    <h2>Bot Status: </h2>

                    <p>Bot Durumu: </p>
                    <select name="status" onChange={handleChange}>
                        {statusFlags?.map((flag,key)=><option key={key} value={flag}>{flag}</option>)}
                    </select>
                    <button onClick={handleStatusClick}>Ayarla</button>
                </div>

                <div className="flex flex-col">
                    <h2>Bot Presence ve Presence Name: </h2>
                    <div className="flex flex-row gap-4 items-center">
                        <span className="text-discordtext">Bot Durum Yazısı: </span>
                        <input 
                            type="text"
                            name="presenceName"
                            value={values.presenceName} onChange={handleChange}
                            placeholder="Bot Presence Name" 
                        
                        />
                        <select name="presence" onChange={handleChange}>
                            {presenceFlags?.map((flag,key)=><option key={key} value={flag.value}>{flag.name}</option>)}
                        </select>
                        <button onClick={handlePresenceClick}>Ayarla</button>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}