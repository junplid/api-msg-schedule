import { RenewLicenseRepository_I } from "./Repository";
import { RenewLicenseDTO_I_Params } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";
import mercadopago from "mercadopago";
import moment from "moment";

const idsPay: string[] = [];

function calcularNovaDataVencimento(dataVencimento: string | Date) {
  const dataVencimentoObj = new Date(dataVencimento);
  const dataAtual = new Date();
  // @ts-expect-error
  const diffTime = dataVencimentoObj - dataAtual;
  const diffDias = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const diasRestantes = diffDias >= 0 ? diffDias : 0;
  const newDateVencimento = moment().add(diasRestantes + 31, "day");
  return new Date(String(newDateVencimento));
}

export class RenewLicenseUseCase {
  constructor(private renewLicense: RenewLicenseRepository_I) {}

  async run(dto: RenewLicenseDTO_I_Params, body: any): Promise<RunUseCase_I> {
    mercadopago.configure({
      access_token: process.env.ACCESS_TOKEN_MERCADO_PAGO as string,
      client_id: process.env.CLIENT_ID_MERCADO_PAGO as string,
      client_secret: process.env.CLIENT_SECRET_MERCADO_PAGO as string,
    });

    await mercadopago.payment.get(Number(body?.data?.id)).then(async (e) => {
      if (
        e.body.status === "approved" &&
        e.body.status_detail === "accredited"
      ) {
        if (idsPay.includes(dto.key)) return true;
        idsPay.push(dto.key);
        await this.renewLicense.create({
          payday: new Date(),
          price: Number(process.env.PRICE) as number,
          type: "root",
          userId: Number(dto.id),
        });
        const date_info = await this.renewLicense.getInfo(Number(dto.id));
        if (!date_info) return false;
        if (!date_info.due_date) return false;
        const newDateVencimento = calcularNovaDataVencimento(
          date_info.due_date
        );
        await this.renewLicense.update(Number(dto.id), newDateVencimento);
        return true;
      }
      return true;
    });
    return {
      message: "OK",
    };
  }
}
