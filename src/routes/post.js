import { Router } from "express";
import { getAll, get, post, remove, put } from "../controller/post";
import { checkAuth } from "../middleware/checkAuth";

const router = Router();

router.get("/post", checkAuth, getAll);

router.get("/post/:id", checkAuth, get);

router.post("/post", checkAuth, post);

router.delete("/post/:id", checkAuth, remove);

router.put("/post/:id", checkAuth, put);

export default router;
