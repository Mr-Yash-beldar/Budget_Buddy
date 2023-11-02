const express=require("express");
const dotenv =require("dotenv");
const connectDB =require("./config/database");
const userRoutes=require("./routes/userRoutes");
const OTPRouter = require('./routes/OTP');
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const app = express(); 
dotenv.config();
connectDB();

app.use(express.json());

app.get("/", (req, res) =>
    res.send("Server is Running")
);

app.use('/api/users',userRoutes);
app.use('/api',OTPRouter);
app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server  is started on port ${PORT}..`
  )
);