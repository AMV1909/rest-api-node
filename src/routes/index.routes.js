import { Router } from "express";
import { helloWorld } from "../controllers/index.controllers.js";

const router = Router();

router.get("/", helloWorld);

export { router as index };
