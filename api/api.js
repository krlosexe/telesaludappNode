const express         = require('express')
const ImageController  = require('../controllers/ImageController.js');
const middlewareJwt   = require('../middlewares/middlewareAuth.js');
//const cors              = require('cors')


const Routes = express.Router();

/*
Routes.use(function(req, res, next) {
    
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, access-token");
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    
    next();
});
*/


//Routes.use(cors ());

Routes.post('/api/save/img', ImageController.save);


Routes.post('/api/save/img/gallery', ImageController.saveImgGallery);


module.exports = Routes;

