const mongoose = require("mongoose");

module.exports = () => {
    let uri = "mongodb://mongo_user:Tlgkcdg1@cluster0-shard-00-00.ovmwa.mongodb.net:27017,cluster0-shard-00-01.ovmwa.mongodb.net:27017,cluster0-shard-00-02.ovmwa.mongodb.net:27017/Cluster0?ssl=true&replicaSet=atlas-dfzyqs-shard-0&authSource=admin&retryWrites=true&w=majority";
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    mongoose.connection.on('open', () => {
        console.log('MongoDB bağlantısı sağlandı.');
    });
    mongoose.connection.on('error', (err) => {
        console.log('MongoDB bağlantı hatası. ' + err);
    });

    mongoose.Promise = global.Promise;
}