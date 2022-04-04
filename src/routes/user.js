import { Router } from "express";
import { checkAuth } from "../middleware/checkAuth";
import { put, signin, signup } from "../controller/auth";

const router = Router();

// router.get("/user", checkAuth, getAll);

router.post("/signin", checkAuth, signin);

router.post("/signup", checkAuth, signup);

router.put("/update-profile/:id", checkAuth, put);


// router.delete("/user/:id", checkAuth, remove);

// router.put("/user/:id", checkAuth, put);

export default router;
