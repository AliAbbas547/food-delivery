const userModel= require("../schema/userSchema")
const jwt= require("jsonwebtoken")
const bcrypt= require("bcrypt")

const userSignUp= async function(req,res){
    try{
     const data= req.body
     const {password}= data
     let salt= await bcrypt.genSalt(10)
     let strongPassword=  await bcrypt.hash(password, salt);
     data.password= strongPassword
    const userData= await userModel.create(data)
    return res.status(201).send({status:true,data:userData})
    }
    catch(err){
        return res.status(500).send({status:false,message:err.message})
    }
}

const signIn= async function(req,res){
    try{
     let data= req.body
    const{email,password}= data
    let check= await userModel.findOne({email:email})
    if(check==null){
        return res.status(400).send({status:false,message:"email or password is wrong"})
    }

    let getOriginalPassword=await bcrypt.compare(password, check.password); 
    if(!getOriginalPassword){
        return res.status(400).send({status:false,message:"password is not correct"})
    }
    
    let userId= check["_id"]
    
    let token= jwt.sign({userId:userId},"foodApp")
    return res.status(201).send({status:true,token:token,userId:userId,email:email})
    }
    catch(err){
        return res.status(500).send({status:false,message:err.message})
    }
}

module.exports= {userSignUp,signIn}