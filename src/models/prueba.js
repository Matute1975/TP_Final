//modelo de coleccion usuarios
import { Schema,model } from "mongoose";
import uniqueValidator from 'mongoose-unique-validator';

const PruebaSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        minLength: 8,
    }
})
// Aplica el plugin uniqueValidator al esquema.
PruebaSchema.plugin(uniqueValidator);

export default model('CollectionPrueba',PruebaSchema)