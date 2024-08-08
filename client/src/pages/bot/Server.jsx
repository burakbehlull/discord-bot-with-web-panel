import axios from "axios"
import { useState } from "react"
const api = import.meta.env.VITE_API_URI + "/server"

export default function Server(){
    const [data, setData] = useState([])
    const [error, setError] = useState({})
    const [values, setValues] = useState({serverId: ''})
    
    function handleChange(e){
        setValues({...values, [e.target.name]: e.target.value})
    }

    async function handleSubmit(){
        await axios.post(api+"/", {
            serverId: values.serverId
        }).then(res=> setData(res.data)).catch(err=> setError(err))
    }
    return (
        <>

            {JSON.stringify(values)}

            {error && error?.message}
            {data?.success && data?.message}
            SERVER
            <div className="container">
                <label htmlFor="serverId">Server ID: <input type="text" name="serverId" value={values.serverId} onChange={handleChange} placeholder="Server ID..."  /></label>
                <button onClick={handleSubmit}>Get Roles</button>
            </div>

            <ul>
                <li>ROLLER</li>
                {data['roles']?.filter((role)=>role.name !== "=================")
                .map((role, key)=><li key={key}>
                    {role.name} - {role.id}
                </li>)}
            </ul>
            <br /><br />
            <ul>
                <li>KANALLAR</li>
                {data['channels']?.map((channel, key)=><li key={key}>
                    {channel.name} - {channel.id}
                </li>)}
            </ul>

            
        </>
    )
}