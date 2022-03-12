import { Router } from "express";
import { get, getAll, post, put, remove } from "../controller/products";
import { checkAuth } from "../middleware/checkAuth";
const router = Router();


//get products all
router.get("/products", checkAuth, getAll);

//get products id
router.get("/products/:id", checkAuth, get);

//Post Product
router.post("/products", checkAuth, post);

//delete
router.delete("/products/:id", checkAuth, remove);

//put products
router.put("/products/:id", checkAuth, put);

export default router;
