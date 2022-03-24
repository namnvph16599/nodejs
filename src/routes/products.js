import { Router } from "express";
import { get, getAll, post, put, remove } from "../controller/products";
import { checkAuth } from "../middleware/checkAuth";
const router = Router();


//get products all
router.get("/products", checkAuth, getAll);

//get products id
router.get("/product/:id", checkAuth, get);

//Post Product
router.post("/product", checkAuth, post);

//delete
router.delete("/product/:id", checkAuth, remove);

//put products
router.put("/product/:id", checkAuth, put);

export default router;
