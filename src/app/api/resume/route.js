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
