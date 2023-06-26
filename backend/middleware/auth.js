const jwt = require('jsonwebtoken');

const IsAuth = (req, res, next) => {
    let token = req.headers?.authorization;
    token = token.split(' ')[1]
    console.log("req.header", token);
    // const token = req.authorization;
    const check = jwt.verify(token, "process.env.JWT_SECRET_KEY");
    console.log("Sada", check);
    if(check){
        next()
    }else{
        return
    }

}



module.exports = {
    IsAuth
}