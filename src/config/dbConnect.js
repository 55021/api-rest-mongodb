import { mongoose } from 'mongoose';

mongoose.connect("mongodb+srv://55021:q3wln7Wo4JvT4WpT@cluster0.a3e5f.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;