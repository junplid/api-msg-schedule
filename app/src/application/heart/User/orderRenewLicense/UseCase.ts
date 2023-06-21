import { OrderRenewLicenseRepository_I } from "./Repository";
import { OrderRenewLicenseDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";
import moment from "moment";
import mercadopago from "mercadopago";
import { v4 } from "uuid";

export class OrderRenewLicenseUseCase {
  constructor(private orderRenewLicense: OrderRenewLicenseRepository_I) {}

  async run(dto: OrderRenewLicenseDTO_I): Promise<RunUseCase_I> {
    const data = await this.orderRenewLicense.getInfo(dto.userId);

    if (!data) {
      throw {
        message: "Usúario não encontrado",
        statusCode: 401,
        details: {
          body: [
            {
              message: "Usúario não encontrado",
            },
          ],
        },
        error: "Usúario não encontrado",
        name: "not found",
      };
    }

    const dateExp = moment().add(120, "minute");

    mercadopago.configure({
      access_token: process.env.ACCESS_TOKEN_MERCADO_PAGO as string,
      client_id: process.env.CLIENT_ID_MERCADO_PAGO as string,
      client_secret: process.env.CLIENT_SECRET_MERCADO_PAGO as string,
    });

    try {
      const dataqr = await mercadopago.payment
        .create({
          transaction_amount: Number(process.env.PRICE),
          payment_method_id: "pix",
          payer: { email: data.email },
          installments: 1,
          date_of_expiration: dateExp.toISOString(),
          notification_url: `${
            process.env.URL_WEBHOOK_API
          }/v1/public/create/renew-license/${dto.userId}/${v4()}`,
        })
        .then(async (data) => {
          return data.body.point_of_interaction.transaction_data.qr_code;
        })
        .catch(async (error) => {
          return false;
        });
      return {
        message: "OK",
        data: dataqr,
      };
    } catch (error) {
      console.log(error);
      throw {
        message: "Error ao gerar pagamento!",
        statusCode: 401,
        details: {
          body: [
            {
              message: "Error ao gerar pagamento!",
            },
          ],
        },
        error: "Error ao gerar pagamento!",
        name: "not found",
      };
    }
  }
}
