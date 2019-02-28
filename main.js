var mongoose = require('mongoose');
var schema = require ('./schema');

mongoose.connect('mongodb://localhost:27017/test2')

//parameters are: model name, schema, collection name
var Libros = mongoose.model('Libros',schema,'libros');

var libros = new Libros ({
    title: 'THE OA',
    author:'STEPHEN KING',
    body:'Viajes en Universos Alternos',
    comments:[{body:"Muy Agradable",date:'2019-02-27'}],
    meta:{
        votes:5,
        favs:10
    }
    
});


libros.save(function(error){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Saved!!");
    process.exit(0);
});