import { useState, useEffect } from 'react'
import axios from 'axios'

const api = import.meta.env.VITE_API_URI + "/server"

export default function Channels(){
	const [channels, setChannels] = useState([])
	const [error, setError] = useState({})

	
    async function handleSubmit(){
        await axios.post(api+"/", {
            serverId: values.serverId
        }).then(res=> setChannels(res?.data['channels'])).catch(err=> setError(err))
    }

    useEffect(()=> {
        handleSubmit()
    }, [])
	
    return (
        <>
			<div className="server-channels">
                <ul>
                    <li>KANALLAR</li>
                    {channels?.map((channel, key)=><li key={key}>
                        {channel.name} - {channel.id}
                    </li>)}
                </ul>
            </div>
        </>
    )
}