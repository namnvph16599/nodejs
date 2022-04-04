import { Router } from "express";
import { route } from "express/lib/router";
import {
  getAll,
  getAllWithProducts,
  post,
  put,
  remove,
  get,
} from "../controller/category";
import { isAdmin, userById } from "../controller/user";
import { checkAuth, isAuth, requireSignin } from "../middleware/checkAuth";
const router = Router();

router.get("/category", checkAuth, getAll);
router.delete("/category/:id", checkAuth, remove);
router.put("/category/:id", checkAuth, put);

router.post(
  "/category/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  post
);
router.param("userId", userById);
router.get("/category/:id", checkAuth, getAllWithProducts);

export default router;
