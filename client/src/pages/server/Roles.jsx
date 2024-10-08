import { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'

const api = import.meta.env.VITE_API_URI + "/server"

export default function Roles(){
    const { serverId } = useSelector(state=> state.keep)

	const [roles, setRoles] = useState([])
	const [error, setError] = useState({})

	
    async function handleSubmit(){
        await axios.post(api+"/", {
            serverId: serverId
        }).then(res=> setRoles(res?.data['roles'])).catch(err=> setError(err))
    }

    useEffect(()=> {
        handleSubmit()
    }, [])
	
    return (
        <>
			<div className="server-roles">
                <ul>
                    <li>ROLLER</li>
                    {roles?.filter((role)=>role.name !== "=================")
                    .map((role, key)=><li key={key}>
                        {role.name} - {role.id}
                    </li>)}
                </ul>
            </div>
        </>
    )
}