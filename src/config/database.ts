import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient();

const prismaConnection = async () => {
  try {
    await prisma.$connect();
    console.log("Prisma connected to MongoDB");
  } catch (error) {
    console.error("Prisma connection failed:", error);
    throw error;
  }
};

export { prisma };
export default prismaConnection;