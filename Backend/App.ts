import express from "express";
import Routes from "./src/routes/Routes"
import cors from "cors";

const app = express();
app.use(cors()); 
app.use(express.json());
app.use("/api", Routes);

export default app;
