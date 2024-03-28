import express from "express";
import dotenv from "dotenv";
import authRoutes from './routes/auth_route.js'
const app = express();

dotenv.config();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("home Page is published here..");
})
app.use("/api/auth", authRoutes);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));