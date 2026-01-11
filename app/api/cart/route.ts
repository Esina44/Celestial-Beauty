import { NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma";

const prisma = new PrismaClient();

// GET CART
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = Number(searchParams.get("userId"));

  const cart = await prisma.cart.findFirst({
    where: { user_id: userId },
    include: {
      cart_items: {
        include: { product: true },
      },
    },
  });

  return NextResponse.json(cart);
}

// ADD TO CART
export async function POST(req: Request) {
  const { userId, productId } = await req.json();

  let cart = await prisma.cart.findFirst({
    where: { user_id: userId },
  });

  // Create cart if not exists
  if (!cart) {
    cart = await prisma.cart.create({
      data: { user_id: userId },
    });
  }

  const item = await prisma.cart_items.findFirst({
    where: {
      cart_id: cart.id,
      product_id: productId,
    },
  });

  if (item) {
    await prisma.cart_items.update({
      where: { id: item.id },
      data: { quantity: item.quantity + 1 },
    });
  } else {
    await prisma.cart_items.create({
      data: {
        cart_id: cart.id,
        product_id: productId,
        quantity: 1,
      },
    });
  }

  return NextResponse.json({ success: true });
}
