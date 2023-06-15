import { CreateUserRepository_I } from "./Repository";
import { CreateUserDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";
import { newUser } from "../../../../entities/User";
import { NodeMailer } from "../../../../adapters/NodeMailer";
import { generatePassword } from "../../../../common/utils/crypto-password";

export class CreateUserUseCase {
  constructor(private createUser: CreateUserRepository_I) {}

  async run(dto: CreateUserDTO_I): Promise<RunUseCase_I> {
    const pass = await generatePassword(dto.password);
    const user = newUser({ ...dto, type: "user", password: pass });

    const sendCode = await NodeMailer(
      {
        host: process.env.HOST_EMAIL,
        port: Number(process.env.PORT_EMAIL),
        auth: {
          user: process.env.USERNAME_EMAIL,
          pass: process.env.PASSWORD_EMAIL,
        },
      },
      {
        from: `ggrian.dev@gmail.com`,
        to: user.email,
        subject: "Código de confirmação",
        text: `Código de confirmação: Sua conta foi criada no MsgSchedule. Aqui está o seu código de confimação: ${user.code}`,
        html: `<!DOCTYPE html><html lang="en-US"> <head> <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/> <title>Confirmação de conta</title> <meta name="description" content="Confirmação de conta."/> <style type="text/css"> a:hover{text-decoration: underline !important;}</style> </head> <body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8" leftmargin="0" > <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8" style=" @import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif; " > <tr> <td> <table style="background-color: #f2f3f8; max-width: 670px; margin: 0 auto" width="100%" border="0" align="center" cellpadding="0" cellspacing="0" > <tr> <td style="height: 80px">&nbsp;</td></tr><tr> <td style="height: 20px">&nbsp;</td></tr><tr> <td> <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" style=" max-width: 670px; background: #fff; border-radius: 3px; text-align: center; -webkit-box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06); -moz-box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06); box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06); " > <tr> <td style="height: 40px">&nbsp;</td></tr><tr> <td style="padding: 0 35px"> <h1 style=" color: #1e1e2d; font-weight: 500; margin: 0; font-size: 32px; font-family: 'Rubik', sans-serif; " > Código de confirmação </h1> <p style=" font-size: 15px; color: #455056; margin: 8px 0 0; line-height: 24px; " > Sua conta foi criada no MsgSchedule. <br><strong style="color: rgb(9, 83, 136);"> Abaixo está o seu código de confimação </strong> </p><span style=" display: inline-block; vertical-align: middle; margin: 15px 0 15px; width: 100px; " ></span> <p style=" color: #455056; font-size: 18px; line-height: 20px; margin: 0; font-weight: 500; " > <strong style=" display: block; font-size: 20px; letter-spacing: 1px; margin: 0 0 4px; color: rgb(9, 83, 136); " >${user.code}</strong > </p></td></tr><tr> <td style="height: 40px">&nbsp;</td></tr></table> </td></tr><tr> <td style="height: 20px">&nbsp;</td></tr><tr> <td style="text-align: center"> <p style=" font-size: 14px; color: rgba(69, 80, 86, 0.7411764705882353); line-height: 18px; margin: 0 0 0; " > &copy; <strong>https://msg-schedule-junplid.vercel.app/</strong> </p></td></tr><tr> <td style="height: 80px">&nbsp;</td></tr></table> </td></tr></table> </body></html>`, // html body
      }
    );

    if (!sendCode)
      throw new Error("Error ao tentar enviar cádigo com confirmação");

    await this.createUser.create(user);

    return {
      message: "OK",
      data: { keyUser: user.key },
    };
  }
}
