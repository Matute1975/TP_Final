//modelo para mensajeContacto

import { Schema,model } from "mongoose";

const MensajeContactoSchema= new Schema({
    name:{
        type: String,
    },
    email: {
        type: String,
    },
    datereceived: {
        type: Date,
        default: Date.now,
    },
    message:{
        type:String,
    },
    read: {
        type: Boolean,
        default: 'false'
    }

})
export default model ('Mensajes',MensajeContactoSchema)