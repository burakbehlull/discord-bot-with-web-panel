import { Schema, model } from "mongoose"

const UserSchema = new Schema({
    displayName: {
        type: String,
        unique: true,
        required: true
    },
    username: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    lastLoggedIn: {
        type: Date,
        default: Date.now
    },
})

export default model('User', UserSchema)