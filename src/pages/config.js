import mongoose from "mongoose"

const mongoDBURL = 'mongodb://arif:arif10102002@ac-zr2ranx-shard-00-00.ri2zec7.mongodb.net:27017,ac-zr2ranx-shard-00-01.ri2zec7.mongodb.net:27017,ac-zr2ranx-shard-00-02.ri2zec7.mongodb.net:27017/Travelease?ssl=true&replicaSet=atlas-kxgrh3-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Travelease'

mongoose.connect(mongoDBURL)
    export const db = mongoose.connection.db;