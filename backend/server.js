require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
app.use(cors())
app.use(express.json())


//schema
const schemaData = mongoose.Schema({
    title: String,
    content: String,
},{
    timestamps: true,
})

const notesModel = mongoose.model("user", schemaData)

// read
app.get('/', async(req, res) => {
    console.log(req.body, "get")
    const data = await notesModel.find({})
    res.json({success: true, mssg: 'Welcome to ZenNotes', data: data})
})

// create
app.post("/create", async(req, res) => {
    console.log(req.body, "post")
    const data = new notesModel(req.body)
    await data.save()
    res.send({success: true, mssg: "The note has been saved successfully", data: data})
})

// update
app.put("/update", async(req, res) => {
    console.log(req.body, "put")
    const {_id, ...rest} = req.body
    console.log(rest)
    const data = await notesModel.updateOne({_id: _id}, rest)
    res.send({success: true, mssg: "The note has been updated successfully", data: data})
})

// delete
app.delete("/delete/:id", async(req, res) => {
    console.log(req.body, "delete")
    const id = req.params.id
    console.log(id)
    const data = await notesModel.deleteOne({_id: id})
    res.send({success: true, mssg: "The note has been deleted successfully", data: data})
})

mongoose.connect("mongodb://127.0.0.1:27017/ZenNotes")

.then(() => {
    console.log("Connection successful")
    app.listen(process.env.PORT, () => {
        console.log('Listening on port', process.env.PORT)
    })
})

.catch((err) => {
    console.log(err)
})