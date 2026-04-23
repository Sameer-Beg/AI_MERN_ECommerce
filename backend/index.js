import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/DataBase.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
dotenv.config();
import cors from "cors"
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
const app = express();

//middleware
app.use(express.json())
app.use(cookieParser())

// allowing the frontend to access the backend
app.use(cors({
    origin: ["https://ai-mern-ecommerce-frontend.onrender.com" , "http://localhost:5174"],
    credentials: true
}))
app.use("/api/auth" , authRoutes)
app.use("/api/user" , userRoutes)
app.use("/api/product" , productRoutes)

app.use("/api/cart",cartRoutes)
app.use("/api/order",orderRoutes)
// app.get("/" , (req , res)=>{
//     res.send("DAMM")
// })

const PORT = process.env.PORT || 3000
connectDb()
app.listen(PORT , ()=>{
    console.log(`server is ru ning on the port ${PORT}`)
})
