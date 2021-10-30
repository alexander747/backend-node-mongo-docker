const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    nombre:{
        type: String,
        required: true 
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    img:{
        type: String,
        default:''

    },
    direccion:{
        type:String,
        default:''
    },
    telefono:{
        type:String,
        default:''
    },
    fnacimiento:{
        type:String,
        default:''
    },
    role:{
        type: String,
        required: true,
        default:'USER_ROLE'
    }
    
});

// para cambiar __id a uid en la consulta
UserSchema.method('toJSON', function(){
   const {__v, _id, password, ...object} =  this.toObject();
   object.uid = _id;
   return object;
})

module.exports = model( 'Usuario', UserSchema );