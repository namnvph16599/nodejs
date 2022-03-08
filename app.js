const http = require("http");
const express = require("express");

const app = express();
app.listen();

const check = (req, res, next) => {
  const status = false;
  if (status) {
    console.log("Auth");
    next();
  } else {
    console.log("Not Auth");
  }
};

// app.use(check);
// app.use((req, res) => {
//   console.log("Buoscw 2");
// });

app.get("/", (req, res) => {
 res.send("<h1>Home page</h1>")
});
app.get("/products", (req, res) => {
  const products = [
    { id: 1, name: "Products 1" },
    { id: 2, name: "Products 2" },
  ];
  res.json(products);
});
//middleware

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

const PORT = 3001;
app.listen(PORT, () => {
  console.log("server is running", PORT);
});
