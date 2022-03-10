import { Router } from "express";
import { checkAuth } from "../middleware/checkAuth";
const router = Router();

//middleware

//get products all
router.get("/products", checkAuth, (req, res) => {
  const products = [
    { id: 1, name: "Products 1" },
    { id: 2, name: "Products 2" },
    { id: 3, name: "Products 3" },
  ];
  res.json(products);
});

//get products id
router.get("/products/:uid", checkAuth, (req, res) => {
  console.log(req.params);
  console.log(req.params.uid);
  const products = [
    { id: 1, name: "Products 1" },
    { id: 2, name: "Products 2" },
    { id: 3, name: "Products 3" },
  ];
  products.map((val) => {
    if (val.id === +req.params.uid) {
      res.json(val);
    }
  });
});

//Post Product
router.post("/products", checkAuth, (req, res) => {
  const dataPost = req.body; // lấy dữ liệu gửi lên từ client
  const products = [
    { id: 1, name: "Products 1" },
    { id: 2, name: "Products 2" },
    { id: 3, name: "Products 3" },
  ];
  products.push(dataPost);
  res.json(products);
});

//delete
router.delete("/products/:id", checkAuth, (req, res) => {
  const products = [
    { id: 1, name: "Products 1" },
    { id: 2, name: "Products 2" },
    { id: 3, name: "Products 3" },
  ];
  res.json(products.filter((item) => item.id !== +req.params.id));
});

export default router;
