const mongoose = require("mongoose")

// const mongoDbUrl='mongodb+srv://preetsansoya008:1Shergill@cluster0.hkm95ue.mongodb.net/?retryWrites=true&w=majority'
const mongoDbUrl = 'mongodb+srv://preetsansoya008:1Shergill@cluster0.hkm95ue.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}