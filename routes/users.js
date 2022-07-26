const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    console.log("Here")
    res.render("user", { text: "trt" })

})

router.post("/", (req, res) => {
    console.log("Here")
    res.send("Create User")

})

router
    .route("/:id")
    .get((req, res) => {
        res.send(`User Get ${req.params.id}`)
    })
    .put( (req, res) => {
        res.send(`User Update ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`User Delete ${req.params.id}`)
    })
 

// router.get("/:id", (req, res) => {
//     res.send(`User Get ${req.params.id}`)

// })

// router.put("/:id", (req, res) => {
//     res.send(`User Get ${req.params.id}`)

// })

// router.delete("/:id", (req, res) => {
//     res.send(`User Get ${req.params.id}`)

// })

module.exports = router