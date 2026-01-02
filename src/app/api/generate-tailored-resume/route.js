import { put } from "@vercel/blob";
import { renderToBuffer } from "@react-pdf/renderer";
import { NextResponse } from "next/server";
import { ResumePDF } from "@/components/ResumePDF";

/**
 * Sanitize filename to prevent path traversal attacks
 */
function sanitizeFilename(filename) {
  return filename
    .replace(/[^a-z0-9-]/gi, "_") // Replace non-alphanumeric chars (except hyphens) with underscore
    .replace(/_+/g, "_") // Collapse multiple underscores
    .replace(/^_|_$/g, "") // Remove leading/trailing underscores
    .toLowerCase();
}

/**
 * Generate current date in YYYY-MM-DD format
 */
function getCurrentDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

/**
 * Validate resume data structure
 */
function validateResumeData(data) {
  const required = ["name", "title", "location", "phone", "phoneHref", "email", "website", "websiteHref", "summary", "skills", "experience", "education"];
  
  for (const field of required) {
    if (!data[field]) {
      throw new Error(`Missing required field: ${field}`);
    }
  }

  if (!Array.isArray(data.skills) || data.skills.length === 0) {
    throw new Error("skills must be a non-empty array");
  }

  if (!Array.isArray(data.experience) || data.experience.length === 0) {
    throw new Error("experience must be a non-empty array");
  }

  for (const exp of data.experience) {
    if (!exp.company || !exp.date || !exp.title || !Array.isArray(exp.bullets)) {
      throw new Error("Invalid experience entry structure");
    }
  }

  if (!data.education.degree || !data.education.school || !data.education.location) {
    throw new Error("Invalid education structure");
  }

  return true;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { resumeData, companyName, coverLetter, analysis } = body;

    if (!resumeData) {
      return NextResponse.json(
        { success: false, error: "resumeData is required" },
        { status: 400 }
      );
    }

    if (!companyName) {
      return NextResponse.json(
        { success: false, error: "companyName is required" },
        { status: 400 }
      );
    }

    try {
      validateResumeData(resumeData);
    } catch (validationError) {
      return NextResponse.json(
        { success: false, error: `Invalid resume data: ${validationError.message}` },
        { status: 400 }
      );
    }

    const sanitizedCompany = sanitizeFilename(companyName);
    const date = getCurrentDate();
    const filename = `resumes/${sanitizedCompany}-${date}.pdf`;

    const buffer = await renderToBuffer(<ResumePDF customData={resumeData} />);

    const blob = await put(filename, buffer, {
      access: "public",
      contentType: "application/pdf",
    });

    const resumeUrl = blob.url;

    return NextResponse.json({
      success: true,
      resumeUrl,
      filename,
      coverLetter: coverLetter || null,
      analysis: analysis || null,
      generatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error generating tailored resume:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to generate resume" },
      { status: 500 }
    );
  }
}
