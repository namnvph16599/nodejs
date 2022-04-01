import { Router } from "express";
import { get, getAll, post, put, remove, search } from "../controller/products";
import { isAdmin, userById } from "../controller/user";
import { checkAuth, isAuth, requireSignin } from "../middleware/checkAuth";
const router = Router();

//get products all
router.get("/products", checkAuth, getAll);

//get products id
router.get("/products/:id", checkAuth, get);

router.post("/search/:q", checkAuth, search);

//Post Product
router.post(
  "/products/:userId",
  userById,
  requireSignin,
  isAuth,
  isAdmin,
  post
);

//delete
router.delete("/products/:id", checkAuth, remove);

//put products
router.put("/products/:id", checkAuth, put);
router.param("userId", userById);

export default router;
