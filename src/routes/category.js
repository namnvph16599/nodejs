import { Router } from "express";
import { getAllWithProducts, post, put, remove } from "../controller/category";
import { checkAuth } from "../middleware/checkAuth";
const router = Router();

router.post("/category", checkAuth, post);
router.delete("/category:id", checkAuth, remove);
router.put("/category:id", checkAuth, put);
router.post("/category", checkAuth, post);

router.get("/category/:id", checkAuth, getAllWithProducts);
export default router;
