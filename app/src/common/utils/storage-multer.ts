import multer from "multer";
import { v4 } from "uuid";

export const storage_component = (raiz: string) => {
  return multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, raiz);
    },
    filename: function (req, file, cb) {
      cb(
        null,
        `${file.originalname.split(".")[0]}-${v4()}.${
          file.originalname.split(".")[1]
        }`
      );
    },
  });
};
