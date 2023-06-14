import { NextFunction, Request, Response } from "express";
import { CreateChoiceOptionDTO_I } from "./DTO";

export const CreateChoiceOptionValidation = (
  req: Request<any, any, CreateChoiceOptionDTO_I>,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  const errorArray: string[] = [];

  if (!data.data) errorArray.push("data");
  if (!data.product2_id) errorArray.push("product_id");

  if (errorArray.length > 0) {
    return res
      .status(500)
      .json({ message: "Esta faltando alguns campos", data: errorArray });
  }

  return next();
};
