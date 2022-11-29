const database = require('./db.json')
let newID = 4

module.exports = {

    getHouse: (req,res) => {
    res.status(200).send(database)
},
    deleteHouse: (req,res) => {
    let { id } = req.params
    let index = database.findIndex(house => house.id === +id)
    database.splice(index,1)
    res.status(200).send(database)
},
    createHouse: (req,res) => {
        let { address, imageURL, price } = req.body
        let newHouse = {
            id: newID,
            address,
            price,
            imageURL
        }
        database.push(newHouse)

        res.status(200).send(database)

        newID++


},
    updateHouse: (req,res) => {
        let { id } = req.params
        let { type } = req.body
        let index = database.findIndex(house => house.id === +id)
        let houseToUpdate = database[index]
        if(type === 'minus' && houseToUpdate.price > 0){
            houseToUpdate.price = houseToUpdate.price - 10000
        }else if(type === 'plus' && houseToUpdate.price !== 0){
            houseToUpdate.price = houseToUpdate.price + 10000
        }else if(type === 'plus' && houseToUpdate.price === 0){
            houseToUpdate.price = houseToUpdate.price + (10000 + x)
        }
        if(houseToUpdate.price < 0){
            x = houseToUpdate.price
            houseToUpdate.price = 0
        }
        res.status(200).send(database)


},






}