const orderModel= require("../schema/orderSchema")

const createOrderData= async function(req,res){

try{
    let cartData= req.body
    console.log(cartData)
    let storeCartData= await orderModel.create(cartData)
    return res.status(201).send({status:true,data:storeCartData})

}
catch(err){
    return res.status(500).send({status:false,message:err.message})
}

}


const getCartData= async function(req,res){
try{
    let email= req.query.email
    console.log(email)
    let cartData= await orderModel.find({email:email})
    console.log(cartData)
    return res.status(200).send({status:true,data:cartData})

}
catch(err){
    return res.status(500).send({status:false,message:err.message})
}
}


module.exports= {createOrderData,getCartData}