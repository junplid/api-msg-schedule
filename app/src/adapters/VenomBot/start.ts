import { create, Whatsapp } from "venom-bot";

export const startVenomBot = async (): Promise<Whatsapp> => {
  const client = await create({
    session: "Junplid_confirm",
  })
    .then(async (client) => {
      try {
        await client
          .sendText("5571986751101@c.us", "A plataforma iniciou!")
          .then()
          .catch((erro) => {
            console.error("Error when sending: ", erro); //return object error
          });
        return client;
      } catch (error) {
        console.log(error);
        throw new Error("Error");
      }
    })
    .catch(() => {
      throw new Error("Error");
    });

  return client;
};
