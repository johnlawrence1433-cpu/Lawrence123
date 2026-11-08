const express = require('express')
const router = express.Router()

const { Riders } = require('../models')

//get request = list of Riders
router.get("/", async(req, res) => {
    try {
        const RidersList = await Riders.findAll({
            attributes:["name", "email", "contactNo", "faceId", "adress"]
        })
        res.status(200).json(RidersList)
    }catch (error) {
        res.status(404).json({message: "An Error kay buang man kaw!"});

    }
});

//get Riders Details using Riders id
router.get("/:id", async(req, res) => {
    const { id } = req.params
    try {
        const Riders = await Riders.findAll({
            atttributes:["name", "email", "contactNo", "faceId", "adress"],
            where: {id: id},
        });
        console.log(Riders)
        res.status(200).json(Riders);
    }catch (error) {
        res.status(400).json({
            message: "Database error while fetching Riders data!",
        });
    }
});

//update
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const {name, email, contactNo, faceId, address} = req.body

    try{
    const Riders = await Riders.update(
         { name: name,
           email: email,
           contactNo: contactNo,
           faceId: faceId,
           address: address 

    },
    {
        where:{id:id}
    }
    )
    if(user [0] === 0){
        return res.status(404).json({message: "user data not found!"})
    }
    return res.status(200).json({message: "Successfully updated user data"})
}catch(error){
    res.status(400).json({message: "An error occurred while updating data"})
}
   
    
})

router.post("/new", async(req, res) => {
    try {
        const newRiders = req.body
        await Riders.create(newRiders)
        res.status(201).json({message: "new Riders data created"})
    } catch (error) {
        res.status(404).json({message: "An error occured while adding new Riders."})
    }
})

//last line
module.exports = router