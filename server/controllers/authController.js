// auth controllers
import User from "../models/User.js"

async function CreateUser(req,res){
    const { username, displayName, email, password } = req.body
    try {
        const user = User.findOne({$or: [{email: email}, {username: username}]})
        if(user){
            return res.json({
                success: true,
                message: 'Böyle bir kullanıcı var!'
            })
        }
        const createdUser = await User.create({
            username: username,
            displayName: displayName,
            email:email,
            password:password,
        })
        return res.json({
            success: true,
            message: 'Başarılı',
            user: createdUser
        })
    } catch(err){
        return res.json({
            success: false,
            message :'Başarısız',
            error: err.message
        })
    }
}

export {
    CreateUser
}