import express from "express"
import { adminLogin, googleLogin, login, logOut, registration } from "../controller/authController.js"

const authRoutes = express.Router()

// route for registration
authRoutes.post("/registration" ,  registration)
//roite for login
authRoutes.post("/login" , login)
// logout route
authRoutes.get("/logout" , logOut)
// route for google login
authRoutes.post("/googlelogin" , googleLogin)
// route for admin login
authRoutes.post("/adminlogin" , adminLogin)
export default authRoutes