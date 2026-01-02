import { renderToBuffer } from "@react-pdf/renderer";
import { ResumePDF } from "@/components/ResumePDF";

export async function GET() {
  const buffer = await renderToBuffer(<ResumePDF />);

  return new Response(buffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Zachary-Guerrero-Resume.pdf"',
    },
  });
}

export async function POST(request) {
  try {
    const customData = await request.json();
    const buffer = await renderToBuffer(<ResumePDF data={customData} />);

    return new Response(buffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Custom-Resume.pdf"',
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Invalid resume data" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
