import mongoose from 'mongoose';
let bookSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    publisher:{
        type: String,
        required: true,
        trim: true
    },
    author:{
        type: String,
        required: true,
        trim: true
    },
    price:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true
    }
},{
    versionKey: false,
    timestamps: true
});
export const Book  = mongoose.model('book',bookSchema);