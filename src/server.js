
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';



dotenv.config();

//create application
const app = express();

//middleware
app.use(express.json());
app.use(cors({
    // origin: process.env.CLIENT_URL,
    origin:"*",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));
app.use(morgan("dev"));
app.disable("x-powered-by"); // Hide server stack details


// Default route
app.get("/", (req, res) => {
  return res.status(200).json({
    status: "success",
    statusCode: 200,
    message: `Welcome to ${process.env.APP_NAME}`,
  });
});


// Default error handling
app.use((err, req, res, next) => {
  console.error(err.stack); // Log error stack in development
  res.status(err.status || 500).json({
    status: "error",
    statusCode: err.status || 500,
    message: err.message || "Internal Server Error",
  });
});

// NOT FOUND ROUTE
app.use("*", (req, res) => {
  res.status(400).json({
    status: "error",
    statusCode: 400,
    message: "Error: Invalid Route",
  });
});


//PORT
const  PORT = process.env.PORT || 3000;

export const start =  async() => {
app.listen(PORT, () => {
    console.log(`Server is running on port localhost:${PORT}`);
})
}