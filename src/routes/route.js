const express= require("express")
const router= express.Router()
const foodController= require("../controller/foodController") 
const userController= require("../controller/userController")
const orderController= require("../controller/orderController")
const middleware= require('../middleware/middleware')


router.post("/food",foodController.createFoodMenu)
router.post("/userSignUp",userController.userSignUp)
router.post("/userLogin",userController.signIn)
router.get("/foodData",middleware.authentication,foodController.getFoodData)
router.post("/order",orderController.createOrderData)
router.get("/orderData",orderController.getCartData)


module.exports= router