import { Router } from "express";
import { RouterCreate } from "./create";
import { RouterGet } from "./get";
import { RouterUpdate } from "./update";
import { RouterDelete } from "./delete";

const router = Router();

router.use("/get", RouterGet);
router.use("/create", RouterCreate);
router.use("/update", RouterUpdate);
router.use("/delete", RouterDelete);

export { router as RouterUser };
