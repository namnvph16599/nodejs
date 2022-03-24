import { Router } from "express";
import { checkAuth } from "../middleware/checkAuth";
import { signin, signup } from "../controller/user";

const router = Router();

// router.get("/user", checkAuth, getAll);

router.post("/signin", checkAuth, signin);

router.post("/signup", checkAuth, signup);

// router.delete("/user/:id", checkAuth, remove);

// router.put("/user/:id", checkAuth, put);

export default router;
