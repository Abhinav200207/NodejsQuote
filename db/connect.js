const mongoose = require('mongoose');
MONGO_URI = 'mongodb+srv://Abhinav:12345@cluster0.ipq1n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const connectdb = () => {
    return mongoose.connect(MONGO_URI)
}

module.exports = {
    connectdb
}
