import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { name, organization, phone, email, initiativeType, description } = body;
    
    if (!name || !phone || !email || !description) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    
    const submission = {
      id: Date.now().toString(),
      type: "csr",
      name,
      organization: organization || null,
      phone,
      email,
      initiativeType: initiativeType || null,
      description,
      createdAt: new Date().toISOString(),
    };
    
    console.log("[CSR] New submission:", submission);
    
    return NextResponse.json({ 
      success: true, 
      message: "Submission received",
      id: submission.id 
    });
  } catch (error) {
    console.error("[CSR] Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
