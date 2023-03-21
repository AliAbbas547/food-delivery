const foodModel= require("../schema/foodSchema")


const createFoodMenu= async function(req,res){
    try{
      const data= req.body
       const foodsData= await foodModel.create(data)
       return  res.status(201).send({status:false,data:foodsData})
    }
    catch(err){
  return res.status(500).send({status:false,message:err.message})
    }
}

const getFoodData= async function (req,res){
  try{
    let newData=[
      {
          "CategoryName": "Biryani/Rice"
      },
      {
          "CategoryName": "Starter"
      },
      {
          "CategoryName": "Pizza"
      }
  ]
    let data= await foodModel.find()
    return res.status(200).send([data,newData])
  }
  catch(err){
    return res.status(500).send({status:false,message:err.message})
  }
}


module.exports= {createFoodMenu,getFoodData}