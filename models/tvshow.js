const  mongoose  = require("mongoose");

tvshowSchema=mongoose.Schema({

    title:String,
    year:Number,
    episodes:Number,
    image:String,
    id:Number

});

module.exports=mongoose.model("TvShow",tvshowSchema);//manera de importar

