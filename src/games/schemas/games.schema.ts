import * as mongoose from 'mongoose';

export const GamesSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    category: String,
    created_at: Date,
},{
    versionKey:false
});  