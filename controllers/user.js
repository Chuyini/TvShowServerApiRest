const {request,response}=require("express"); 



//creamos nuestra funcion de get users que usaremos en 
//el archivo de routes

const getUsers=(req=request,res=response)=>{

    

    res.status(500).json({
        msg: "controlador API users GET/"

    });
}

const createUser=(req=request, res=response)=>{//No es necesario que post sea para crear pero es la convencion que se suele usar

    const body=req.body;

    res.status(500).json({

        msg:"Controlador API users POST l/",
        body
    });
}

const updateUser=(req=request, res=response)=>{

    res.status(500).json({

        msg:"Controlador API users PUT /"
    });
}

const deleteUser=(req=request, res=response)=>{

    res.status(500).json({

        msg:"Controlador API users DELETE /"
    });
}
//exportamos
module.exports ={

    getUsers,
    createUser,
    updateUser,
    deleteUser
}