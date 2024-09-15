import { useState, useEffect } from 'react'
import axios from 'axios'

const api = import.meta.env.VITE_API_URI + "/server"

export default function Members(){
	const [members, setMembers] = useState([])
	const [error, setError] = useState({})

	
    async function handleSubmit(){
        await axios.post(api+"/", {
            serverId: values.serverId
        }).then(res=> setMembers(res?.data['members'])).catch(err=> setError(err))
    }

    useEffect(()=> {
        handleSubmit()
    }, [])
	
    return (
        <>
			<div className="server-members">
                <ul>
                    <li>KULLANICLAR</li>
                    {members?.map((member, key)=><li key={key}>
                        <img className="userImage" src={`${member.displayAvatarURL}`} alt="user image" />- {member.displayName} - {member.userId}
                    </li>)}
                </ul>
            </div>
        </>
    )
}