//modelo de collection Publicidad, para envio futuro de mails a suscriptores:
import { Schema,model } from "mongoose";

const PublicidadSchema = new Schema({
    email:{  
        type: String,
        required: true,
        unique: true
    },

    dateSuscription:{         //fecha de alta
        type: Date,
        default: Date.now
    },
    dateUnsubscribe:{  //fecha de baja(puede servir a futuro)
        type: Date,
        default: null        
    },    
})
export default model('publicidad', PublicidadSchema,'publicidad');

    