const { Router }=require("express");//solicitamos la herramienta
                                    //ya viene en express
const {getUsers, updateUser, deleteUser, createUser}=require("../../controllers/user.js");//de aqui obtenemos todas las funciones
const router=Router();//creamos una variable usando esa importacion


router.get("/",getUsers);//obtener un usuario
router.post("/", createUser);//Dar de alta un usuario
router.put("/",updateUser);//Actualizar un usuario
router.delete("/",deleteUser);//Eliminar un usuario
    
module.exports=router;