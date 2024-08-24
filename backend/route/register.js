const express = require("express")
const app  = express()
const router = express.Router()

const {home,register} = require("../controllers/regcontrol")

router.route("/register").post(register)
router.route("/").get(home)

// What we can do is we can copy the code from the get and use it as a controller , which is the main function of a router


module.exports = router