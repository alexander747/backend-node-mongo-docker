const {Router} = require('express')
const { getUsuarios, crearUsuario} = require('../controllers/user');



const router = Router()

router.get( '/', [] ,getUsuarios);

router.post(
    '/',
    [], 
    crearUsuario
    );

module.exports = router