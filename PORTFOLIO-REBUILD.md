# Portfolio Rebuild

## Purpose

Position Zachary Guerrero primarily for Design Engineer and UX Engineer roles. Product design, frontend engineering, systems thinking, and end-to-end product ownership support that story. Historical employment titles remain unchanged.

## Positioning decisions

- **Primary public identity:** Design Engineer
- **Closest adjacent identity:** UX Engineer
- **Supporting story:** Zachary carries product work across research, interaction design, implementation, and iteration while collaborating with product, engineering, operations, and stakeholders.
- **Not the story:** a one-person replacement for a product organization, AI-first builder, or universal-stack expert.
- **Voice:** direct, technically credible, specific, calm, and free of absolute claims that cannot be defended.
- **Ren placement:** Keep Ren visible as an active supporting prototype. Its clear prototype status and explicit integration boundaries prevent it from competing with Member Splash and PXC while preserving evidence of Zachary’s independent product and systems thinking.
- **Pacific Life title:** Use **Enterprise Benefits Enrollment** as the approved public title for the anonymized Workforce Benefits case study.

## Audit scope and architecture

- **Framework:** Next.js 16 App Router, React 19, Tailwind 3, MDX case studies and blog posts, Framer Motion, `next/image`, and `@vercel/og`.
- **Content model:** `src/content/work/*.mdx` and `src/content/blog/*.mdx`, read and sorted by `src/lib/content.js`. Shared case-study rendering lives at `src/app/projects/[slug]/page.js`.
- **Key pages:** home (`src/app/page.js`), About, Process, Projects, Resume, Blog, Contact, Now, and project detail routes. `src/components/HomeContent.js` is an older, duplicated homepage implementation and is not imported by the active home route.
- **Shared UI:** Header, Footer, layout wrapper, cards, MDX component mapping, analytics helpers, and JSON-LD schemas.
- **SEO and discoverability:** root metadata in `src/app/layout.js`; JSON-LD in `src/components/JsonLd.js`; sitemap and robots routes exist. Root canonical domain is `https://zacharyguerrero.com`.
- **Resume:** rendered from `src/lib/resume-data.js` and downloadable through `/api/resume`.
- **Analytics:** Rybbit loads through one environment-configured script with a `stats.zkg.io` fallback. The privacy policy describes the analytics-service processing accurately at a high level.
- **Accessibility baseline:** skip link, semantic nav labels, `next/image`, reduced-motion handling in `FadeIn`, and security headers are present. A keyboard, focus, contrast, responsive, and Lighthouse pass is still required.

## Content map

| Surface | Current story | Rebuild direction |
| --- | --- | --- |
| Home | Senior Product Engineer, individual full-cycle delivery, Cydrion/Manta/HRN hero work | Design Engineer/UX Engineer identity, concise proof, lead directly to Member Splash then PXC; Pacific Life follows once reconstructed |
| Projects | Featured work is driven by existing MDX order, with several projects visually equal | Explicit flagship hierarchy with Member Splash and PXC first; add a confidential Pacific Life case study only after facts are confirmed |
| Member Splash | Broad 2025 case study with check-in, credentials, dev environment, and security | Split into defensible mini-stories or one focused case study, beginning with Check-In |
| PXC | Strong personal infrastructure-UX story with real decisions and visuals | Preserve, then deepen safety model, alternatives, validation, and architecture facts |
| About | Career arc is present but framed as a one-person full-stack/AI operator | Explain the design-to-engineering arc and cross-functional ownership without diminishing collaborators |
| Process | Seven-stage process with AI labeled throughout and anti-PM/handoff framing | Compact research-to-production framework grounded in actual examples and collaboration |
| Resume/metadata/schema | Inconsistent Senior Product Engineer, Product Designer, and Senior Product Designer labels | Align public positioning to Design Engineer / UX Engineer while preserving employment titles |
| Supporting work | Several client case studies with strong outcomes but uneven evidence | Keep concise; retain only claims that are confirmed or can be substantiated |

## Findings and prioritized backlog

## Independent review findings

### Recruiting review

- The portfolio contains credible raw material for Design Engineer and UX Engineer roles, but the public story currently fragments Zachary’s identity across Senior Product Engineer, Senior Product Designer, Product Designer, and Product Designer & Developer.
- The current homepage and project ordering do not route a recruiter to the strongest professional evidence. Cydrion, Manta, and High Rapid Networks receive disproportionate attention before Member Splash.
- Recommended hiring hierarchy: **Member Splash → PXC → anonymized Pacific Life → High Rapid Networks → Art Healing Hearts**. Manta and Cydrion should become supporting work after factual cleanup.
- The Member Splash Check-In story now has the strongest verified shape: high-pressure front-counter work, novice/understaffed staff context, omnibox lookup, guest-credit visibility, in-flow payments, platform-wide rollout, documentation, and qualitative club feedback.
- PXC is the strongest current independent design-engineering story because it already demonstrates a specific environment, a safety model, progressive disclosure, expert shortcuts, and implementation decisions.
- Language such as “no handoffs,” “no PM gatekeeper,” “any stack,” and “two weeks in two days” should be removed or rewritten. It makes cross-functional ownership sound like anti-collaboration and introduces claims the portfolio cannot substantiate.

### Claim-integrity review

- Resolved during this rebuild: Member Splash’s inaccurate “over three years” tenure, Manta’s API contradiction, PXC’s Go/SSH contradiction, Art Healing Hearts’ WordPress/Wix and six/seven-day conflict, Art Healing Hearts’ national-TV claim, and High Rapid Networks’ contradictory subscriber counts.
- Remaining verification work includes metric methods and sources for Cydrion, Art Healing Hearts, High Rapid Networks performance/mailer claims, PXC’s safety-layer behavior, and smaller supporting-project outcomes.
- Manta’s entropy characterization and Chrome Web Store rating/testimonial require a source before they can remain as quantitative or security evidence.

### Technical quality review

- **P0:** `src/components/PasswordGate.js` embeds passwords in shipped client-side JavaScript. It is not access control.
- ~~**P0:** `src/app/api/generate-tailored-resume/route.js` accepted unauthenticated caller-controlled content and created public Blob PDFs.~~ Resolved 2026-09-14: the unused route was removed. 
- **P0:** `src/app/projects/[slug]/page.js` statically generates drafts and archived projects from every content slug, even though listings hide them.
- **P1:** The archive query cannot return archived projects because `getAllWork()` filters them before `getArchivedProjects()` selects them. The sitemap omits manual routes including `/consulting`, `/projects/archive`, `/projects/ren`, and `/projects/launchbook`.
- ~~**P1:** The unconditional external analytics script conflicted with the privacy policy’s third-party-sharing language, and the optional analytics configuration could duplicate tracking.~~ Resolved: consolidated to one Rybbit script with a fallback and corrected the privacy wording.
- **P1:** Mobile navigation needs Escape handling, focus management, `aria-controls`, and deliberate click-away behavior. Reduced-motion support is also missing for widespread animation.
- **P2:** Add explicit focus-visible affordances, descriptive gallery alt text, `sizes` for fill-mode images, and an image/GIF optimization pass.
- Verification is currently blocked: dependencies are not installed, so `yarn lint` fails because Biome is unavailable.

### P0 — credibility and factual consistency

1. ~~**Member Splash tenure is inaccurate.**~~ Resolved 2026-09-14: `src/content/work/member-splash.mdx` now says “Over the last year,” consistent with a May 2025 start. **Classification:** factual inconsistency.
2. ~~**Manta contradicts itself.**~~ Resolved 2026-09-14: Zachary confirmed that passphrase generation runs locally in the extension, with no runtime API calls or network requests. Copy now reflects that architecture and removes the API-developer role. **Classification:** factual inconsistency and technical credibility.
3. **Absolute security claims recur.** “Zero attack surface,” “nothing to hack,” and “zero vulnerabilities ever” appear in Manta, Cydrion, and Art Healing Hearts. Replace only with architecture-specific, defensible language after verification. **Classification:** technical credibility.
4. **Public role labels are contradictory.** The active site uses Senior Product Engineer in metadata, schema, footer, resume, and CTAs; the OG image says Senior Product Designer; other copy says Product Designer & Developer. **Classification:** positioning and SEO.
5. **Member Splash case-study details must be evidence-checked.** Club count, Splash Cards reach/transaction volume, credentials rollout, check-in timing, developer-environment timing, staff testing, and security statements are not cited in the repo. They remain unpublished or clearly scoped until confirmed in interview. **Classification:** weak evidence.
6. **Stale draft metadata is public-risky.** The Supabase rebuild says `lastUpdated: 2024-12-16` and estimated completion Q1 2025, despite a 2025 project year. Drafts are excluded from lists but still get static project routes through `getWorkSlugs()`. **Classification:** factual inconsistency and content hierarchy.
7. ~~**At least two analytics scripts are injected.**~~ Resolved: root layout now loads one Rybbit script. **Classification:** technical credibility and privacy.
8. **Password-protected project details are not actually protected.** `src/components/PasswordGate.js` contains its passwords in client-side JavaScript. The content needs server-side protection or removal from the public build. **Classification:** security.
9. ~~**The tailored-resume API is publicly abusable.**~~ Resolved 2026-09-14: the unused endpoint was removed. **Classification:** security and privacy.
10. **Draft and archived projects can still be generated at direct routes.** `generateStaticParams` uses every MDX slug, while listings and the sitemap filter drafts and archives. Public visibility must be made intentional. **Classification:** technical credibility and content hierarchy.

### P1 — major hiring impact

1. **Homepage does not establish the target role in ten seconds.** It foregrounds self-sufficient full-cycle work and leads visually to Cydrion, Manta, and HRN rather than Member Splash/PXC. **Classification:** positioning and content hierarchy.
2. **“No handoffs,” “no PM gatekeeper,” “any stack,” and “two weeks in two days” weaken trust.** They minimize collaboration, imply absolute capability, or make an unsupported velocity claim. This language appears across home, About, Process, consulting, blog posts, JSON-LD, and CTAs. **Classification:** positioning and technical credibility.
3. **AI is overrepresented.** The Process page embeds AI claims in nearly every stage; About makes agent orchestration a primary capability. It distracts from the design-engineering judgment recruiters need to see. **Classification:** positioning.
4. **Case studies are not yet decision-led.** The generic renderer supports narrative, metrics, gallery, and before/after, but flagship case studies lack a consistent problem → evidence → exploration → decision → implementation → validation → outcome structure. **Classification:** UX storytelling and visual storytelling.
5. **Pacific Life is missing.** The resume contains safe starting points but no public case study that demonstrates enterprise UX research, accessibility, or cross-functional work. **Classification:** content hierarchy.
6. **Projects lack hierarchy.** “Featured” is a flat visual treatment, current sort order favors HRN, and the work-in-progress section competes for attention. **Classification:** content hierarchy.

### P2 — strong improvements

1. Convert relevant project visuals into annotated evidence: Check-In before/after flow, PXC safety sequence, decision tree, responsive terminal output, and selected component/code evidence.
2. Add a confidentiality-aware Pacific Life template with explicit labels for reconstructed diagrams and anonymized artifacts.
3. Make image `alt` text describe the artifact rather than repeat project names; check gallery images and all responsive `sizes` values.
4. Review title/date semantics in project metadata. Current project pages use January 1 of a project year as `publishedTime`, which may be misleading.
5. Review the now page, consulting pages, blog posts, and launchbook/ren pages so their public claims do not undercut the new recruiting story.
6. Remove or quarantine projects with placeholder assets/links or claims that cannot be verified. The draft Family Feud project contains `yourusername` GitHub placeholder links and missing local asset paths.
7. Correct publication mechanics: the archive query currently filters archived content out before selecting it, and the sitemap omits several manual routes.
8. Complete the mobile-navigation accessibility pass: Escape, focus management, `aria-controls`, deliberate click-away behavior, and reduced-motion support.

### P3 — polish

1. Tighten metadata keywords around Design Engineer, UX Engineer, interaction design, frontend engineering, design systems, and product delivery.
2. Verify the professional-service schema still matches the desired hiring-first site rather than a consulting-services site.
3. Evaluate whether Process and Blog remain top-level navigation after the flagship case studies carry more proof.

## Confirmed facts

| Fact | Source/context |
| --- | --- |
| Art Healing Hearts' replacement site had to accept donations before its Morning Blend Las Vegas television appearance. | Zachary interview, September 2026 |
| Art Healing Hearts was completed in 2024. | Zachary interview, September 2026 |
| Rhonda's Aftercare saw a substantial qualitative increase in job applications and messages after its website added working forms, letting people contact the organization directly instead of emailing. | Zachary interview, September 2026 |
| Before the Rhonda's Aftercare redesign, navigation was broken, the site was not mobile friendly, and its color choices were difficult for its primary older audience to read. | Zachary interview, September 2026 |
| Before the Rhonda's Aftercare redesign, people could use email or phone, but the existing website contact form was broken. | Zachary interview, September 2026 |
| Rhonda's Aftercare's redesigned website needed to support care inquiries and job applications equally. | Zachary interview, September 2026 |
| Zachary owned Rhonda's Aftercare's product, design, and implementation end to end. The client supplied photography because the project was remote between Grass Valley and Southern California. | Zachary interview, September 2026 |
| Rhonda's Aftercare was completed in 2024. | Zachary interview, September 2026 |
| South Corona Chiropractic verified that appointments came through the website after launch. The practice observed new-customer growth as its findability improved and continues to receive organic traffic. | Zachary interview, September 2026 |
| Zachary personally owned South Corona Chiropractic's branding, design, development, local SEO, and photography. | Zachary interview, September 2026 |
| South Corona Chiropractic was completed in 2022. | Zachary interview, September 2026 |
| South Corona Chiropractic did not include an online booking integration. Its appointment path directed people to email. | Zachary interview, September 2026 |
| The resume education record is at ITT Technical Institute (Henderson, NV); there is no California State University, San Bernardino alumni claim. The verified education data is Associates of Applied Science in Information Technology at ITT Technical Institute, Henderson, NV. | `src/lib/resume-data.js`; false `alumniOf` claim removed from `src/components/JsonLd.js` 2026-09-17 |
| Cydrion's 92% accessibility figure came from Lighthouse. | Zachary interview, September 2026 |
| Cydrion's 0.6-second load-time figure came from Lighthouse. | Zachary interview, September 2026 |
| Cydrion included Stripe billing and a signup flow connected to its service pipeline. | Zachary interview, September 2026 |
| Zachary owned Cydrion's brand, design, development, content, and custom iconography end to end. | Zachary interview, September 2026 |
| Cydrion was completed in 2024. | Zachary interview, September 2026 |
| Cydrion was a new ISP-support business with no existing brand or web presence. | Zachary interview, September 2026 |
| Cydrion was built as a fully static Next.js site with no CMS or public administrative layer. | Zachary interview, September 2026 |
| Manta's live Chrome Web Store listing shows a 5.0 rating from one rating. | Chrome Web Store listing checked September 2026 |
| Record Plant should remain a quiet historical supporting project. The business is now defunct, and Zachary does not have enough reliable detail to expand it. | Zachary interview, September 2026 |
| Zachary has been building for the web since 2008. The homepage's “10+ years designing and building” claim is substantiated. | Zachary interview, September 2026 |
| The Stripe donation flow was live and successfully tested before the Morning Blend Las Vegas appearance. | Zachary interview, September 2026 |
| The Art Healing Hearts replacement site's Stripe donation flow passed test payments before the Morning Blend Las Vegas appearance. | Zachary interview, September 2026 |
| Stripe data showed a substantial donation spike around the television appearance, followed by roughly one or two small donations per month. The organization did not continue promoting the site. | Zachary interview, September 2026 |
| Art Healing Hearts' six-day launch required building and testing the replacement, moving the URL from the old server to Vercel, forwarding old URLs, and resolving a Google spam flag. | Zachary interview, September 2026 |
| Zachary personally owned the Art Healing Hearts replacement build, URL migration and forwarding, launch testing, and Google spam-flag remediation. | Zachary interview, September 2026 |
| At launch, Google’s warning was gone from the Art Healing Hearts homepage. Some legacy malicious URLs remained indexed, but did not affect the replacement site. | Zachary interview, September 2026 |
| Zachary’s target positioning is Design Engineer, with UX Engineer adjacent. | Portfolio Improvement Project brief, 2026-09-14 |
| Member Splash employment began in May 2025. | Portfolio Improvement Project brief, 2026-09-14 |
| Historical employment titles stay accurate. | Portfolio Improvement Project brief, 2026-09-14 |
| The active portfolio domain is served by Vercel. | Public response headers checked 2026-09-14 |
| The site currently uses Next.js 16, React 19, MDX content, Tailwind, and Vercel OG generation. | Repository audit, 2026-09-14 |
| Current Member Splash resume copy includes a check-in redesign and a developer environment story. | `src/lib/resume-data.js`, repository audit |
| Manta generates passphrases locally in the Chrome extension with no runtime API calls or network requests; the privacy decision is intentional. | Zachary interview, 2026-09-14 |
| Before the Member Check-In redesign, staff could need to search by a member name or account number, record the member and accompanying family, identify guests, collect guest names, validate guest credits or purchase them, and confirm the party before completing check-in. | Zachary interview, 2026-09-14 |
| The pre-redesign Member Check-In experience was clunky, slow to search, and unintuitive for staff. Adding guests was the hardest and most time-consuming part of the workflow. | Zachary interview, 2026-09-14 |
| Staff use Member Check-In at a front counter. On busy in-season days and opening weekend, the old workflow could take minutes per party while a queue formed. | Zachary interview, 2026-09-14 |
| Member Check-In is often staffed by paid high-school students, volunteers, or first-time workers, and the counter may be understaffed. The interface therefore needed to support people who were not product experts. | Zachary interview, 2026-09-14 |
| The redesign introduced an omnibox-style account search that accepts a last name, address, or phone number and returns matching accounts, after which staff select the relevant members. | Zachary interview, 2026-09-14 |
| The redesigned guest flow keeps the next guest row ready without requiring an “add guest” click, places controls near the relevant action, shows guest credits available and used, and immediately presents a purchase path when more credits are needed. Credits can be purchased with bill-to-account or credit card from the flow. | Zachary interview, 2026-09-14 |
| Zachary owned the Member Check-In feature upgrade end to end. | Zachary interview, 2026-09-14 |
| While owning the Member Check-In upgrade, Zachary worked with customer success and support agents and had the implementation reviewed by other engineers. | Zachary interview, 2026-09-14 |
| The Member Check-In redesign began from shared operational knowledge that the existing flow took too long and could be improved; no formal research program has been confirmed. | Zachary interview, 2026-09-14 |
| The “30+ seconds to under 10 seconds” Member Check-In comparison came from internal timed workflow tests. Zachary and the team used server data to model the implications for opening-day volume; it is not confirmed as production telemetry. | Zachary interview, 2026-09-14 |
| Post-launch, clubs gave positive qualitative feedback that the redesigned Member Check-In flow was faster and easier to understand. | Zachary interview, 2026-09-14 |
| The redesigned Member Check-In flow was rolled out to all Member Splash clubs. | Zachary interview, 2026-09-14 |
| Zachary created staff and club-admin documentation for the Member Check-In rollout. | Zachary interview, 2026-09-14 |
| PXC is installed on the Proxmox node, implemented in TypeScript with React Ink, and uses both the Proxmox API and local Proxmox commands. | Zachary interview, 2026-09-14 |
| PXC is a scratch-your-own-itch project used by Zachary rather than externally benchmarked. Creating a VM through the Proxmox web UI takes him a few minutes; PXC provides a guided terminal flow usable from a phone shell emulator. | Zachary interview, 2026-09-14 |
| PXC provides three destructive-action safeguards: visual confirmation of the target, type-to-confirm with the VM ID, and a cancellable countdown. PXC is currently used by Zachary, not validated with external users. | Zachary interview, 2026-09-14 |
| PXC retains flags for a faster command-driven path, but its default guided flow was intentionally modeled after the sequential simplicity of `create-next-app`, especially for mobile terminal use. | Zachary interview, 2026-09-14 |
| The guided PXC flow prevents Zachary from missing required configuration steps or having to remember every flag. | Zachary interview, 2026-09-14 |
| PXC stores previous VM configurations and can offer to reuse the prior CPU, RAM, and network configuration for a new VM. | Zachary interview, 2026-09-14 |
| PXC auto-discovers available storage pools, network bridges, and ISOs for the guided flow. | Zachary interview, 2026-09-14 |
| Splash Cards were designed to let members preload money for snack-shack purchases, especially so children and unattended youth members could make purchases without a parent present. The prepaid model was also intended to let clubs collect revenue for those purchases in advance. | Zachary interview, 2026-09-14 |
| Splash Cards support single-member and family accounts. A Member Splash account’s primary member controls card funding and can provision cards, transfer funds between them, and pause a card to stop spending. This supports one or several cards per child and prevents one child’s purchases from consuming the whole family balance. | Zachary interview, 2026-09-14 |
| Splash Cards are entirely digital, with no physical card. At a snack shack, the attendant selects the member account associated with the order. The account’s connected Splash Cards then appear as payment options without a separate card lookup. The stored value could later also be used for guest-pass purchases. | Zachary interview, 2026-09-14 |
| Zachary owned the Splash Cards feature end to end. | Zachary interview, 2026-09-14 |
| For Splash Cards, Zachary worked with the Customer Success team and posted the initial design/workflow to the community forum for feedback. Community feedback changed the initial one-card-per-person model into flexible card provisioning and added guest-pass purchases to the scope. | Zachary interview, 2026-09-14 |
| Splash Cards shipped as a capability available to every club, gated behind a per-club toggle so clubs could opt in without being required to use it. | Zachary interview, 2026-09-14 |
| Primary members load money onto Splash Cards from the Member Splash portal with a credit or debit card through the Ecrypt payment gateway. Zachary added a self-service portal path for managing cards on an account. | Zachary interview, 2026-09-14 |
| Splash Cards had to preserve money-movement correctness when ambiguous Ecrypt payment responses could otherwise credit a card without a successful payment. Its ledger and reversal model made corrections a deliberate product and engineering concern. This public summary intentionally excludes customer data, incident amounts/counts, and internal endpoint details. | Zachary interview after reviewing supporting documentation, 2026-09-14 |
| Zachary personally designed a three-part Splash Cards hardening: make ambiguous gateway responses explicit failures, validate payment state again at the money-moving boundary, and make erroneous loads recoverable through an authorized correction path with an operations trail. He also repaired a silently failing test bootstrap. The public case study must keep implementation details confidential. | Zachary interview after reviewing supporting documentation, 2026-09-14 |
| Zachary reports that the Splash Cards phantom-load issue has not recurred since the hardening changes shipped. | Zachary interview, 2026-09-14 |
| **Approved for publication:** “Identified and remediated a sensitive-data exposure in an API response by rewriting the handler so the data was no longer returned.” | Zachary interview and publication approval, 2026-09-14 |
| **Approved for publication:** In 2026, Splash Cards were available across 499 live clubs; 72 clubs had card activity (about 14.4% adoption), with 1,428 active card owners, 3,551 linked family members, about 4,979 people touching a card, and 1,701 active cards. Card-load revenue may be stated only as approximately $76,000, not as an exact figure. | Zachary-provided 2026 analysis and publication authorization, 2026-09-14 |
| Splash Cards work began April 15, 2026, and v1 shipped June 12, 2026. | Zachary interview, 2026-09-14 |
| Flexible card provisioning shipped in Splash Cards v1. Guest-pass purchases were added afterward in July 2026 in response to community feedback. | Zachary interview, 2026-09-14 |
| Guest-pass support extended the existing Check-In POS by wiring Splash Cards in as an available payment method, rather than creating a separate guest-pass payment flow. | Zachary interview, 2026-09-14 |
| Before Zachary’s development environment, Member Splash used Lando with extensive configuration and tooling layered over Docker. It was unreliable to set up, could take days of back-and-forth, and did not run on Zachary’s MacBook. The stack appears to have been designed around Windows. | Zachary interview, 2026-09-14 |
| The replacement Docker-based development stack is simpler to set up and runs on Windows, macOS, and Linux. | Zachary interview, 2026-09-14 |
| After environment configuration, the replacement Docker stack normally starts in minutes; slower cases remain under an hour. Developers add local subsite entries to their hosts file as part of setup. | Zachary interview, 2026-09-14 |
| Zachary initially built the Docker environment for his own Member Splash setup, then asked the lead developer what the team needed and incorporated local SSL support with mkcert and Traefik plus the team’s existing Make-command workflows. | Zachary interview, 2026-09-14 |
| Other developers adopted the shared Docker environment, and new developers have successfully set it up. | Zachary interview, 2026-09-14 |
| The old Art Healing Hearts site was WordPress-based. | Zachary interview, 2026-09-14 |
| Art Healing Hearts had six days from the site failure to its television feature. | Zachary interview, 2026-09-14 |
| The Art Healing Hearts television appearance was on The Morning Blend in Las Vegas, not a national TV segment. | Zachary interview, 2026-09-14 |
| The replacement Art Healing Hearts site was a static Next.js site on Vercel using Stripe for donations, with no CMS or admin panel. | Zachary interview, 2026-09-14 |
| Cydrion was a static Next.js site with no CMS or custom application backend; Stripe handled billing. | Zachary interview, 2026-09-14 |
| High Rapid Networks’ subscriber base grew from roughly 400 to between 900 and 1,200 over the year after the redesigned site launched. This sequence does not establish that the site alone caused the growth. | Zachary interview, 2026-09-14 |
| Before the High Rapid Networks redesign, the site dated to 2006 and largely offered a sign-up form. The redesign retained signup but added product information and comparisons to make offerings easier to understand, while showing the ISP’s local-community roots. | Zachary interview, 2026-09-14 |
| High Rapid Networks had three service tiers. Zachary added a pricing page with a straightforward comparison table and a sign-up button that prefills the selected plan in the form, replacing a one-column presentation with no clear way to differentiate plans. | Zachary interview, 2026-09-14 |
| Zachary owned the new High Rapid Networks site end to end, including brand, strategy, design, and implementation. | Zachary interview, 2026-09-14 |
| No direct post-launch customer feedback is confirmed for High Rapid Networks. Do not infer satisfaction or treat the absence of complaints as an outcome. | Zachary interview, 2026-09-14 |
| The High Rapid Networks site launch was paired with a direct-mail campaign sent to every household in Craig, Lay, and Maybell. This is a contributing acquisition initiative alongside the site, not a basis to attribute all subscriber growth to either one. | Zachary interview, 2026-09-14 |
| The High Rapid Networks direct mail directed people to the redesigned website’s sign-up page and to a phone path. The phone route reflected that many Craig customers preferred direct human conversation. | Zachary interview, 2026-09-14 |
| The High Rapid Networks redesign communicated local roots through installer stories and photos of work in the county, including snowmobile access for tower and network-infrastructure installation. | Zachary interview, 2026-09-14 |
| The installer stories and job-site imagery used real High Rapid Networks staff: the network engineer and installer. | Zachary interview, 2026-09-14 |
| A Pacific Life process-flow project is the initial candidate for the anonymized enterprise UX case study. | Zachary interview, 2026-09-14 |
| At Pacific Life, Zachary worked primarily in New Business and Workforce Benefits. In Workforce Benefits, he helped bring a new line of business to life through portal design, user flows, personas, user testing, and design-system work. | Zachary interview, 2026-09-14 |
| In Pacific Life New Business, Zachary built a sales dashboard for the sales team to track metrics and internal communications from the industry and Pacific Life executives. He also worked with the Salesforce team on a single-pane-of-glass effort that was unfinished when his employment ended. | Zachary interview, 2026-09-14 |
| For the Pacific Life Workforce Benefits launch, Zachary worked with PricewaterhouseCoopers (PwC), the external agency behind the delivery, to scope personas first. Those personas informed which portals were needed, their intended interactions, and which systems needed to be involved to make the experience real. | Zachary interview, 2026-09-14 |
| The confirmed Workforce Benefits persona set included an employee, employee dependent, employer, financial professional, and broker. | Zachary interview, 2026-09-14 |
| Zachary personally worked on the Workforce Benefits employee portal; other team members focused on the portals for the remaining personas. | Zachary interview, 2026-09-14 |
| An employee received enrollment materials from an employer or HR, then used the Workforce Benefits employee portal to sign in, select benefits, make changes, file claims, view information, and access cards. | Zachary interview, 2026-09-14 |
| The Workforce Benefits division was stood up in under a year with an eight-person UX team. Zachary worked with the PwC development team and a constrained design-system element set. Custom designs that the development system could not support had to be redesigned within those constraints. | Zachary interview, 2026-09-14 |
| The employee portal’s primary onboarding flow collected an employee’s information, sent it for verification, and then supported the creation of actual policies. The breadth of the employee portal, including onboarding, had to be adapted to the constrained available system. | Zachary interview, 2026-09-14 |
| The key implementation constraint was UI fidelity. Pacific Life’s clean internal UI, design tokens, and components could not be reproduced in PwC’s chosen system, despite earlier assurances that it could conform to them. | Zachary interview, 2026-09-14 |
| Zachary was the only technical member of the Workforce Benefits UX team. He supplied PwC with design tokens plus CSS and JavaScript they could use, translating between UX and development where possible. Some implementation constraints had no flexibility and required the experience to adapt. | Zachary interview, 2026-09-14 |
| The Workforce Benefits employee portal launched around month nine of the under-one-year division effort. Pacific Life stakeholders were happy with the launch. Zachary had already moved to another project when the external experience was live, so no external adoption, satisfaction, or business metric is confirmed. | Zachary interview, 2026-09-14 |
| The Workforce Benefits team met with brokers and people who had recently enrolled in insurance. In short task-based sessions of about five minutes, participants reviewed prototypes, completed tasks, and shared expectations. The team recorded sessions to observe where participants stumbled, then synthesized relevant findings to strengthen the UI and present to key stakeholders. Zachary planned and conducted sessions remotely using Zoom and Hotjar; his individual role in the subsequent team synthesis remains to be clarified. | Zachary interview, 2026-09-14 |
| Workforce Benefits testing found that participants could not find parts of the policy-information selection flow. The team relabeled and repositioned those elements to make them easier to find and select. | Zachary interview, 2026-09-14 |
| The team did not re-test the relabeled and repositioned policy-selection flow before launch because of speed constraints. Zachary would have preferred the opportunity to validate the iteration. | Zachary interview, 2026-09-14 |
| Zachary has no Pacific Life artifacts, sketches, or screens available because the work was done on Pacific Life hardware. Any future case-study visual must be an explicitly labeled, abstract reconstruction that does not recreate proprietary UI. | Zachary interview, 2026-09-14 |
| The Workforce Benefits employee portal launched in 2023. | Zachary interview, 2026-09-14 |
| LaunchBook is paused. Zachary stopped work after legal and compliance complexity outweighed the project’s revenue potential. | Zachary interview, 2026-09-14 |
| LaunchBook was a working PWA proof of concept that let local business owners add products or services, set schedules, and share a link for customers to book appointments. No business owners used it. | Zachary interview, 2026-09-14 |
| Zachary paused LaunchBook after determining that the intended payment-provider transaction-fee model was not viable given competitor pricing, legal scope, and compliance obligations. | Zachary interview, 2026-09-14 |
| Zachary personally tested a complete LaunchBook customer booking flow end to end without payment. Payment was the next step and was never built; no business owners used the proof of concept. | Zachary interview, 2026-09-14 |
| Ren is a partial React Native app that runs in Expo Go. Zachary and one additional person have used it. The project remains active but has not been worked on recently and still needs substantial implementation. | Zachary interview, 2026-09-14 |
| Ren’s goal for Zachary is to provide interactive external memory and accountability: hold the things he is carrying mentally and bring them back when needed. Its architecture and AI pieces may work independently before they are integrated into the React Native app. | Zachary interview, 2026-09-14 |
| Ren’s working backend centers on Memo, a memory system with a three-layer model and a daily classification process that stores memories in a database for durable retrieval. The AI layer can use Memo for fast access and query the database for longer-lasting facts. | Zachary interview, 2026-09-14 |
| Ren uses local PGlite storage for important local data and can sync it back to the primary database when connectivity returns. On-device AI models are in development and are not yet a completed capability. | Zachary interview, 2026-09-14 |
| Ren’s intended capture model is voice first with text when needed. Its goal is to transform unstructured brain dumps into contextual memories, tasks, and action items. A future meeting mode would process only a deliberately started recording; Ren is not designed to listen continuously, which is a core privacy principle. | Zachary interview, 2026-09-14 |
| Voice capture works in Ren’s current Expo prototype but is early and needs substantial refinement. | Zachary interview, 2026-09-14 |
| Ren’s next planned voice-capture step is a speech-to-text implementation followed by model post-processing. This pipeline is planned, not yet confirmed as integrated. | Zachary interview, 2026-09-14 |
| Ren’s current voice capture transcribes speech and adds the result to an editable text box. | Zachary interview, 2026-09-14 |
| Ren’s review flow presents what it understood for the user to edit or approve before saving. Approved results become memories, tasks, and events. The complete review, classification, and save loop works outside the Ren React Native interface, while its integration into Ren remains incomplete. | Zachary interview, 2026-09-14 |
| Ren’s complete memory loop runs primarily in code and partially through the Hermes agent, not yet through the React Native interface. Memo is actively used as a memory store across Pi, Hermes, OpenCode, Claude, and Codex. | Zachary interview, 2026-09-14 |
| Ren’s data model and storage are in place. The unresolved implementation constraint is keeping the assistant useful during a network outage without requiring every user to store an on-device model. The current direction is cloud computation by default with an optional model download and clear storage disclosure. | Zachary interview, 2026-09-14 |
| Ren is intended to be a paid app with access to cloud models and an option for people who prefer their own local model. Pricing and this delivery model are not confirmed as launched. | Zachary interview, 2026-09-14 |
| Ren’s confirmed user context is professionals managing dense work and personal responsibilities, particularly during low-focus periods. Its intended capabilities include calendar and event context, pattern recognition, and contextual support without continuous listening or added noise. Calendar and pattern capabilities are not yet confirmed as integrated. | Zachary interview, 2026-09-14 |
| Ren uses Google OAuth to access a calendar and can create, read, update, and delete appointments. | Zachary interview, 2026-09-14 |
| Ren’s current RADAR feature provides a prioritized overview of the next seven days using calendar events, tasks, and user-marked priorities. Its intended morning overview, midday capture, evening “close the tabs” moment, and low-focus mode depend on model integration and are not yet implemented. Low-focus mode is designed to surface only the three most useful next actions, with additional detail on request. | Zachary interview, 2026-09-14 |
| In early personal use by Zachary and one additional user, RADAR was useful for surfacing upcoming commitments beyond what is immediately happening, helping avoid overlooking or double-booking later events. This is qualitative feedback from two users, not broad validation. | Zachary interview, 2026-09-14 |
| Ren’s task model uses NOW for immediate work, Soon for approaching work, Waiting for work blocked by another person, and Blocked for work blocked by an external condition. Important items are typically added by telling Memo they matter. Soon covers tasks within five days; NOW applies at “today + 1.” | Zachary interview, 2026-09-14 |
| Waiting and Blocked can be updated manually. The stale-task check-in currently runs as a concept in Hermes: after three untouched days, it surfaces a task and lets the person keep it, discard it, or elevate it. Elevating a task moves it to NOW as an actionable item. The intended destination for this behavior is Ren. | Zachary interview, 2026-09-14 |
| Ren is a solo project by Zachary, informed by informal feedback from friends and family with ADHD. This is not a formal research program. | Zachary interview, 2026-09-14 |
| Friends and family have responded positively to Ren’s concept. One additional early user has used RADAR only; no specific design change from that feedback has been confirmed. | Zachary interview, 2026-09-14 |
| Ren’s default screen is Today, focused on what a person needs to function that day. A separate RADAR screen reveals more about the upcoming week. The two-screen model is an intentional progressive-disclosure decision to reduce overwhelm. | Zachary interview, 2026-09-14 |
| Today shows tasks due that day and calendar events that have not passed. Past events are intentionally omitted from the home view to reduce overwhelm, such as hiding a 10 a.m. appointment at noon. | Zachary interview, 2026-09-14 |
| Today also shows what Ren identifies as important. Due tasks are currently ordered by time added; Zachary identifies a more useful ordering method as unfinished work. The planned correction is drag-and-drop ordering so a person can set what matters in the moment. | Zachary interview, 2026-09-14 |
| Ren can send timed check-ins for upcoming events, incomplete tasks, and morning, midday, and evening routines. The prototype includes a low-focus toggle, but not the logic it controls. The intended runtime behavior is for a model to inspect a person’s context and select the three items that matter most, supporting one smallest next action. | Zachary interview, 2026-09-14 |
| Ren’s low-focus UI replaces the usual interface with an exit toggle and currently renders placeholder actions plus calendar context such as appointments and meetings. The final behavior is for a model to select three actions. Once those actions are complete, Ren is intended to give a quiet affirmation and return control rather than adding more demands. | Zachary interview, 2026-09-14 |

## Uncertain claims — do not publish as facts yet

- The original meaning of the Member Splash “over three years” statement.
- Member Splash post-launch outcomes beyond what Zachary confirms.
- Manta’s exact entropy/security characterization and source for its Chrome Web Store rating/testimonial.
- Pacific Life project, audience, artifacts, research, collaboration, constraints, and outcomes suitable for anonymized publication.
- PXC’s prior “80 seconds” comparison was removed. The published story is Zachary’s repeated self-use: a few minutes in the web UI versus a guided terminal workflow on a phone.
- High Rapid Networks growth multiplier remains approximate because the ending count is a range; do not publish a precise multiplier.
- Member Check-In wireframes and floor diagrams may exist but have not yet been located or reviewed.
- Exact measurement/source for Cydrion, Art Healing Hearts, HRN, Rhonda’s Aftercare, and South Corona metrics.
- Rhonda's Aftercare's prior “25% increase in contacts” is unverified. Remove it rather than presenting it as a measured result.
- South Corona Chiropractic Center's prior “25% increase in scheduling” is unverified. Do not substitute a “100% increase” based only on the absence of a usable prior site.
- Art Healing Hearts may have received roughly $800 in donations around the Morning Blend Las Vegas appearance. Zachary recalls this only approximately; omit the amount unless Stripe data verifies it.
- Art Healing Hearts Google remediation may have involved removing malicious URLs in Search Console. Zachary remembers this only generally; do not publish the procedural detail.
- Splash Cards: exact implementation details, incident amounts/counts, customer data, and internal endpoint details remain confidential and must not be published.
- Splash Cards: the exact 2026 card-load revenue figure remains confidential. Use only the approved rounded statement, approximately $76,000.
- Member Splash security remediation: an API response exposed password hashes. Zachary rewrote the responsible handler so the response no longer returned hashes. Treat endpoint, exposure conditions, and all incident detail as confidential; do not publish without explicit wording approval.

## Interview backlog

1. Locate and review the possible Member Check-In wireframes and process-flow artifacts before using them publicly.
2. PXC: capture rejected interaction models or validation beyond Zachary’s self-use if those become available. This is enhancement work, not a blocker.
3. Confirm or remove any remaining unsupported claims in public blog posts, the Now page, consulting surfaces, and archived-project cards.

## Implementation backlog

### P0

- [x] Resolve Member Splash tenure claim.
- [x] Resolve Manta architecture contradiction.
- [x] Replace or remove absolute security claims in the audited flagship and supporting work.
- [x] Create one consistent public positioning system across metadata, schema, header/footer, home, resume, projects, and OG images.
- [x] Verify analytics configuration and privacy disclosure.
- [x] Remove misleading client-side password gating; Ren and LaunchBook are intentionally public with clear status language.
- [x] Secure or remove the unauthenticated tailored-resume API.
- [x] Make draft/archive publication behavior intentional and correct archive/sitemap mechanics.
- [x] Remove the false California State University, San Bernardino `alumniOf` claim from Person schema (`src/components/JsonLd.js`); resume education record (ITT Technical Institute, Henderson NV) is unchanged. Resolved 2026-09-17.

### P1

- [x] Rebuild homepage hierarchy and recruiter path.
- [x] Reframe About and Process around collaboration and product-to-production ownership.
- [x] Rebuild Member Splash story from confirmed, publishable facts.
- [x] Rebuild PXC story around confirmed design decisions and self-use validation.
- [x] Reconstruct the anonymized Pacific Life case study from confirmed interview facts and an explicitly labeled abstract reconstruction.
- [x] Reorder projects and distinguish Tier 1 case studies from supporting work.
- [x] Rework the footer’s tablet layout. The footer now uses a two-column tablet grid with a full-width identity block and wrapped secondary metadata, then becomes a single-row layout at large widths.
- [x] Fix WCAG AA contrast on the dark palette (2026-09-17). Added an accessible light-teal token `zg-teal-light` (#33A3A3, 5.79:1 on `#0f1a24`, passes AA) and migrated Header active-nav text and the global `:focus-visible` outline to it. Replaced dark-background prose/label uses of `text-gray-500` (#6b7280, 3.64:1) and `text-gray-600` (#4b5563, 2.33:1) with `text-gray-400` (#9ca3af, 6.93:1). Decorative non-text (bullet separators, SVG icons) intentionally unchanged. Brand surface colors (`zg-teal`, `zg-coral`, white) untouched.
- [x] Resolve project-hierarchy ordering and Client Projects grouping (2026-09-17). Kept High Rapid Networks factual category as B2B Tech but moved it into the Projects page's Client Projects section by matching the `Local Business` tag alongside the `Local Business` category. Assigned unique `order` values: Member Splash 1, PXC 2, Enterprise Benefits Enrollment 3, High Rapid Networks 4, Cydrion 5, Art Healing Hearts 6, Manta 7, Rhonda's Aftercare 8, South Corona Chiropractic 9. Made work sorting deterministic in `src/lib/content.js` with a title secondary key. Added a related-reading link from the High Rapid Networks case study to the existing `/blog/what-a-rural-isp-taught-me` article. No historical titles or case-study claims were renamed or rewritten.

### P2

- [x] Add decision-supporting visuals and annotations to flagship case studies. Member Check-In now has an explicitly labeled abstract workflow reconstruction, and PXC has an explicitly labeled destructive-action safety model.
- [x] Improve supporting case-study evidence and scope. High Rapid Networks, Art Healing Hearts, Rhonda’s Aftercare, South Corona Chiropractic, Cydrion, Manta, Ren, and LaunchBook were rebuilt or constrained to confirmed facts.
- [x] Complete the final responsive, keyboard, contrast, image, metadata, and structured-data review. Verified browser rendering, keyboard/menu behavior, focus treatment, reduced motion, image sizing, metadata, robots, sitemap, and structured data. Removed unsubstantiated January publication dates and service-business schema. Remaining gallery-alt specificity depends on a future artifact inventory.

### P3

- [x] Perform the final four-lens hiring-manager review and address remaining credibility concerns. Tightened About and public blog language that framed collaboration as a replacement for handoffs or overstated independence.

## Next hardening scope

The honeypot portion is implemented. Shared rate limiting, Turnstile, CSP enforcement, and regression coverage remain scoped follow-up work.

### Contact-form abuse protection

1. [x] Add a visually hidden honeypot field to every contact form and reject a populated value on the server without revealing why.
2. Apply a small per-IP request limit to `POST /api/contact`. Prefer an edge-compatible, shared store such as Vercel KV or Upstash Redis rather than in-memory state, which is not reliable across serverless instances.
3. If automated spam continues, add Cloudflare Turnstile. Verify its token server-side before Mailgun is called and provide an accessible fallback message if verification cannot run.
4. Keep the existing server-side field validation, length limits, and generic failure response. Add tests for valid requests, missing fields, honeypot rejection, rate-limit rejection, and provider failure.

### Content-security policy

1. Inventory first-party and third-party origins required by fonts, Rybbit analytics, Mailgun-facing server code, images, and Vercel deployment behavior.
2. Start with a report-only CSP in production. Review violations before enforcing it.
3. Move to an enforcing policy using nonces or hashes for any inline script that remains. Do not use `unsafe-inline` as a permanent shortcut.
4. Re-check analytics, Open Graph generation, contact submission, browser navigation, and the console easter egg after enforcement.

### Focused regression coverage

1. Add a small test setup only for stable, high-value behavior: public-content filtering, case-study navigation metadata, contact validation, and form success/error states.
2. Add one browser smoke test for the recruiter path: homepage → Member Splash → PXC → Enterprise Benefits, plus keyboard navigation of the mobile menu and case-study anchors.
3. Keep visual testing manual for artifact-heavy case studies until a stable visual-regression baseline is worthwhile.

## Artifact inventory requested

These would add proof, not decorative filler. Sanitized or reconstructed artifacts are welcome where originals are confidential.

| Priority | Case study | Best artifact to provide | What it would prove |
| --- | --- | --- | --- |
| P0 | Member Check-In | Existing process flow or wireframes, especially lookup, guest entry, credits, and purchase states | The before/after interaction decision and exception handling |
| P0 | Member Check-In | Timed-test notes or a simple list of representative scenarios | What the 30+ second to under-10 second internal comparison covered |
| P0 | Enterprise Benefits | Sanitized test plan, synthesis notes, or a reconstructed finding-to-change diagram | Research rigor and the relabel/reposition decision |
| P1 | Splash Cards | A sanitized member-portal or POS flow, including family-card controls and opt-in rollout | Family-account reasoning, payment integration, and rollout judgment |
| P1 | PXC | A compact architecture or state-flow sketch showing React Ink, API/local-command boundaries, confirmation, and failures | Technical design decisions beyond the final terminal screens |
| P2 | Member Splash | A sanitized component, data-flow, or test artifact for the payment success boundary | Engineering judgment without exposing sensitive internals — **done 2026-09-16 (abstract success/correction boundary WebP)** |
| P2 | Developer environment | A sanitized setup diagram or before/after developer onboarding checklist | Developer-experience impact and team adoption — **done 2026-09-16 (before/after OmniSplash onboarding WebP)** |
| P3 | High Rapid / local work | Existing before/after page captures, campaign assets, or real photography selections | Information architecture and brand/storytelling decisions — **IA before/after addressed 2026-09-16** |

## Change log

- **2026-09-14:** Created this audit and rebuild source of truth. No portfolio copy or UI changed in this pass.
- **2026-09-14:** Corrected the Member Splash case-study tenure from “over three years” to “over the last year.”
- **2026-09-14:** Corrected Manta’s architecture and role metadata after confirming local passphrase generation with no runtime network requests.
- **2026-09-14:** Captured the confirmed pre-redesign Member Check-In workflow for case-study reconstruction.
- **2026-09-14:** Captured the confirmed primary friction in the pre-redesign Member Check-In flow: slow lookup and especially difficult guest entry.
- **2026-09-14:** Captured the confirmed counter-service and peak-queue constraints for Member Check-In.
- **2026-09-14:** Captured the confirmed staff context for Member Check-In: often-understaffed counters staffed by high-school employees, volunteers, and first-time workers.
- **2026-09-14:** Captured the confirmed omnibox search decision in the Member Check-In redesign.
- **2026-09-14:** Captured the confirmed Member Check-In guest-flow decisions: ready-next row, visible credit accounting, and in-flow credit purchase options.
- **2026-09-14:** Confirmed Zachary’s end-to-end ownership of the Member Check-In feature upgrade.
- **2026-09-14:** Confirmed Member Check-In collaboration with customer success, support, and engineering reviewers.
- **2026-09-14:** Clarified the evidence basis for Member Check-In: shared operational knowledge, not yet-confirmed formal research.
- **2026-09-14:** Qualified the Member Check-In timing claim as an internal workflow test and peak-load model, not production telemetry.
- **2026-09-14:** Captured qualitative post-launch club feedback for Member Check-In.
- **2026-09-14:** Confirmed the Member Check-In redesign was rolled out to all Member Splash clubs.
- **2026-09-14:** Confirmed staff and club-admin documentation as part of the Member Check-In rollout.
- **2026-09-14:** Corrected the confirmed PXC stack to TypeScript, React Ink, and the Proxmox API; direct command execution details remain to be clarified.
- **2026-09-14:** Corrected PXC architecture copy: installed node-local, TypeScript + React Ink, and using both the Proxmox API and local Proxmox commands. Removed the incorrect Go/SSH description from the blog.
- **2026-09-14:** Corrected the Art Healing Hearts blog’s old-site platform from Wix to WordPress; timing and TV-feature details remain unconfirmed.
- **2026-09-14:** Corrected the Art Healing Hearts blog deadline from seven days to six days and retitled it accordingly.
- **2026-09-14:** Corrected Art Healing Hearts television-feature copy to The Morning Blend in Las Vegas and removed the inaccurate national-TV language.
- **2026-09-14:** Reframed Art Healing Hearts security copy around the confirmed static Next.js, Stripe, no-CMS/no-admin architecture and removed absolute attack-surface and vulnerability claims.
- **2026-09-14:** Reframed Cydrion architecture and security copy around the confirmed static Next.js and Stripe setup, removing absolute attack-surface claims.
- **2026-09-14:** Marked the High Rapid Networks subscriber baseline as probable (around 400), pending an end count and time period.
- **2026-09-14:** Replaced contradictory High Rapid Networks growth multipliers and counts with the confirmed approximate 400 to 900–1,200 range; period remains unresolved.
- **2026-09-14:** Confirmed the High Rapid Networks growth period as about one year.
- **2026-09-14:** Recorded the technical audit’s security, draft-publication, archive/sitemap, and mobile-accessibility findings in the rebuild backlog.
- **2026-09-14:** Marked Member Check-In wireframes and floor diagrams as probable assets pending location and review.
- **2026-09-14:** Selected a Pacific Life process-flow project as the starting point for anonymized case-study reconstruction.
- **2026-09-14:** Paused Pacific Life interviewing. Preserve the process-flow project only as an unelaborated candidate; do not publish or infer details.
- **2026-09-14:** Added the recruiting, claim-integrity, and technical-quality review findings to this record.
- **2026-09-14:** Reframed PXC’s provisioning claim as a personal scratch-your-own-itch workflow, replacing the unsupported 80-second benchmark.
- **2026-09-14:** Corrected PXC’s safety-story origin: it comes from the risk of an irreversible infrastructure mistake, not an unconfirmed near-miss.
- **2026-09-14:** Confirmed PXC’s three destructive-action safeguards and removed external-user/download claims; PXC is currently a personal-use tool.
- **2026-09-14:** Captured PXC’s interaction rationale: preserve flags for speed, with a `create-next-app`-inspired guided flow as the default for terminal and phone use.
- **2026-09-14:** Confirmed the primary benefit of PXC’s guided flow: preventing missed steps and flag-memory burden.
- **2026-09-14:** Confirmed PXC’s prior-configuration reuse for CPU, RAM, and network settings.
- **2026-09-14:** Confirmed PXC auto-discovery of storage pools, network bridges, and ISOs.
- **2026-09-14:** Began Splash Cards reconstruction as the next Member Splash mini-case study.
- **2026-09-14:** Captured Splash Cards’ two-sided product rationale: independent youth purchases and an advance-paid revenue model for clubs.
- **2026-09-14:** Captured the confirmed Splash Cards family-control model: primary-account ownership, card provisioning, fund transfers, and pause controls.
- **2026-09-14:** Confirmed Splash Cards are entirely digital and captured the account-driven POS payment interaction and later guest-pass use.
- **2026-09-14:** Confirmed Zachary’s end-to-end ownership of Splash Cards.
- **2026-09-14:** Confirmed Splash Cards collaboration and iteration: Customer Success and community feedback expanded flexible card provisioning and guest-pass use beyond the initial scope.
- **2026-09-14:** Confirmed Splash Cards’ rollout model: capability available to every club, with an opt-in per-club toggle.
- **2026-09-14:** Confirmed Splash Cards’ self-service funding path through the Member Splash portal and Ecrypt payment gateway.
- **2026-09-14:** Recorded a sanitized, unverified Splash Cards money-movement analysis for follow-up; excluded customer-identifying and proprietary incident details.
- **2026-09-14:** Confirmed the safe high-level Splash Cards money-movement constraint after Zachary reviewed supporting documentation; confidential details remain excluded.
- **2026-09-14:** Captured Zachary’s confirmed Splash Cards hardening work: explicit gateway failure handling, money-boundary validation, recoverable corrections, operations traceability, and repaired test bootstrap. Technical internals remain confidential.
- **2026-09-14:** Confirmed that the Splash Cards phantom-load issue has not recurred since the hardening changes shipped.
- **2026-09-14:** Received current Splash Cards adoption and revenue analysis. Exact figures are intentionally excluded from this repository pending publication authorization.
- **2026-09-14:** Authorized publication of 2026 Splash Cards adoption, participation, and active-card figures; revenue is approved only as approximately $76,000. Corrected the resume’s inaccurate platform-wide usage claim.
- **2026-09-14:** Confirmed Splash Cards timeline: work began April 15, 2026; v1 shipped June 12, 2026.
- **2026-09-14:** Confirmed Splash Cards iteration timeline: flexible provisioning in v1; community-requested guest-pass purchases added in July 2026.
- **2026-09-14:** Captured the guest-pass implementation decision: extend the Check-In POS with Splash Cards as a payment method.
- **2026-09-14:** Captured the legacy Lando development-environment problem and the confirmed cross-platform goal of its Docker replacement.
- **2026-09-14:** Corrected the Member Splash development-environment timing claims: normally minutes after environment configuration, under an hour for slower cases.
- **2026-09-14:** Captured the development-environment collaboration: Zachary expanded a personal setup into a team-ready stack with lead-developer input, local SSL, and existing Make-command workflows.
- **2026-09-14:** Confirmed adoption of the Docker environment by existing and new developers.
- **2026-09-14:** Recorded a confidential Member Splash API data-exposure remediation for possible supporting-story use; public wording requires explicit approval.
- **2026-09-14:** Approved public, high-level wording for the Member Splash API data-exposure remediation.
- **2026-09-14:** Installed OpenSpec, created and strictly validated the `rebuild-design-engineer-portfolio` proposal, and began approved implementation.
- **2026-09-14:** Repositioned global recruiting surfaces around Design Engineer, with UX Engineer as the adjacent role; historical employment titles remain intact.
- **2026-09-14:** Rebuilt the Member Splash case study around confirmed Check-In, Splash Cards, money-correctness, and developer-experience work. Excluded confidential implementation and incident details.
- **2026-09-14:** Reordered public projects to lead with Member Splash, then PXC, before supporting work.
- **2026-09-14:** Prevented direct publication of draft and archived MDX case studies and corrected archive/sitemap publication behavior.
- **2026-09-14:** Removed unsupported universal passphrase-strength language from Manta and updated remaining stale Member Splash metrics on the Now page.
- **2026-09-14:** `yarn lint` and the production `yarn build` both pass after targeted lint hygiene fixes. The build generated 35 static pages successfully.
- **2026-09-14:** Rebuilt the tablet footer around a responsive grid and wrapping metadata, avoiding the previous narrow, crowded intermediate-width layout.
- **2026-09-14:** Added two clearly labeled abstract decision visuals: the Member Check-In interaction model and PXC’s destructive-action safety model.
- **2026-09-14:** Completed final technical review. Removed unsubstantiated case-study publication dates, replaced the consulting-oriented structured-data profile, and removed generated sitemap modification dates that did not represent actual content changes. Production lint/build and whitespace checks pass.
- **2026-09-14:** Completed final hiring review across Design Engineering, UX Engineering, Product Design, and product-engineering lenses. Tightened residual solo-hero and anti-handoff language in About and the public design-engineering blog post.
- **2026-09-14:** Ran three independent hiring-manager persona reviews. Their shared recommendations were to surface Enterprise Benefits in the homepage hero, make flagship case studies easier to navigate, add artifact-led evidence, and plan targeted contact/CSP/test hardening.
- **2026-09-14:** Replaced High Rapid Networks with Enterprise Benefits in the homepage proof collage, added accessible in-page navigation to the three flagship case studies, tightened the Splash Cards resume bullet, and refreshed the existing browser-console easter egg.
- **2026-09-14:** Continued the recruiter-content sweep by grounding the active Toolkit and Now pages in evidence and collaboration, removing residual AI-first and absolute language, clarifying the PXC safety blog, and marking the homepage Member Splash image for eager LCP loading.
- **2026-09-14:** Replaced an older Member Splash homepage cover containing solo-hero language with the evidence-led, clearly labeled Member Check-In workflow reconstruction.
- **2026-09-14:** Added a server-enforced honeypot to all public contact forms as the first contact-form abuse-control layer. Shared rate limiting and challenge verification remain intentionally deferred until their deployment dependencies are chosen.
- **2026-09-15:** Added Zachary’s hand-drawn Member Check-In working sketch to the flagship case study, replacing the generic in-case flow diagram. The abstract SVG remains in the homepage collage as a quick visual summary.
- **2026-09-15:** Simplified the homepage below the desktop breakpoint by hiding the dense project collage. Small and tablet screens now prioritize the positioning, supporting proof, and Member Splash CTA; visual project proof remains on desktop and the Projects page.
- **2026-09-15:** Reduced homepage information density across all breakpoints. Removed the redundant capability-card and toolkit sections, removed the hero collage, shortened the positioning copy, and retained only the primary CTA, three compact proof points, and the three flagship case studies.
- **2026-09-15:** Restored the original hero copy, expertise section, toolkit, and project-grid treatment at Zachary’s direction. The header collage remains removed; flagship projects now come immediately after the hero, before the supporting expertise and toolkit sections.
- **2026-09-15:** Added Zachary's hand-drawn, abstract Enterprise Benefits artifact. It documents the research finding that policy information was hard to locate, the resulting navigation change, delivery constraints, and Zachary's role, while avoiding proprietary UI.
- **2026-09-15:** Added Zachary's PXC guided-creation working sketch. It makes the interaction rationale explicit: configuration reuse, target selection, guided setup, review, and deliberate confirmation reduce the chance of a costly infrastructure mistake.
- **2026-09-14:** Removed the misleading client-side PasswordGate from Ren and LaunchBook at Zachary’s direction. Their pages are now plainly public, and the shipped password values are gone.
- **2026-09-14:** Marked LaunchBook as paused after confirming its legal and compliance complexity outweighed the revenue potential. Removed stale “in development” and password-protected framing from its primary public surfaces.
- **2026-09-14:** Corrected LaunchBook from “mobile app” to PWA proof of concept. Confirmed no business-owner use and recorded the transaction-fee business-model decision that led to the pause.
- **2026-09-14:** Rebuilt LaunchBook as a concise, honest paused-exploration case study. Removed unsupported claims about production payments, pricing, Stripe, auth-holds, reminders, Google sync, and operational scale.
- **2026-09-14:** Rebuilt Ren as a concise prototype status page. Removed unsupported claims about AI behavior, privacy architecture, authentication, local-first operation, feature completeness, and market readiness.
- **2026-09-14:** Restored Ren’s confirmed personal goal while explicitly separating independently working architecture or AI pieces from the incomplete app integration.
- **2026-09-14:** Added Ren’s confirmed evolving architecture: Memo, three-layer memory storage, daily classification, durable database retrieval, local PGlite persistence and sync, and the unfinished on-device AI direction.
- **2026-09-14:** Added Ren’s confirmed voice-first, consent-bound capture direction and planned meeting mode. Kept the planned interaction model distinct from confirmed prototype behavior.
- **2026-09-14:** Confirmed that voice capture is working in the Expo prototype, while retaining its early and unfinished status.
- **2026-09-14:** Recorded the next planned voice pipeline, transcription followed by model post-processing, without presenting it as current functionality.
- **2026-09-14:** Clarified current Ren voice behavior: speech is transcribed into an editable text box; model post-processing remains the next planned step.
- **2026-09-14:** Recorded Ren’s intended human-review flow before durable storage, pending confirmation of its current integration status.
- **2026-09-14:** Clarified Ren’s integration boundary: the complete review, classification, and save loop works outside the React Native interface; integration into Ren remains incomplete.
- **2026-09-14:** Added the confirmed current runtime for Ren’s memory loop and Memo’s active use across Zachary’s agent interfaces, keeping that working system distinct from the incomplete mobile integration.
- **2026-09-14:** Added Ren’s confirmed availability constraint and the in-progress cloud-default, optional-local-model direction. Explicitly kept paid access and model delivery as intended, not launched, product behavior.
- **2026-09-14:** Added Ren’s confirmed user context and intended contextual-support direction while keeping calendar and pattern capabilities distinct from confirmed prototype integration.
- **2026-09-14:** Confirmed Google Calendar OAuth with appointment CRUD. Added Ren’s daily-rhythm and low-focus interaction direction, keeping unconfirmed implementation status separate.
- **2026-09-14:** Confirmed RADAR as the current prioritized seven-day overview. Marked the daily-rhythm and low-focus experiences as unimplemented pending model integration.
- **2026-09-14:** Confirmed the current RADAR inputs: calendar events, tasks, and user-marked priorities. Did not infer prioritization logic beyond those inputs.
- **2026-09-14:** Captured early qualitative RADAR feedback from two users: it helps surface future commitments beyond the immediate moment. It is not presented as broad product validation.
- **2026-09-14:** Added Ren’s confirmed NOW, Soon, Waiting, and Blocked task model, including the five-day Soon window and “today + 1” NOW transition.
- **2026-09-14:** Confirmed that stale-task conversational check-ins work in Hermes, while the React Native integration remains unfinished.
- **2026-09-14:** Confirmed Hermes’s stale-task rule: surface an untouched task after three days and offer to keep, discard, or elevate it.
- **2026-09-14:** Confirmed that elevating a stale task moves it to NOW. Removed an inconsistent Hermes/Ren attribution pending clarification.
- **2026-09-14:** Resolved the stale-task runtime: it currently operates as a concept in Hermes and is intended to move into Ren.
- **2026-09-14:** Confirmed Ren’s solo ownership and informal feedback context. Kept it distinct from formal research or team collaboration.
- **2026-09-14:** Qualified informal feedback: positive concept response and one additional early user, without claiming a specific design change.
- **2026-09-14:** Confirmed that the additional early user has used RADAR only. Other Ren capabilities are not externally validated.
- **2026-09-14:** Added Ren’s confirmed Today-to-RADAR progressive-disclosure model and its anti-overwhelm rationale.
- **2026-09-14:** Added Today’s confirmed filtering rule: due-today tasks and future events only, with past events intentionally hidden.
- **2026-09-14:** Added Today’s important-item inclusion and documented its current ordering limitation as a reflection rather than a solved behavior.
- **2026-09-14:** Captured drag-and-drop task ordering as the planned user-control correction for Today, not current behavior.
- **2026-09-14:** Corrected Ren’s notification status: timed check-ins exist for events, tasks, and routines. Kept low-focus model judgment pending a precise integration-status check.
- **2026-09-14:** Confirmed low-focus mode’s integration boundary: the toggle exists, while runtime model selection of the three next actions does not yet.
- **2026-09-14:** Read Ren’s Mycelium voice reference and recorded the intended low-focus screen and post-completion behavior pending implementation clarification.
- **2026-09-14:** Confirmed low-focus UI behavior: the replacement screen and placeholder/calendar context render today; model-selected three actions remain unintegrated.
- **2026-09-14:** Decided to retain Ren as a visible supporting prototype, not a flagship case study.
- **2026-09-14:** Resumed Pacific Life reconstruction. Captured confirmed Workforce Benefits launch work, New Business sales-dashboard work, and the unfinished Salesforce single-pane-of-glass effort without inferring outcomes or confidential details.
- **2026-09-14:** Selected the Pacific Life Workforce Benefits launch as the anonymized case-study candidate.
- **2026-09-14:** Captured the Workforce Benefits launch starting point: persona-first scoping with PwC to define needed portals, interactions, and system touchpoints.
- **2026-09-14:** Confirmed the Workforce Benefits persona set: employee, dependent, employer, financial professional, and broker.
- **2026-09-14:** Confirmed Zachary’s ownership boundary in the Workforce Benefits launch: employee portal, with teammates responsible for the other portal audiences.
- **2026-09-14:** Confirmed the Workforce Benefits employee portal’s core jobs: enrollment, benefits changes, claims, information access, and cards after employer or HR onboarding materials.
- **2026-09-14:** Captured the Workforce Benefits launch constraints: under-one-year division launch, eight-person UX team, PwC development collaboration, and redesign pressure from a constrained component system.
- **2026-09-14:** Clarified PwC as PricewaterhouseCoopers, the external delivery agency. Identified employee onboarding, verification, and policy creation as the key employee-portal flow to reconstruct.
- **2026-09-14:** Clarified that the Workforce Benefits redesign pressure came from a UI-fidelity gap: PwC’s system could not conform to Pacific Life’s internal design tokens and componentry as expected.
- **2026-09-14:** Captured Zachary’s Design Engineer contribution at Pacific Life: provide PwC with design tokens, CSS, and JavaScript, translating between the UX team and developers while adapting where the chosen platform had no flexibility.
- **2026-09-14:** Confirmed the Workforce Benefits employee-portal launch around month nine and positive internal stakeholder reception. Explicitly excluded unconfirmed external outcomes.
- **2026-09-14:** Captured the Workforce Benefits team’s task-based prototype sessions with brokers and recent insurance enrollees, including recorded observations and stakeholder-facing synthesis. Individual research ownership remains to be clarified.
- **2026-09-14:** Confirmed Zachary planned and conducted Workforce Benefits remote research sessions with Zoom and Hotjar. Team synthesis ownership remains to be clarified.
- **2026-09-14:** Captured a concrete Workforce Benefits research-driven iteration: policy-selection information was difficult to find, so the team relabeled and repositioned it for discoverability.
- **2026-09-14:** Captured the Workforce Benefits validation tradeoff: the team could not re-test the revised policy-selection flow before launch because of time constraints.
- **2026-09-14:** Confirmed there are no available Pacific Life artifacts. Any future visual storytelling must use clearly labeled abstract reconstructions, not proprietary UI recreation.
- **2026-09-14:** Confirmed the 2023 Workforce Benefits launch year and created an anonymized case study using only confirmed facts plus an explicitly labeled abstract flow reconstruction.
- **2026-09-14:** Approved the anonymized Pacific Life case-study title, Enterprise Benefits Enrollment.
- **2026-09-14:** Removed the unused, unauthenticated tailored-resume API. It accepted caller-controlled content and wrote public Blob PDFs; no in-repository caller existed.
- **2026-09-30:** Consolidated analytics to one Rybbit script with an environment-configured URL and site ID plus the existing-site fallback. Updated the analytics helpers to use Rybbit custom events.
- **2026-09-14:** Began High Rapid Networks reconstruction. Captured the pre-redesign 2006 sign-up-form experience and the redesign’s product-comparison and local-community goals.
- **2026-09-14:** Captured High Rapid Networks’ three-tier pricing-table decision and selected-plan prefill into the sign-up form.
- **2026-09-14:** Confirmed Zachary’s end-to-end ownership of the High Rapid Networks brand, strategy, design, and implementation.
- **2026-09-14:** Confirmed no direct High Rapid Networks customer feedback is available; excluded “no news is good news” as evidence.
- **2026-09-14:** Confirmed that High Rapid Networks’ approximate 400 to 900–1,200 subscriber growth occurred over the year after the redesigned site launched, without attributing that growth solely to the site.
- **2026-09-14:** Captured the High Rapid Networks direct-mail campaign to households in Craig, Lay, and Maybell as a contributing acquisition initiative alongside the site redesign.
- **2026-09-14:** Captured the High Rapid Networks direct-mail conversion paths: website sign-up and a phone route for customers preferring direct contact.
- **2026-09-14:** Captured High Rapid Networks’ local-community storytelling: installer stories and county infrastructure-work imagery, including snowmobile access.
- **2026-09-14:** Confirmed the High Rapid Networks local stories and images featured the real network engineer and installer.
- **2026-09-14:** Rebuilt High Rapid Networks around confirmed product clarity, local-trust storytelling, and direct-mail acquisition evidence. Removed unverified claims about the old sign-up path, mail volume, performance, integrations, automation, and causal growth attribution.
- **2026-09-14:** Rebuilt Art Healing Hearts around confirmed six-day launch-recovery work: replacement build, domain migration and forwarding, Google remediation, tested Stripe donations, and the qualitative television-appearance outcome. Removed unsupported traffic, conversion, donation-count, and performance claims.
- **2026-09-14:** Improved baseline accessibility: mobile navigation now exposes its controlled region, receives focus when opened, closes with Escape, and is inert while closed. Added global visible focus styling and reduced-motion support for shared reveal animations.
- **2026-09-14:** Rebuilt Rhonda's Aftercare around confirmed accessibility, mobile navigation, working-form, and dual-audience needs. Removed unsupported claims about a 25% contact increase, 30% faster load time, SEO, QR/social landing pages, and direct performance measurement.
- **2026-09-14:** Rebuilt South Corona Chiropractic around confirmed ground-up ownership, local findability, email-based appointment inquiries, original photography, and qualitative acquisition outcomes. Removed unsupported booking integration, percentage lift, performance, and exact-photo-count claims.
- **2026-09-14:** Rebuilt Cydrion around confirmed greenfield brand ownership, static Next.js architecture, Lighthouse metrics, custom iconography, Stripe billing, and pipeline signup. Removed unverified market-leadership, uptime-guarantee, business-outcome, and universal security claims.
- **2026-09-14:** Rebuilt Manta around confirmed local passphrase generation with no runtime network requests. Verified its live Chrome Web Store 5.0 rating from one rating and removed the unverified testimonial, cracking-time claim, timing claim, and broad usage assertions.
- **2026-09-14:** Improved image delivery with responsive `sizes` on project cards and galleries. Added client and server contact-form validation, autocomplete, and bounded field lengths. Browser-verified the homepage, Member Splash, Enterprise Benefits Enrollment, contact-page rendering, and mobile-menu focus/Escape behavior.
- **2026-09-14:** Completed a visual QA pass. Fixed overflowing labels and caption wrapping in the Enterprise Benefits Enrollment flow reconstruction, updated Projects-page language to match Design Engineer positioning, and separated Tier 1 featured case studies from supporting work.
- **2026-09-14:** Marked above-the-fold featured project cards and case-study heroes for eager image loading after Next.js surfaced them as LCP candidates during local visual QA.
- **2026-09-16:** Added Zachary's working flowchart reconstruction for Splash Cards to the Member Splash case study, tracing card funding and status management from the member account through point-of-sale payment. The captioned chart is an explicit reconstruction, not a production screen.
- **2026-09-16:** Added Zachary's internal manual workflow-timing reconstruction for the Member Check-In comparison, placed after the evaluation section. The captioned chart covers the 30-plus-to-under-10-second result, a busy front-desk scenario, and the peak-period server-data context; it is labeled as manual, not club-wide analytics nor a production screen.
- **2026-09-16:** Added Zachary's working PXC architecture sketch to the Engineering section, tracing the guided React Ink interface to the Proxmox node that manages VMs, containers, storage, and networking. The captioned sketch is personal and not production documentation, with no specific cluster topology or host details shown.
- **2026-09-16:** Corrected the image-audit count. A space-aware re-audit of `public/` rasters found **53 total** static PNG/JPG/JPEG files (not 51) and **49 referenced conversion candidates** (not 47), with the difference accounted for by the earlier read using space-split file paths that mis-tokenized the four space-containing toolkit icon filenames. Excluded are the four toolbar/icons rasters plus GIFs and SVGs.
- **2026-09-16:** Completed the approved WebP migration (OpenSpec change `convert-portfolio-raster-images-to-webp`). Converted **49 referenced static PNG/JPG/JPEG portfolio assets** (photos `-q 80`, line-art/alpha PNGs lossless, and the large PXC sketch `-q 85`) to side-by-side WebP with dimension parity and preserved visual content, swapped all source references (work MDX, project pages, about page, JSON-LD), verified rendering on localhost:3300, then explicitly deleted only the 49 replaced originals after confirming zero remaining source references to them. Excluded: GIFs, SVGs, the four toolkit icons, and the pre-existing missing Supabase/Family Feud references.
  **Before (49 originals):** 33,036,084 bytes (~31.5 MiB). **After (WebP):** 4,952,664 bytes (~4.7 MiB). **Net saved:** ~28,083,420 bytes (~26.8 MiB), ~85% reduction. The earlier 51-raster/47-candidate/33.55 MB audit figure included the four icons and the prior space-split undercount.
- **2026-09-16:** Added Zachary's abstract payment-success boundary reconstruction to the Member Splash case study, placed after the money-movement hardening explanation. Delivered as WebP (lossless, matching the image-delivery convention) and captioned as flow structure only, with no real payment data or production UI. Completes the P2 artifact-backlog item for the payment-success boundary.
- **2026-09-16:** Added Zachary's before/after OmniSplash local developer-environment reconstruction to the Member Splash case study, placed in the developer-experience section where the pipeline is described. Delivered as WebP (lossless) and captioned as an abstract infrastructure-onboarding flow, not production configuration. Completes the P2 artifact-backlog item for the developer environment.
- **2026-09-16:** Added Zachary's hand-drawn before/after information-architecture reconstruction to the High Rapid Networks case study, placed between the problem context and the select-plan discussion. Delivered as WebP (lossless) and captioned as a reconstructed IA comparison, not archival production UI. Addresses part of the P3 supporting-case artifact backlog for High Rapid.
- **2026-09-16:** Repaired the global tablet footer (first item of `harden-portfolio-responsive-presentation`). Confirmed the tablet (768px) layout was cramped though not overflowing: brand spanned the full width while footer navigation and social/resume competed for two narrow half-width side-by-side columns (`md:flex-row md:justify-between md:gap-x-8`), forcing uncontrolled wrapping. The narrow single-line repair in `src/components/Footer.js` stacks navigation full-width above social/resume at 768 (`md:gap-8` between them, with the existing top divider from `md:border-t`/`md:pt-6`) as one intentional secondary row, while desktop resumes the side-by-side row only at `lg` (`lg:flex-row lg:flex-nowrap lg:items-center lg:gap-10`). Brand stays a full-width first row; mobile stack unchanged; all 5 nav links, 3 social/resume links, tracking handlers, keyboard reachability, and desktop side-by-side intent preserved. Browser-verified by headless DOM measurement: at 768 the wrapper is `column` with nav and social each full width (736px) stacked; at 1440 it is `row` (nav 323px at x=756, social 225px at x=1119); at 390 it stays the unchanged mobile column; footer contained with no overflow at 1440/768/390. `yarn lint` (Biome, 53 files clean) and `git diff --check` pass.
- **2026-09-16:** Accepted and verified the approved responsive presentation pass for `harden-portfolio-responsive-presentation`. Browser-driven headless DOM measurement at 1440/768/390 confirmed **no horizontal overflow** (`scrollWidth == clientWidth`) across Home, Projects, Member Splash, PXC CLI, and Enterprise Benefits; every case-study artifact and card image fits its container at all three widths with aspect ratio preserved via the existing `object-cover` card frames (no stretch, no regeneration). Navigation is accessible at every width: at 1440 the inline nav shows and the toggle is hidden; at 768/390 the mobile toggle is reachable, opens the controlled region with first-link focus, closes on Escape, and marks the closed region `aria-hidden` + `inert`, with visible keyboard focus signals on link sets and every link + tracking handler intact. Desktop (1440) was treated as an unchanged baseline — no page outside the footer was modified because no defect was found.
- **2026-09-16:** Confirmed and repaired the global tablet footer (first item of `harden-portfolio-responsive-presentation`). The 768px footer previously rendered footer navigation and social/resume as two competing narrow side-by-side columns inside one row (nav 323px + social 225px sharing 736px, `md:flex-row md:justify-between md:gap-x-8`), which was the cramped-wrap defect the change targeted. Narrow single-line repair to the navigation+social wrapper in `src/components/Footer.js` makes tablet render it as one intentional, separated secondary row: navigation full-width stacked above social/resume, `md:gap-8` between them, thin top divider and row padding from the existing `md:border-t`/`md:pt-6`, and `md:col-span-2` keeps the brand as the full-width first row. Desktop preserves the side-by-side intent by restoring row stacking only at `lg` (`lg:flex-row lg:flex-nowrap lg:items-center lg:gap-10`); mobile stack unchanged. Headless DOM re-measure confirms: at 768 the wrapper is `column` with nav (736px) and social (736px) each full width; at 1440 it is `row` (nav 323px at x=756, social 225px at x=1119, same as baseline); at 390 it stays the unchanged mobile column. All 5 footer nav links, 3 social/resume links, every `trackFooterNavClick`/`trackExternalLinkClick`/`trackResumeDownload` handler, `target="_blank"`/`rel`, and nav `aria-label` are untouched. Footer is contained (`footerW == vw`) with no overflow at 1440/768/390.
- **2026-09-16:** Ran the full verification gates for `harden-portfolio-responsive-presentation`. `openspec validate harden-portfolio-responsive-presentation --strict` passes; `yarn lint` (Biome) passes on 53 files; `yarn build` completes with all routes generating; `git diff --check` is clean. The only code change in this pass is the single class line on the navigation+social wrapper in `src/components/Footer.js`; no content rewrite, no new artifacts, and no nav-IA or global redesign change were introduced (task 3.5 confinement held).
- **2026-09-17:** Implemented the approved homepage featured-work hierarchy on the three non-draft featured cases (Member Splash, PXC, Enterprise Benefits Enrollment) in `src/app/page.js` as a pure grid and card-variant change, no copy or asset edits. Desktop lg renders Member Splash as a lead card spanning two-thirds of the row width, with PXC and Enterprise Benefits stacked in the remaining third; tablet md renders Member Splash full-width above PXC and Enterprise Benefits side-by-side; mobile renders a single column in that order (Member Splash, PXC, Enterprise Benefits). A minimal `lead` variant on the page's ProjectCard (flex-column layout with the image area growing to fill the cell) makes the desktop lead card stretch to the full height of its two-row cell so it balances the taller right-side stack instead of leaving blank space below it; object-cover cropping preserves image content. Semantics, accessible links, images, and hover/fade motion unchanged, and no other project grids or shared `ProjectCard` were touched. Headless DOM box measurements confirm the boxes: at 1440 Member Splash 819×904 with PXC (389×432) and Enterprise Benefits (389×432) stacked flush beside it (lead bottom 1821 equals stack bottom 1821); at 768 Member Splash full-width 736×593 above the two side-by-side 352-wide cards; at 390 three stacked full-width 358px cards in order. `yarn lint` (Biome, 53 files clean), `git diff --check`, and `yarn build` all pass.
