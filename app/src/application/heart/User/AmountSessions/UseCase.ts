import { AmountSessionsWhatsAppRepository_I } from "./Repository";
import { AmountSessionsWhatsAppDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";
import { storeSessions } from "../../../../sessionsStore";

export class AmountSessionsWhatsAppUseCase {
  constructor(
    private amountSessionsWhatsApp: AmountSessionsWhatsAppRepository_I
  ) {}

  async run(dto: AmountSessionsWhatsAppDTO_I): Promise<RunUseCase_I> {
    const data = Object.entries(storeSessions).length;

    return { message: "OK", data };
  }
}
