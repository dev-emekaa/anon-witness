import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";

const prisma = new PrismaClient();

// Updated type definition for route handlers
export async function GET(
  request: NextRequest,
  { params }: { params: { reportId: string } }
) {
  try {
    const report = await prisma.report.findUnique({
      where: {
        reportId: params.reportId,
      },
    });

    if (!report) {
      return NextResponse.json({ error: "Report not found" }, { status: 404 });
    }

    return NextResponse.json(report);
  } catch (error) {
    console.error("Error fetching report details:", error);
    return NextResponse.json(
      { error: "Failed to fetch report details" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { reportId: string } }
) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const { status } = await request.json();
    
    // First find the report to get its primary key id
    const reportToUpdate = await prisma.report.findUnique({
      where: { reportId: params.reportId }
    });
    
    if (!reportToUpdate) {
      return NextResponse.json({ error: "Report not found" }, { status: 404 });
    }
    
    // Then update by primary key
    const report = await prisma.report.update({
      where: { id: reportToUpdate.id },
      data: { status },
    });
    
    return NextResponse.json(report);
  } catch (error) {
    return NextResponse.json(
      { error: "Error updating report" },
      { status: 500 }
    );
  }
}