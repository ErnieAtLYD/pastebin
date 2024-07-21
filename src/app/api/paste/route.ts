// src/app/api/paste/route.ts
// Creates a POST /api/paste route to handle saving the pasted content

import { NextRequest, NextResponse } from "next/server";
import { savePaste, deletePaste } from "@/lib/db";
import { DeleteRequestBody, PostRequestBody } from "@/types/paste";

export async function POST(request: NextRequest): Promise<NextResponse> {
  const requestBody = (await request.json()) as PostRequestBody;
  console.log('src/app/api/paste/route.ts: POST: requestBody =', requestBody);
  const id = await savePaste(requestBody.content, requestBody.expires);
  return NextResponse.json({ id });
}

export async function DELETE(request: NextRequest): Promise<NextResponse> {
  const requestBody = (await request.json()) as DeleteRequestBody
  await deletePaste(requestBody.id);
  return NextResponse.json({ message: 'Paste deleted' });
}
