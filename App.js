const express = require("express")
const app = express()
const cors = require("cors")
require('dotenv').config()

const controller = require("./controller/controller")

require("./configuration/dbConfiguration")()

app.use(cors({
    origin:["https://employeedatafrontend.netlify.app/"]
}))
app.use(express.json())
app.use(express.urlencoded({extendsed:true}))

app.get("/employeeList",controller.getEmployers)
app.get("/serachdata",controller.getSearch)
app.post("/addData",controller.addEmployeeData)

app.listen(3000,() => {
    console.log(`Server is running on http://localhost:3000`);
})
