const express = require('express')
const cors = require('cors')
const app = express()

const dotenv = require('dotenv')
dotenv.config()

const { connectDB } = require('./config/connect');
connectDB(process.env.MONGODB_URI)
.then(()=>{
    console.log("Connection Successfull!")
})
.catch((e)=>{
    console.log("Connection Failed! \n ", e);
})

app.use(express.json())
app.use(cors())

const { fetchAll, addInfo, updateInfo, deleteInfo, deleteAll } = require('./controllers/controllers');

app.get("/", (req, res) => {
    return res.send("Hello world")
})

app.get("/passwords", fetchAll)

app.post("/passwords", addInfo)

app.patch("/passwords", updateInfo)

app.delete("/passwords", deleteAll)

app.delete("/passwords/:id", deleteInfo)

const PORT = process.env.PORT || 5500
app.listen(PORT, ()=>{
    console.log(`Server running at PORT: http://localhost:${PORT}/`)
})