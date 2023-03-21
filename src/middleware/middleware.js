const jwt= require("jsonwebtoken")

const authentication= async function(req,res,next){
    try{
    let token= req.headers["x-auth-key"]
    
    
    if(!token){
        return res.status(400).send({status:false,message:"token must be present"})
    }
    
    jwt.verify(token,"foodApp",(err,decode)=>{
        if(err)return res.status(401).send({status:false,message:"you are not authenticated"})
        req.decode=decode
        next()
    })


    }
    catch(err){
        return res.status(500).send({status:false,message:err.message})
    }
}

const authorization= async function(req,res,next){
    try{
       let userId= req.params.userId
       if(userId!=req.decode.userId){
         return res.status(403).send({status:false,message:"you are not authorized"})

       }
       next()

    }
    catch(err){
        return res.status(500).send({status:false,message:err.message})
    }
} 


module.exports= {authentication,authorization}