import { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setServerId as ReduxServerId } from '../../store/slices/keepSlice'
import { useNavigate } from 'react-router-dom'

const api = import.meta.env.VITE_API_URI + "/bot"

export default function Servers(){
    const dispatch = useDispatch()
    const navigate = useNavigate()

	const [servers, setServers] = useState([])
	const [serverId, setServerId] = useState([])
	const [error, setError] = useState({})

	
	async function handleServersClick(){
        await axios.get(api+"/servers")
        .then(res=> setServers(res.data['servers']))
        .catch(err=> setError(err))
    }
    function handleServerId(value){
        dispatch(ReduxServerId(value))
        navigate('/dashboard')
    }
    function handleChange(e){
        setServerId(e.target.value)
    }

    useEffect(()=> {
        handleServersClick()
    }, [])
	
    return (
        <>
			<h1>Bot Servers</h1>
            
			<div className="bot-servers">
                <div>
                    <input type="text" value={serverId} onChange={handleChange} placeholder="Server Id" />
                    <button onClick={()=>handleServerId(serverId)}>ID'yi kaydet</button>
                </div>
                <ul>
                    <li><b>SERVERS</b></li>
                    {servers.map((server, i)=> <li key={i}>
                        {server?.name} - {server?.id} <button onClick={()=> handleServerId(server?.id)}>Id'yi al</button>
                    </li>)}
                </ul>
            </div>
        </>
    )
}