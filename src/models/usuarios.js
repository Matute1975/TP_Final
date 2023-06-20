//modelo de coleccion usuarios
import { Schema,model } from "mongoose";
import uniqueValidator from 'mongoose-unique-validator';


const UsuariosSchema = new Schema({
    username:{      //nombre de usuario.
        type:String,
        required:true,
        unique:true, //esto es una validacion para que no exista ya en la DB. dara error.
    },
    password:{      //clave de acceso, minimo 8 caracteres.
        type:String,    
        required:true,
        select: false,
        minLength:8,
    },
    contact:[{ firstName:{ type:String, required:true}, //array con los datos del contacto
               lastName:{ type:String, required:true }, 
               DNI:{ type:Number, required:true,max:50000000, unique:true }, //debe ser unico
               age:{ type:Number, required:true, min:18 }, 
               email:{ type:String, required:true, unique:true }}],     //debe ser unico

    address:[{ street:{ type:String, required:true }, //array de domicilio.
               number:{ type:Number, required:true }, 
               phone:{ type:Number}, 
               location:{ type:String,required:true }, 
               city:{ type:String, required:true }, 
               CP:{ type:String, required:true }, 
               country:{type:String, required:true }}],

    registrationdate:{  //fecha de registro de alta, se carga automaticamente al guardar, no es necesario pasarlo como parametro.
        type: Date,
        default: Date.now,
    },
    rol:{       //rol de usuario, si es admin o usuario comun, no debe especificarse al guardar en la DB. por defecto agregara usuario.
        type:String,
        enum:['admin','usuario'],
        default:'usuario',        
    },
})
// Aplica el plugin uniqueValidator al esquema para que no permita repetidos.
UsuariosSchema.plugin(uniqueValidator);

export default model('usuarios',UsuariosSchema)