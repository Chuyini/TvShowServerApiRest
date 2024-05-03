const {request,response}=require("express");
const TvShow=require("./../models/tvshow");

const getTvShows=(req=request, res=response)=>{


    const {searchTerm}=req.query;

    TvShow.find({title:RegExp(searchTerm)}).then(
      (result)=>{//resultado satisfactorio de que si encontro los resulyados
        res.status(200).json({
          msg:"Controlador API tvShows GET/",
          result,
          searchTerm
        });

      }).catch(
      (error)=>{//Algun error

        res.status(200).json({
          msg:"Controlador API tvShows GET/ error al obtener los datos", error,
          result:[]
        });


      }
    );

    
};


const getTvShowsById=(req=request, res=response)=>{

  const {id} =req.params;
  TvShow.findOne({id:id}).then(
    (result)=>{ 
      res.status(200).json({
      msg:"Controlador API tvShows GetById/ por parametro de segmento",
      result
    })}
   
  ).catch(

      (error)=>{

        res.status(500).json({
          msg:"No se pudo hacer la consulta",
          error
        })

      }
  );
  
  
};
const createTvShows=(req=request, res=response)=>{

  const {title,year,episodes, image,id}=req.body;//Vemos que habia en el boy para llenar los datos

  if(!title||!year||!episodes||!id){//hacemos las validaciones
    res.status(400).json({//este codigo de respuesta hace referencia a cuando hacemos peticion con datos incorrectos
      msg:"Datos faltantes o incorrectos",
      title,
      year,
      episodes,
      image
    });
    return;//para que ya no ejecute lo demasD
  }

  const newTvShow=TvShow({//todos lo elementos que vamos a subir para generar uno nuevo

    title,
    year,
    episodes,
    image,
    id
  })

newTvShow.save(/*aqui guardamos en la base de datos*/).then(
  ()=>{

    res.status(200).json({
      msg:"Exito al subir el nuevo elemento"
    });

  }
).catch(
  ()=>{

    res.status(500).json({
      msg:"No hubo exito al subir el nuevo elemento"
    });
  }
);
  

    
};

const updateTvShows=(req=request, res=response)=>{

    const {id}=req.params;

    const {title,year,episodes,image}=req.body;//llenar atraves de los que llegan del request body

    if(!title||!year||!episodes||!image){//hacemos las validaciones
      res.status(400).json({//este codigo de respuesta hace referencia a cuando hacemos peticion con datos incorrectos
        msg:"Datos faltantes o incorrectos"
      });
      return;//para que ya no ejecute lo demasD
    }
    TvShow.updateOne({id:id},{title:title,year:year,episodes:episodes,image:image/*filtro por el que se buca y elementos a cambiar*/}).then(
      (result)=>{
        res.status(200).json({
          msg:"Elemento actualizado con exito",
          id,
          title,
          year,
          episodes,
          image
      });
      }
    ).catch(
      (error)=>{
        res.status(500).json({
          msg:"Error al actualizar",
          error
      });
      }
    );

    
};
const deleteTvShows=(req=request, res=response)=>{

  const {id}=req.params;//obtenemos todos los parametros de segmento

  
  TvShow.deleteOne({ id:id }).then(
    (result)=>{

      res.status(200).json({
        msg:"eliminacion realizada con exito",
        
      });

    }
  ).catch(
    (error)=>{
      res.status(500).json({
        msg:"No se pudo realizar la eliminacion",error
        
    });
    }
  )

};

module.exports={ 

    getTvShows,
    createTvShows,
    updateTvShows,
    deleteTvShows,
    getTvShowsById

};