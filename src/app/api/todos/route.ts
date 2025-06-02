import { getTodos } from "@/queries";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const todos = await getTodos();
    return NextResponse.json(todos);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "An error occurred while fetching todos" },
      { status: 500 }
    );
  }
}
