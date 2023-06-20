import {
    Router
} from "express";
import {
    authUser
} from "../controllers/auth.controller.js";

const router = Router();

router.post('/api/login', authUser)

export default router;