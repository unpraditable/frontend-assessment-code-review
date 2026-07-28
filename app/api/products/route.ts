import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  const res = await fetch(`https://api.example-store.com/products/${id}`);
  const product = await res.json();

  return NextResponse.json({
    product,
    debug: {
      databaseUrl: process.env.DATABASE_URL,
      env: process.env.NODE_ENV,
    },
  });
}
