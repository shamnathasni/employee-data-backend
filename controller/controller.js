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

const getEmployers = async(req,res) => {
    console.log(77);
    try {
        console.log(77);
        const employers = await Employee.find({})
        console.log(employers,"emplores");
        res.json({status:true,employers})
    } catch (error) {
        console.log(error); 
    }
}

const getSearch = async(req,res)=>{
    try {
        const { searchData } = req.query
        console.log(searchData,1);
        console.log(req.query,2);
        const result = await Employee.find({name:{$regex:new RegExp('^' + searchData, 'i') }})
        console.log(result,3);
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