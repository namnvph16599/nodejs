import { Router } from "express";
import {
  getAll,
  getAllWithProducts,
  post,
  put,
  remove,
  get,
} from "../controller/category";
import { checkAuth } from "../middleware/checkAuth";
const router = Router();

router.get("/category", checkAuth, getAll);
router.delete("/category/:id", checkAuth, remove);
router.put("/category/:id", checkAuth, put);
router.post("/category", checkAuth, post);

router.get("/category/:id", checkAuth, getAllWithProducts);

export default router;
