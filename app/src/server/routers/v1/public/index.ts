import { Router } from "express";
import { RouterCreate } from "./create";
import { RouterGet } from "./get";
import { RouterUpdate } from "./update";

const router = Router();

router.use("/get", RouterGet);
router.use("/create", RouterCreate);
router.use("/update", RouterUpdate);

export { router as RouterPublic };
