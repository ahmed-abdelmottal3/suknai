import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { name, company, phone, email, partnershipType, description } = body;
    
    if (!name || !company || !phone || !email || !description) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    
    const submission = {
      id: Date.now().toString(),
      type: "partnership",
      name,
      company,
      phone,
      email,
      partnershipType: partnershipType || null,
      description,
      createdAt: new Date().toISOString(),
    };
    
    console.log("[Partnerships] New submission:", submission);
    
    return NextResponse.json({ 
      success: true, 
      message: "Submission received",
      id: submission.id 
    });
  } catch (error) {
    console.error("[Partnerships] Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
