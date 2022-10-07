const mongoose = require("mongoose")

const connecToDataBase = async () => {
    await mongoose.connect('mongodb+srv://eita91:ifzDnqBneSASk5Sa@cluster0.sex8x.mongodb.net/?retryWrites=true&w=majority',
     (error)=>{

        if (error){
            return console.log("deu tudoo errado", error)
        }

        return console.log("deu boa pai")

    })
}

module.exports = connecToDataBase