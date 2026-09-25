import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "../lib/generated/prisma/client";
import sampleData from "./sample-data";

const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL });

// Alimentar o banco de dados
async function main() {
  const prisma = new PrismaClient({ adapter });
  await prisma.product.deleteMany();
  await prisma.account.deleteMany();
  await prisma.session.deleteMany();
  await prisma.verificationToken.deleteMany();
  await prisma.user.deleteMany();

  await prisma.product.createMany({
    data: sampleData.products,
  });

  await prisma.user.createMany({
    data: sampleData.users,
  });

  console.log("Database seed successfully!");
}

main();
