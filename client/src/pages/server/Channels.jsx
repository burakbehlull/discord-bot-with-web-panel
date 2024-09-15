import { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'

const api = import.meta.env.VITE_API_URI + "/server"

export default function Channels(){
    const { serverId } = useSelector(state=> state.keep)

    const [channels, setChannels] = useState([])
	const [error, setError] = useState({})

	
    async function handleSubmit(){
        await axios.post(api+"/", {
            serverId: serverId
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