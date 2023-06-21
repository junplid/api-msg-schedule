import { GetStateSessionWhatsappRepository_I } from "./Repository";
import { GetStateSessionWhatsappDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";
import { storeSessions } from "../../../../sessionsStore";

export class GetStateSessionWhatsappUseCase {
  constructor(
    private getStateSessionWhatsapp: GetStateSessionWhatsappRepository_I
  ) {}

  async run(
    dto: GetStateSessionWhatsappDTO_I & { userId: number }
  ): Promise<RunUseCase_I> {
    const state = (await storeSessions[dto.userId]?.isConnected()) ?? false;

    return {
      message: "OK",
      data: state,
    };
  }
}
