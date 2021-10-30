const { response } = require('express');
const bcrypt  = require('bcryptjs');
const Usuario = require('../models/user');
// const { generarJWT } = require('../helpers/jwt');

const getUsuarios = async (req, res)=>{
    const desde = Number(req.query.desde) || 0 ;
    // //--------- const usuarios = await Usuario.find();
    // const usuarios = await Usuario.find({}, 'nombre email role google')
    //     .skip( desde )
    //     .limit( 5 );
    // const total = await Usuario.count();    
    
    //PARA PAGINACIÓN SKIP Y LIMIT

    const usuarios = await Usuario.find().skip( desde ).limit( 5 );

    res.json({
        ok:true,
        usuarios
    });
}


const crearUsuario = async (req, res = response)=>{

    const { email, password='1234', nombre, img='', direccion='', telefono='', fnacimiento='',role='usuario' } = req.body;

    try {
        
        const existeEmail = await Usuario.findOne({ email:email });

        if(existeEmail){
            return res.status(400).json({
                ok:false,
                msg:'El correo ya está registrado'
            });
        }

        const usuario = new Usuario( req.body );
        //encriptar contrasña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync( password, salt);
        // guardar usuario
        await usuario.save();

         // generar token
        //  const token = await generarJWT( usuario._id );

        res.json({
            ok:true,
            usuario:usuario
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Error inesperado'
        });
    }

   
}


module.exports = {
    getUsuarios,
    crearUsuario
}