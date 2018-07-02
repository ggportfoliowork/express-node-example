import mongoose from 'mongoose'
import passportLocalMongoose from 'passport-local-mongoose'

const Schema = mongoose.Schema

let UserModelSchema = new Schema({
    username: String,
    password: String,
    has_viewed_tutorial: Number,
    created_at: Date,
    updated_at: Date,
    deleted_at: Date,
    created_by: Number,
    updated_by: Number,
    deleted_by: Date
}, { collection: 'users' })

UserModelSchema.plugin(passportLocalMongoose)

const UserModel = mongoose.model('UserModel', UserModelSchema)

export default UserModel