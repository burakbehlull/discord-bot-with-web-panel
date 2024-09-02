import { useState } from "react"
import axios from "axios"

const api = import.meta.env.VITE_API_URI + "/messages"
const serverApi = import.meta.env.VITE_API_URI + "/server"

export default function MessagePanel(){
    const [values, setValues] = useState({
        serverId: '', userId: '', channelId:'', messageId: '', content: '',
    })
    const [data, setData] = useState([])
    const [userDms, setUserDms] = useState([])
    const [channels, setChannels] = useState([])
    const [channelMessages, setChannelMessages] = useState([])
    const [error, setError] = useState({})
    

    const [isUserDm, setIsUserDm] = useState(false)
    
    function handleChange(e){
        setValues({...values, [e.target.name]: e.target.value})
    }
    function handleIsUserDm(e){
		setIsUserDm(!isUserDm)
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

    return (
        <section id="message-panel">
            <h1>MESSAGE PANEL</h1>
            <div>
                <br />
                <label htmlFor="serverId">Server Id: <input type="text" name="serverId" value={values.serverId} onChange={handleChange} placeholder="Server Id.." /></label>
                <br />
                <label htmlFor="userId">User Id: <input type="text" name="userId" value={values.userId} onChange={handleChange} placeholder="User Id.." /></label>
                <br />
                <label htmlFor="channelId">Channel Id: <input type="text" name="channelId" value={values.channelId} onChange={handleChange} placeholder="Channel Id.." /></label>
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
                <label htmlFor="content">Mesaj: <input type="text" name="content" value={values.content} onChange={handleChange} placeholder="Content.." /></label>
                <select name="channelId" onChange={handleChange}>
                    {channels?.map((channel,i)=>
                    <option key={i} value={channel.id}>{channel.name}</option>)}
                </select>
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