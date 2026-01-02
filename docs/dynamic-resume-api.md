# Dynamic Resume Generation API

This API allows Claude (or any client) to generate tailored resumes dynamically based on job descriptions.

## Setup

### Environment Variables

Add to your `.env.local` (development) and Vercel dashboard (production):

```bash
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_xxxxxxxxxx
```

To get your token:
1. Go to Vercel Dashboard → Storage → Blob
2. Create a new Blob store (if you haven't)
3. Copy the `BLOB_READ_WRITE_TOKEN`

## Workflow

1. **You (Claude) analyze the job description**
   - Extract key requirements, skills, experience levels
   - Identify gaps and fits with candidate's background
   - Generate tailored resume data and cover letter

2. **Call the API with tailored data**
   - POST the tailored resume data + company name
   - API generates PDF and uploads to Vercel Blob
   - Receive back: PDF URL + cover letter + analysis

3. **Share results with user**
   - Provide PDF link (served from Vercel's CDN)
   - Include cover letter text
   - Summarize the fit analysis

## API Endpoint

### POST `/api/generate-tailored-resume`

Generates a tailored resume PDF and returns the download link.

**Request Body:**

```json
{
  "companyName": "Acme Corporation",
  "resumeData": {
    "name": "Zachary Guerrero",
    "title": "Senior Product Designer",
    "location": "Riverside, California",
    "phone": "(702) 469-5962",
    "phoneHref": "tel:+17024695962",
    "email": "zack@zkg.io",
    "website": "zacharyguerrero.com",
    "websiteHref": "https://zacharyguerrero.com",
    "summary": "Tailored summary emphasizing relevant experience...",
    "skills": ["Skill 1", "Skill 2", "Skill 3"],
    "experience": [
      {
        "company": "Company Name",
        "location": "City, State",
        "date": "MM/YYYY - Present",
        "title": "Job Title",
        "bullets": [
          "Achievement or responsibility 1",
          "Achievement or responsibility 2"
        ]
      }
    ],
    "education": {
      "degree": "Degree Name",
      "school": "School Name",
      "location": "City, State"
    }
  },
  "coverLetter": "Optional: Generated cover letter text",
  "analysis": "Optional: Summary of fit/gap analysis"
}
```

**Required Fields in `resumeData`:**
- `name`, `title`, `location`, `phone`, `phoneHref`, `email`, `website`, `websiteHref`
- `summary` (string)
- `skills` (array of strings, must not be empty)
- `experience` (array of objects, must not be empty)
  - Each experience: `company`, `date`, `title`, `bullets` (array)
- `education` (object with `degree`, `school`, `location`)

**Response (Success - 200):**

```json
{
  "success": true,
  "resumeUrl": "https://xxxxxxxxx.public.blob.vercel-storage.com/resumes/acme_corporation-2026-01-02.pdf",
  "filename": "resumes/acme_corporation-2026-01-02.pdf",
  "coverLetter": "Generated cover letter text",
  "analysis": "Fit/gap analysis summary",
  "generatedAt": "2026-01-02T09:30:00.000Z"
}
```

**Response (Error - 400/500):**

```json
{
  "success": false,
  "error": "Error message describing what went wrong"
}
```

## Storage Details

- **Platform**: Vercel Blob Storage (S3-backed)
- **File naming**: `resumes/{company_slug}-{YYYY-MM-DD}.pdf`
- **Access**: Public URLs served via Vercel's global CDN
- **Same company + date**: Overwrites previous file
- **Security**: Company names are sanitized to prevent path traversal

## Usage Example for Claude

When a user provides a job description:

1. **Analyze the JD:**
   ```
   - Company: Acme Corporation
   - Role: Senior Product Designer
   - Key requirements: design systems, user research, stakeholder management
   - Nice-to-haves: insurance/financial services experience
   
   Fit Analysis:
   - ✓ Strong match: 10+ years design experience, enterprise SaaS background
   - ✓ Has design systems experience (Pacific Life, Aeries)
   - ✓ Proven user research skills
   - △ Gap: No explicit insurance industry experience (but Pacific Life is insurance!)
   - △ Gap: Less emphasis on design systems leadership
   ```

2. **Tailor the resume:**
   - Reorder experience to highlight Pacific Life prominently
   - Adjust summary to emphasize insurance/financial services
   - Highlight "design system components" achievements
   - Reorder skills to match JD priorities

3. **Generate cover letter:**
   ```
   Focus on:
   - Why interested in this specific role
   - How Pacific Life experience translates
   - Specific achievements that match requirements
   - Cultural fit signals from JD
   ```

4. **Call the API:**
   ```javascript
   POST /api/generate-tailored-resume
   {
     "companyName": "Acme Corporation",
     "resumeData": { /* tailored data */ },
     "coverLetter": "Dear Hiring Manager...",
     "analysis": "Strong fit based on..."
   }
   ```

5. **Share with user:**
   ```
   ✅ Resume generated successfully!
   
   📄 Download: https://xxxxxxxxx.public.blob.vercel-storage.com/resumes/acme_corporation-2026-01-02.pdf
   
   📝 Cover Letter:
   [Your tailored cover letter]
   
   💡 Analysis:
   [Fit/gap summary]
   ```

## Cost Considerations

Vercel Blob charges for:
- **Storage**: Per GB-month
- **Bandwidth**: Per GB downloaded
- **Operations**: PUT/GET/LIST operations

For typical resume use (100-200KB PDFs):
- 100 resumes ≈ 20 MB storage (negligible cost)
- Downloads are cached on CDN (reduces bandwidth)
- Should cost pennies per month for personal use

## Error Handling

The API validates:
- Required fields presence
- Array fields are non-empty
- Experience entries have required structure
- Education object has required fields

Common errors:
- `400`: Missing or invalid data structure
- `500`: PDF generation or blob storage error
