import React from "react";
import { renderToBuffer } from "@react-pdf/renderer";
import { writeFileSync } from "fs";
import { join } from "path";
import { ResumePDF } from "../src/components/ResumePDF.jsx";

async function generateResumePDF() {
  console.log("Generating resume PDF...");

  try {
    const buffer = await renderToBuffer(<ResumePDF />);
    const outputPath = join(process.cwd(), "public", "Zachary-Guerrero-Resume.pdf");

    writeFileSync(outputPath, buffer);

    console.log(`✓ Resume PDF generated successfully at ${outputPath}`);
  } catch (error) {
    console.error("Error generating resume PDF:", error);
    process.exit(1);
  }
}

generateResumePDF();
