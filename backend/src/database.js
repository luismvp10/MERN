const mongose = require('mongoose');

const URI = process.env.MONGODB_URI
    ?  process.env.MONGODB_URI
    : 'mongodb://localhost/mern' ;

mongose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true
});

const connection = mongose.connection;

connection.once('open', () => {
   console.log("DB is connected");
});
