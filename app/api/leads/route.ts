import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, phone, message } = body;

    if (!name || !email || !company) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const lead = {
      id: Date.now(),
      name,
      email,
      company,
      phone: phone || "",
      message: message || "",
      createdAt: new Date().toISOString(),
    };

    // Store in a JSON file (in production, use a database)
    const dataDir = path.join(process.cwd(), "data");
    const filePath = path.join(dataDir, "leads.json");

    let leads = [];
    try {
      await fs.mkdir(dataDir, { recursive: true });
      const existing = await fs.readFile(filePath, "utf-8");
      leads = JSON.parse(existing);
    } catch {
      leads = [];
    }

    leads.push(lead);
    await fs.writeFile(filePath, JSON.stringify(leads, null, 2));

    return NextResponse.json({ success: true, lead }, { status: 201 });
  } catch (err) {
    console.error("Lead capture error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "data", "leads.json");
    const existing = await fs.readFile(filePath, "utf-8");
    const leads = JSON.parse(existing);
    return NextResponse.json({ leads });
  } catch {
    return NextResponse.json({ leads: [] });
  }
}
