const dotenv = require('dotenv');
const AdminModel = require('../Models/UserModel')
const jwt = require('jsonwebtoken');
// const ProductModel = require('../Models/ProductModels')
const authUser = async (req, res) => {
    // console.log("sss", req.body);
    try {
        const { email, password } = req.body
        console.log("req.body", req.body);
        // const data = await userCollection.findOne({ _id: req.body.id });
        const user = await AdminModel.findOne({ email})
        console.log("user", user);
        if(user.email == email && user.password == password){
            console.log("yes", process.env.JWT_SECRET_KEY);
            const token = jwt.sign({email: user?.email}, "process.env.JWT_SECRET_KEY");
            console.log("yes==", token);
            res.status(200).send({msg:"Login Successfully", token: token});
        }else{
            res.status(400).send({msg:"Enter Correct Id and Password"});
        }

    } catch (err) {
        res.status(400).send(err);
    }

}


module.exports = { authUser }