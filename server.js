var express = require("express")
var Sequelize = require("sequelize") 
var nodeadmin = require("nodeadmin")
const mysql = require('mysql2');



//connect to mysql database
var sequelize = new Sequelize('biblioteca', 'root', '', {
    dialect:'mysql',
    host:'localhost',
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
})

var carte = sequelize.define('carte', {
    id_carte: Sequelize.INTEGER,
    titlu:  Sequelize.STRING,
    gen:  Sequelize.STRING,
    nota: Sequelize.INTEGER,
    citita: Sequelize.INTEGER,
    id_autor: Sequelize.INTEGER
    
})

carte.belongsTo(autor, {foreignKey: 'id_autor', targetKey: 'id'})

var app = express()

app.use('/nodeamin', nodeadmin(app))

app.get('/autor', function(request, response) {
    autor.findAll().then(function(carte){
        response.status(200).send(carte)
    })
        
})

app.put('/carte/:id', function(request, response) {
    carte.findById(request.params.id).then(function(carte) {
        if(carte) {
            carte.update(request.body).then(function(carte){
                response.status(201).send(carte)
            }).catch(function(error) {
                response.status(200).send(error)
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})
app.post('/autor', function(request, response) {
    autor.create(request.body).then(function(autor) {
        response.status(201).send(autor)
    })
})

app.delete('/carte/:id', function(request, response) {
    carte.findById(request.params.id).then(function(carte) {
        if(carte) {
            carte.destroy().then(function(){
                response.status(204).send()
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})


app.listen(8080);