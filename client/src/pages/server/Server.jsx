import Channels from './Channels'
import Members from './Members'
import Roles from './Roles'

function Server(){
    return(
        <>
            <h1>SUNUCU GÖRÜNÜMÜ</h1>
            <Channels />
            <Members />
            <Roles />
        </>
    )

}

export default Server