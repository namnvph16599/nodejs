import express from "express";
import cors from "cors";
import morgan from "morgan";
//
import mongoose from "mongoose";
//router
import productsRouter from "./routes/products";
import postRouter from "./routes/post";
import userRouter from "./routes/user";
import categoryRouter from "./routes/category";

const app = express();

//middleware(ở giữa) : check xem có cho làm công việc tiếp theo hay không
app.use(cors()); //cho pheps client truy cập vào api
app.use(morgan("tiny")); //sử dụng morgan để log ra thông tin khi get
app.use(express.json()); //convert sang json

//router
app.use("/api", productsRouter);
app.use("/api", postRouter);
app.use("/api", userRouter);
app.use("/api", categoryRouter);

//connect db
mongoose
  .connect("mongodb://127.0.0.1:27017/we16309")
  .then(() => {
    console.log("Ket noi thanh cong");
  })
  .catch((err) => console.log(err));

//conection
const PORT = 3001;
app.listen(PORT, () => {
  console.log("server is running", PORT);
});

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.setHeader('Content-Type', "text/html");
//     res.write("<html><body><h1>Home page</h1></body></html>");
//     res.end();
//   } else if (req.url === "/products") {
//     const products = [
//       { id: 1, name: "Products 1" },
//       { id: 2, name: "Products 2" },
//     ];
//     res.end(JSON.stringify(products));
//   } else {
//     console.log("Not url nhes");
//   }
// });
