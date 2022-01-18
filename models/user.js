import mongoose from 'mongoose';

const User = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    age: { type: Number, required: true },
});

export default mongoose.model('User', User);