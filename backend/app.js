import express from "express";
import colors from "colors";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import productRoute from "./routes/productRoute.js";
import cookieParser from "cookie-parser";
import { errorHandler, notFound } from "./middlewares/error.js";
import connectCloudinary from "./config/cloudinary.js";
import { userProtect, adminProtect } from "./middlewares/protect.js";

// App Config
const app = express();
const port = process.env.PORT;
connectDB();
connectCloudinary();

app.use(cors({ origin: "http://localhost:5174", credentials: true }));

// Body Parser middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Server Routes
app.use("/api/auth", authRoute);
app.use("/api/product", productRoute);

// error middleware
app.use(notFound);
app.use(errorHandler);

// Start the server
app.listen(port, () => console.log("App is running"));
