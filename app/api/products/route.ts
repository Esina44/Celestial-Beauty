// app/api/products/route.ts
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma"; // adjust path to your prisma client

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const products = await prisma.product.findMany({
      orderBy: { created_at: "desc" },
    });
    console.log(products);
    return NextResponse.json(products);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
