var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserModelSchema = new Schema({
    id: Number,
    username: String
}, { collection: 'users' });

const UserModel = mongoose.model('UserModel', UserModelSchema);

export default UserModel