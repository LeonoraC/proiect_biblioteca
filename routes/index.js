var express = require('express');
var router = express.Router();
const mysql = require('mysql2');
var Sequelize = require("sequelize") ;
var bodyParser = require('body-parser')


//connect to mysql database
var sequelize = new Sequelize('biblioteca', 'root', '', {
    dialect:'mysql',
    host:process.env.IP,
    freezeTableName: true,
    operatorAliases: false
})

sequelize.authenticate().then(function(){
    console.log('Success')
})


var autor = sequelize.define('autor', {
    id_autor: Sequelize.INTEGER,
    nume: Sequelize.STRING,
    nationalitate: Sequelize.STRING,
    nr_carti_publicate: Sequelize.INTEGER
},
{
    freezeTableName: true,
    tableName: 'autor' 
    
})

var carte = sequelize.define('carte', {
    id_carte: Sequelize.INTEGER,
    titlu:  Sequelize.STRING,
    gen:  Sequelize.STRING,
    nota: Sequelize.INTEGER,
    citita: Sequelize.INTEGER,
    id_autor: Sequelize.INTEGER
},
{
    freezeTableName: true,
    tableName: 'carte' 
    
})

carte.belongsTo(autor, {foreignKey: 'id_autor', targetKey: 'id'})

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', function (request,response){
   response.render('index',  {name:"Libraria mea"});
});



router.get('/autori',function(request, response){
     autor.findAll({
          attributes: { exclude: ['id',`createdAt`, `updatedAt`] }
     }).then(function(autor){
        response.render('autori', {name:"Autori existenti",data: autor});
    })
})



router.get('/carti',function(request, response){
     carte.findAll({
          attributes: { exclude: ['id',`createdAt`, `updatedAt`] }
     }).then(function(carte){
       response.render('carti', {name:"Carti existente",data: carte});
    })
})

router.post('/update',function(request, response){
    var idCarte = request.body.id;
    var titlu = request.body.titlu;
    var gen = request.body.gen;
    var nota = request.body.nota;
    var citita = request.body.citita;
    var idAutor = request.body.id_autor;
    var flag = 1;
    
    for(var i=0;i<idCarte.length;i++)
    {
        var sqlQuery = "UPDATE carte SET titlu = '"+titlu[i]+"' , gen = '"+gen[i]+"' , nota = "+nota[i]+", citita = "+citita[i]+", id_autor = "+idAutor[i]+" WHERE id_carte = "+idCarte[i];
        if((nota[i] >=0 && nota[i] <= 10) && (citita[i] == 0 || citita[i] == 1))
        {
            sequelize.query(sqlQuery).spread((results, metadata) => {})
        }
        else
        {
            flag = 0;    
            break;
        }
    }
    
    if(flag)
        response.render('update', {message: "Salvare reusita"});
    else
        response.render('update', {message: "Salvare nereusita"});
     
})



module.exports = router;