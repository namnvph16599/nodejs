import { Router } from "express";
import { checkAuth } from "../middleware/checkAuth";
import { getAll, signin, signup, remove, put } from "../controller/user";

const router = Router();

// router.get("/user", checkAuth, getAll);

router.get("/signin/:email&:pass", checkAuth, signin);

router.post("/signup", checkAuth, signup);

// router.delete("/user/:id", checkAuth, remove);

// router.put("/user/:id", checkAuth, put);

export default router;
