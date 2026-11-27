const express = require("express");
const updateuser = require("../controllers/updateuser");
const getuser = require("../controllers/getuser");

const router = express.Router();
const { createuser } = require("../controllers/usercontroller");
const deleteuser = require("../controllers/deleteuser");

router.get("/test", (req,res) => {
    res.send("user route is working")
});

// router.post("/check",(req,res) => {
//     res.send("user post is working")
// });
router.post("/users", createuser);
router.put("/users/:id",updateuser);
router.get("/users",getuser);
router.delete("/users/:id",deleteuser);


module.exports = router;