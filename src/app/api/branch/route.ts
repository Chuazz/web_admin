import { prisma } from '@/database';

export async function GET(request: Request) {
    let branches = await prisma.branch.findMany();

    return new Response(JSON.stringify(branches));
}

export async function HEAD(request: Request) {}

export async function POST(request: Request) {}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}

export async function OPTIONS(request: Request) {}
