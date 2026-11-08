const express = require('express')
const router = express.Router()

const { Product } = require('../models')

//get request = list of Product
router.get("/", async(req, res) => {
    try {
        const ProductList = await Product.findAll({
            attributes:["name", "price"]
        })
        res.status(200).json(ProductList)
    }catch (error) {
        console.error(error)

        res.status(404).json({message: "An Error kay buang man kaw!"});

    }
});

//get Product Details using Product id
router.get("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const product = await Product.findAOne({
            attributes:["name", "price"],
            where: {id: id},
        });
        console.log(Product)
        res.status(200).json(Product);
    }catch (error) {
        res.status(400).json({
            message: "Database error while fetching Product Data!", 
        });
    }
});

//update
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const {name, price} = req.body

    try {
        const updatedProduct = await Product.update(
            {name: name,
             price: price
            },
            {
                where:{id:id}
            }
        )
        if(updatedProduct [0] === 0){
            return res.status(404).json({message: "user data not found!"})
    }
        return res.status(200).json({message: "Successfully updated user data"})
    }catch (error){
        res.status(400).json({message: "An error Occurred while updating data"})
    }
})

router.post("/new", async(req, res) => {
    try {
        const newProduct = req.body
        await Product.create(newProduct)
        res.status(201).json({message: "new Product data has created"})
    }catch (error) {
        res.status(404).json({message: "An error occurred while adding new Product"})
    }
})

//last line
module.exports = router