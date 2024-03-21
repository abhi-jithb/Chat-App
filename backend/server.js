import { express } from "express";
import dotenv from "dotenv";
const app = express();

dotenv.config();
const PORT = process.env.PORT || 3004;
app.get('/', (req, res) => {
    //root route 
    res.send("Heads up, look straight");
});
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));