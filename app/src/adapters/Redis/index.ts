import { createClient } from "redis";

export const clientRedis = async () => {
  const client = createClient({
    socket: { host: "redis" },
  });
  client.on("error", (err) => console.log("Redis Client Error", err));
  await client.connect();

  return client;
};
