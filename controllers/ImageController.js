const express         = require('express')
const app             = express()
const config          = require('../config/config')


app.set('key', config.key);
exports.save = function(request, response) {
    console.log("INIT Image");

    var base64Data = request.body.image.replace(/^data:image\/png;base64,/, "");
    const code     = request.body.code

    var fs      = require('fs');
    var folder  = `public/images/${code}`;

    if (!fs.existsSync(folder)){
        fs.mkdirSync(folder);
    }

    require("fs").writeFile(`${folder}/out.png`, base64Data, 'base64', function(err) {
      console.log("saved Image");
    });


    response.status(200).json({"error" : "success"})

};



exports.saveImgGallery = function(request, response) {
  console.log("INIT Image");

  var base64Data = request.body.image.replace(/^data:image\/png;base64,/, "");

  var folder  = `public/images`;


  require("fs").writeFile(`${folder}/out.png`, base64Data, 'base64', function(err) {
    console.log("saved Image");
  });

  response.status(200).json({"error" : "success"})

};

