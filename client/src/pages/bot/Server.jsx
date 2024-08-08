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

    async function handleRolesClick(){
        await axios.post(api+"/roles", {
            serverId: values.serverId
        }).then(res=> setData(res.data['data'])).catch(err=> setError(err))
    }
    return (
        <>

            {JSON.stringify(values)}

            {error && error?.message}
            {data?.success && data?.message}
            SERVER
            <div className="container">
                <label htmlFor="serverId">Server ID: <input type="text" name="serverId" value={values.serverId} onChange={handleChange} placeholder="Server ID..."  /></label>
                <button onClick={handleRolesClick}>Get Roles</button>
            </div>

            <ul>
                <li>ROLLER</li>
                {data?.filter((item)=>item.name !== "=================")
                .map((item, key)=><li key={key}>
                    {item.name} - {item.id}
                </li>)}
            </ul>

            
        </>
    )
}