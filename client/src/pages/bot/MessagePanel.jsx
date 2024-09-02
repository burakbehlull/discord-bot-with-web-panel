import { useState, useEffect } from "react"
import axios from "axios"

const api = import.meta.env.VITE_API_URI + "/messages"
const serverApi = import.meta.env.VITE_API_URI + "/server"
const botApi = import.meta.env.VITE_API_URI + "/bot"

export default function MessagePanel(){
    const [values, setValues] = useState({
        serverId: '', userId: '', channelId:'', messageId: '', content: '',
    })
    const [data, setData] = useState([])
    const [userDms, setUserDms] = useState([])
    
    const [channels, setChannels] = useState([])
    const [members, setMembers] = useState([])
    const [servers, setServers] = useState([])
    const [channelMessages, setChannelMessages] = useState([])
    const [error, setError] = useState({})
    
    const [timer, setTimer] = useState(false)
    const [isUserDm, setIsUserDm] = useState(false)
	const [misc, setMisc] = useState(false)
    
	async function handleServersClick(){
        await axios.get(botApi+"/servers")
        .then(res=> setServers(res.data['servers']))
        .catch(err=> setError(err))
    }    

    useEffect(()=> {
        handleServersClick()
        
    }, [])
    
    useEffect(()=> {
        if(timer){
			handleUserDmMessages()
		}
    }, [data])

    function handleChange(e){
        setValues({...values, [e.target.name]: e.target.value})
    }
    function handleIsUserDm(e){
		setIsUserDm(!isUserDm)
	}
    function handleMisc(e){
		setMisc(!misc)
	}
    function handleTimer(e){
		setTimer(!timer)
	}
    async function handleUserDmMessages(e){
        await axios.post(api+"/user/all", {
            userId: values.userId
        }).then(res=> setUserDms(res.data['messages'])).catch(err=> setError(err))
    }
    async function handleServerChannelMessages(e){
        await axios.post(api+"/server/all", {
            serverId: values.serverId,
            channelId: values.channelId
        }).then(res=> setChannelMessages(res.data['messages'])).catch(err=> setError(err))
    }    
    async function handleServerSend(e){
        await axios.post(api+"/server/send", {
            serverId:values.serverId, 
            channelId: values.channelId,
            content: values.content
        }).then(res=> setData(res.data)).catch(err=> setError(err))
    }  
    async function handleUserSend(e){
        await axios.post(api+"/user/send", {
            userId:values.userId, 
            content: values.content
        }).then(res=> setData(res.data)).catch(err=> setError(err))
    }
    async function handleGetServerChannels(e){
        await axios.post(serverApi+"/channels", {
            serverId:values.serverId
        }).then(res=> setChannels(res.data['data'])).catch(err=> setError(err))
    }
    
    async function handleGetMembers(e){
        await axios.post(serverApi+"/", {
            serverId:values.serverId
        }).then(res=> setMembers(res.data['members'])).catch(err=> setError(err))
    }


    async function handleMessageReply(e){
        await axios.post(api+"/reply", {
            userDm: isUserDm,
            userId:values.userId, 
            channelId:values.channelId, 
            serverId:values.serverId, 
            messageId: values.messageId,
            content: values.content
        }).then(res=> setData(res.data)).catch(err=> setError(err))
    }

    useEffect(()=>{
        
        const Keypress = (event) => {
            if (event.key === 'Enter') {
                document.querySelector("#content").value = ""
                if(misc){
                    handleUserSend()
                }
                handleServerSend()
            }
        }
        window.addEventListener('keydown', Keypress)

        return () => {
            window.removeEventListener('keydown', Keypress)
        }
    })

    return (
        <section id="message-panel">
            <h1>MESSAGE PANEL</h1>
            <div>

                
                <br />
                <label htmlFor="serverId">Server Id: <input type="text" name="serverId" value={values.serverId} onChange={handleChange} placeholder="Server Id.." /></label>
                <select name="serverId" onChange={handleChange}>
                    <p>Servers: </p>
                    {servers?.map((server,i)=>
                    <option key={i} value={server.id}>{server.name}</option>)}
                </select>
                <br />
                <label htmlFor="userId">User Id: <input type="text" name="userId" value={values.userId} onChange={handleChange} placeholder="User Id.." /></label>
                <select name="userId" onChange={handleChange}>
                    {members?.map((member,i)=>
                    <option key={i} value={member.userId}>{member.displayName}</option>)}
                </select>

                <br />
                <label htmlFor="channelId">Channel Id: <input type="text" name="channelId" value={values.channelId} onChange={handleChange} placeholder="Channel Id.." /></label>
                <select name="channelId" onChange={handleChange}>
                    {channels?.map((channel,i)=>
                    <option key={i} value={channel.id}>{channel.name}</option>)}
                </select>
                <br />

                <label htmlFor="messageId">Message Id: <input type="text" name="messageId" value={values.messageId} onChange={handleChange} placeholder="Message Id.." /></label>
                <select name="messageId" onChange={handleChange}>
                    {userDms?.map((message,i)=>
                    <option key={i} value={message.id}>{message.content}</option>)}
                </select>
                <select name="messageId" onChange={handleChange}>
                    {channelMessages?.map((message,i)=>
                    <option key={i} value={message.id}>{message.content}</option>)}
                </select>
                <br />
                <br />

            </div>

            <div>
                <h3>Mesaj Gönderme</h3>
                <label htmlFor="content">Mesaj: <textarea type="texta" name="content" value={values.content} onChange={handleChange} id="content" placeholder="Content.." /></label>
                <label htmlFor="misc">Enter Event: <input type="checkbox" value={misc} onChange={handleMisc} /></label>
                <label htmlFor="timer">Timer: <input type="checkbox" value={timer} onChange={handleTimer} /></label>
                <br />
                <br />
                <button onClick={handleServerSend}>Sunucuya Mesaj Gönder</button>
                <button onClick={handleUserSend}>Kullanıcıya Mesaj Gönder</button>
                <br />
                <br />
                <label htmlFor="isUserDm">Kullanıcı DM?: <input type="checkbox" value={isUserDm} onChange={handleIsUserDm} /></label>
                <button onClick={handleMessageReply}>Reply Mesaj Gönder</button>
                <br />
                <br />
                <button onClick={handleUserDmMessages}>DM mesajlarını getir</button>
                <button onClick={handleServerChannelMessages}>Server mesajlarını Getir</button>
                <button onClick={handleGetServerChannels}>Kanalları Getir</button>
                <button onClick={handleGetMembers}>Kullancıları Getir</button>

            </div>

            <div>
                <ul>
                    <li><b>Kullanıcı Dm Mesajları</b></li>
                    <br />
                    {userDms?.map((dm, i)=> <li key={i}>
                        <i>{dm.authorId}</i>: <b>{dm.content}</b> - {dm.id}
                    </li>)}
                </ul>
            </div>

            <div>
                <ul>
                    <li><b>Server Kanal Mesajları</b></li>
                    {channelMessages?.map((cm, i)=> <li key={i}>
                        <i>{cm.authorId}</i>: <b>{cm.content}</b> - {cm.id}
                    </li>)}
                </ul>
            </div>


        </section>
    )
}