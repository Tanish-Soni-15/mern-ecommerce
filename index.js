import express from "express";
import mongoose from "mongoose";
import { router } from "./routes/Product.js";
import { Categoryrouter } from "./routes/Category.js";
import cors from 'cors'
import { userRouter } from "./routes/User.js";
import { authRouter } from "./routes/auth.js";
import { cartRouter } from "./routes/Cart.js";
import { orderRouter } from "./routes/Order.js";
import dotenv from 'dotenv';
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


dotenv.config();
const server = express();

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.DATABASE_URL);
  console.log("Database connected");

}
server.use(express.static(path.join(__dirname, "build")));
server.use(cors())
server.use(express.json());

server.use('/products', router);
server.use('/category', Categoryrouter);
server.use('/users', userRouter)
server.use('/auth',authRouter)
server.use('/cart',cartRouter)
server.use('/orders',orderRouter)

server.get('/', (req, res) => {
  res.json({ succes: "done" });
})
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
server.listen(8080, () => {
  console.log("server started");
  console.log("http://localhost:8080/");
})
