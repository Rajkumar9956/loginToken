const ProductModel = require('../Models/ProductModels')

const AddProduct = (req, res) => {
    console.log("sss", req.body);
    try {
        var data = new ProductModel(req.body)
        data.save().then(item => {
            res.status(200).json({ msg: "Data Added Succesfully" });
        })
    } catch (err) {
        res.status(400).send(err);
    }

}

const getProduct = async (req, res) => {
    try {
        let msg = "data found Successfully"
        const data = await ProductModel.find().sort({ createdAt: -1 });
        res.status(200).json({ msg: msg, data });
        // console.log("data",data);
    } catch (error) {
        res.status(400).json({ msg: "Failed found" });
    }

}

const updateProduct = async (req, res) => {
    console.log("req.body.id", req.body);
    const { srNo,
        customerName,
        productName,
        price,
        numberOfProduct,
        lastPaymentDate,
        mobile,
        totalPrice, paidAmount, remainingAmount
     } = req.body
    try {
        console.log("req.body",req.body);
        // , customerName, price, numberOfProduct, lastPaymentDate, mobile, totalPrice, createdDate
        var newvalues = { $set: { srNo,productName,customerName,price,numberOfProduct,lastPaymentDate,mobile,totalPrice,paidAmount,remainingAmount } };
        await ProductModel.updateOne({ _id: req.body.id }, newvalues);
        // const data = await ProductModel.find();
        res.status(200).json({ msg: "Update successfully", data });
    } catch (error) {
        res.status(400).json({ msg: "Failed found" });
    }
}
const deleteData = async (req, res) => {
    try {
        await ProductModel.deleteOne({ _id: req.body.id });
        res.status(200).json({ msg: "deleted Succesfully" })
    } catch {
        res.status(400).json({ msg: "Failed found" });
    }

}
module.exports = { AddProduct, getProduct, updateProduct, deleteData }