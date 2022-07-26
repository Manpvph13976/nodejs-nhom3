import express from "express";
import { list } from "../controllers/product";

const router = express.Router();

router.get("/products", list);

export default router;
