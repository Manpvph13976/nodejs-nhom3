import express from "express";
import { list, read } from "../controllers/product";

const router = express.Router();

router.get("/products", list);
router.get("/product/:id", read);

export default router;
