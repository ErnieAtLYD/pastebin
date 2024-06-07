// src/app/api/paste/route.ts
// Creates a POST /api/paste route to handle saving the pasted content

import { NextRequest, NextResponse } from 'next/server';
import { savePaste, deletePaste } from '@/lib/db';

export async function POST(request: NextRequest) {
    const { content } = await request.json();
    const id = await savePaste(content);
    return NextResponse.json({id});
}

export async function DELETE(request: NextRequest) {
    const { id } = await request.json();
    await deletePaste(id);
    return NextResponse.json({message: 'Paste deleted'});
}
