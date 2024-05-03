const { Router } = require("express");
const {getTvShows,createTvShows,updateTvShows,deleteTvShows, getTvShowsById}=require("../../controllers/tvShows");
const { route } = require("./user");

const router=Router();

router.get("/",getTvShows);
router.get("/:id",getTvShowsById);//buscamos por id un elemento por parametro de segmento
router.post("/",createTvShows);
router.put("/:id",updateTvShows);
router.delete("/:id",deleteTvShows);



module.exports=router;