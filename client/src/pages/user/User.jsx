import axios from "axios";
import { useState } from "react"
import { useSelector } from "react-redux";

const api = import.meta.env.VITE_API_URI + "/user"

export default function Actions(){

    const [values, setValues] = useState({ userId: '', reason: '', time: '',byRoles: ''})
    const [data, setData] = useState({})
    const [error, setError] = useState({})
	const [roles, setRoles] = useState([])
	const [isDelete, setIsDelete] = useState(false)

    const { serverId } = useSelector(state=> state.keep)

    function handleChange(e){
        setValues({...values, [e.target.name]: e.target.value})
    }
	
	function handleRolesChange(e){
		setRoles([...roles, values.byRoles])
		values.byRoles = ""
	}
	function handleRolesClear(e){
		setRoles([])
	}
	function handleIsDeleteChange(e){
		setIsDelete(!isDelete)
	}
    async function handleBanClick(){
        await axios.post(api+"/ban", {
            serverId: serverId,
            userId: values.userId,
            reason: values.reason
        }).then(res=> setData(res.data)).catch(err=> setError(err))
    }
    async function handleKickClick(){
        await axios.post(api+"/kick", {
            serverId: serverId,
            userId: values.userId,
            reason: values.reason
        }).then(res=> setData(res.data)).catch(err=> setError(err))
    }
    async function handleUnbanClick(){
        await axios.post(api+"/unban", {
            serverId: serverId,
            userId: values.userId,
            reason: values.reason
        }).then(res=> setData(res.data)).catch(err=> setError(err))
    }
    async function handleTimeoutClick(){
        await axios.post(api+"/timeout", {
            serverId: serverId,
            userId: values.userId,
            reason: values.reason,
            time: values.time
        }).then(res=> setData(res.data)).catch(err=> setError(err))
    }
    async function handleRoleClick(){
        await axios.post(api+"/roles", {
            serverId: serverId,
            userId: values.userId,
            roles: roles,
			isDelete: isDelete,
        }).then(res=> setData(res.data)).catch(err=> setError(err))
    }
    return (
        <section id="user-area">
            <h1>KULLANICI İŞLEMLERİ</h1>
            {error && error?.message}
            {data?.success && data?.message}


            <div className="container">
                <label htmlFor="userId">User ID: <input type="text" name="userId" value={values.userId} onChange={handleChange} placeholder="User ID..." /></label>
                <label htmlFor="reason">Reason: <input type="text" name="reason" value={values.reason} onChange={handleChange} placeholder="Reason.." /></label>
                
                <button onClick={handleBanClick}>Ban</button>
                <button onClick={handleKickClick}>Kick</button>
                <button onClick={handleUnbanClick}>Unban</button>

                <div>
                    <h3>Timeout</h3>
                    <label htmlFor="time">Time: <input type="text" name="time" value={values.time} onChange={handleChange} placeholder="Time.." /></label>
                    <button onClick={handleTimeoutClick}>Timeout</button>
                </div>
				
				<div>
                    <h3>Role Manager</h3>
                    <label htmlFor="byRoles">Rol ID: <input type="text" name="byRoles" value={values.byRoles} onChange={handleChange} placeholder="Rol Id..." /></label>
                    <label htmlFor="isDelete">Is Delete?: <input type="checkbox" value={isDelete} onChange={handleIsDeleteChange} /></label>

					<button onClick={handleRolesChange}>Rol ID ekle</button>
					<button onClick={handleRolesClear}>Temizle</button>
					
					
					<button onClick={handleRoleClick}>Rolleri Gönder</button>
                </div>
            </div>

        </section>
    )
}