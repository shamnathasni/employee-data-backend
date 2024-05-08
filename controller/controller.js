require("dotenv").config
const Employee = require("../Model/employeeModel")

const addEmployeeData= async(req,res) => {
    try {
        const { name, email, phone, address } = req.body
        console.log(req.body,"body");
        console.log(name,"ee");
        const Data = new Employee({
            name,
            email,
            phone,
            address
        })
        const newData= await Data.save()
        res.json({newData,alert:"employee added", status:true})
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    addEmployeeData
}