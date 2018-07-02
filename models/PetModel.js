var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PetSchema = new Schema({
    user_id: { type: Number, required: true },
    name: { type: String, required: true },
    dob: { type: Date, required: false },
    species: { type: String, required: true },
    breeds: { type: Array, required: true },
    description: { type: String, required: false }
});

const PetModel = mongoose.model('pets', PetSchema);

export default PetModel