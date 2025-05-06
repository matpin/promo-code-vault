import express from "express";
import { deleteCode, getCodes, insertCode, updateCode } from "../controllers";

const router = express.Router();

// GET route for fetching all codes
router.get("/", getCodes);

// POST route for creating code
router.post("/create", insertCode);

// PUT route for updating code
router.put("/:id", updateCode);

// DELETE route for deleting code
router.delete("/:id", deleteCode);

export default router;
