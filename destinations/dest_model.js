const db = require("../data/config")

function find(){
    return db("destinations")
}

module.exports = {
    find, 
}