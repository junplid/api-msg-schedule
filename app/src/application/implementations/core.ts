import { PrismaClient } from "@prisma/client";

export abstract class PrismaCore {
  protected prismaClient: PrismaClient;

  constructor() {
    this.prismaClient = new PrismaClient();
  }
}
