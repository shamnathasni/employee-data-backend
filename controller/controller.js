require("dotenv").config
const Employee = require("../Model/employeeModel")

const addEmployeeData= async(req,res) => {
    try {
        const { name, email, phone, address } = req.body
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

const getEmployers = async(req,res) => {
    try {
        const employers = await Employee.find({})
        res.json({status:true,employers})
    } catch (error) {
        console.log(error); 
    }
}

const getSearch = async(req,res)=>{
    try {
        const { searchData } = req.query
        const result = await Employee.find({name:{$regex:new RegExp('^' + searchData, 'i') }})
        res.json({result,status:true})
    } catch (error) {
        console.log(error);   
    }
}

module.exports = {
    addEmployeeData,
    getEmployers,
    getSearch
}