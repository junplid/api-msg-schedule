import { GetStateSessionWhatsappRepository_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";

export class GetStateSessionWhatsappImplementation
  extends PrismaCore
  implements GetStateSessionWhatsappRepository_I {}
