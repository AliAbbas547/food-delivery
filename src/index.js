const express= require("express")
const router=require("./routes/route")
const {mongoose}= require("mongoose")
const  dotenv= require("dotenv")
require("dotenv").config()
const app= express()
const PORT= process.env.PORT || 8000

const url=process.env.DB
app.use(express.json())
const cors= require('cors')
app.use(cors({origin: true, credentials: true}));
app.use(
    function(req,res,next){
        res.setHeader('Access-Control-Allow-Origin','*')
        next()
        
    }
)

mongoose.connect(url)
.then(()=>console.log("mongodb is connected"))
.catch((err)=>console.log(err))

app.use("/",router)

app.listen(PORT,()=>{
    console.log(`server is connected at port ${PORT}`)
})