import { PrismaClient } from "@/lib/generated/prisma";
import sampleData from "./sample-data";

// Alimentar o banco de dados
async function main() {
  const prisma = new PrismaClient();
  await prisma.product.deleteMany();

  await prisma.product.createMany({
    data: sampleData.products,
  });

  console.log("Database seed successfully!");
}

main();
