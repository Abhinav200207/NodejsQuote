const express = require('express');
const { connectdb } = require('./db/connect');
const app = express();
const rand = require('./routes/randomgenroutes')
// const connectDB = require("./db/connect")

app.use(express.json());

const port = process.env.PORT || 3000

app.use("/api/v1/random", rand)
// const MONGO = process.env.MONGO_URI

const start = async () => {
    try {
        await connectdb()
        app.listen(port, () => {
            console.log(`server is listenig to port ${port}`)
        })
    } catch (error) {
        console.error(error)
    }
}


start()