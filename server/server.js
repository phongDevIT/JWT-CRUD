const express = require("express");
const app = express();
const cors = require("cors");

const userRoute = require("./Router/UserRouter");
const authRoute = require("./Router/AuthRoute");
const connectDB = require("./Services/ConnectDBService");

require("dotenv").config();
// middleware ally cors request
app.use(cors());

// middleware lay thong tin nguoi dung
app.use(express.json());

// connect database mongoose
connectDB();
// middleware router
app.use("/auth/admin", userRoute);
app.use("/api/auth", authRoute);

app.listen(process.env.PORT, function () {
    console.log(`server is running ${process.env.PORT}`);
});
