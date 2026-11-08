const express = require('express')
const router = express.Router()

const { Order } = require('../models')

//get request = list of Product
router.get("/", async(req, res) => {
    try {
        const Orders = await Order.findAll({
            attributes:["productName", "price"]
        })
        res.status(200).json(Orders)
    }catch (error) {
        console.error(error)

        res.status(404).json({message: "An Error kay buang man kaw!"});

    }
});

//get Product Details using Product id
router.get("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const order = await Order.findAOne({
            attributes:["orderDate", "status"],
            where: {id: id},
        });
        console.log(Order)
        res.status(200).json(Order);
    }catch (error) {
        res.status(400).json({
            message: "Database error while fetching Product Data!", 
        });
    }
});

//update
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const {orderDate, status} = req.body

    try {
        const updatedOrder = await Order.update(
            {orderDate: orderDate,
             status: status
            },
            {
                where:{id:id}
            }
        )
        if(updatedOrder [0] === 0){
            return res.status(404).json({message: "user data not found!"})
    }
        return res.status(200).json({message: "Successfully updated user data"})
    }catch (error){
        res.status(400).json({message: "An error Occurred while updating data"})
    }
})

router.post("/new", async(req, res) => {
    try {
        const newOrder = req.body
        await Order.create(newProduct)
        res.status(201).json({message: "new Product data has created"})
    }catch (error) {
        res.status(404).json({message: "An error occurred while adding new Product"})
    }
})

//last line
module.exports = router