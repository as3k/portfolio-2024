# Prequalify Forms Design

**Date:** 2026-06-21
**Branch:** feat/prequalify-forms

## Problem

`/lets-talk` serves two distinct audiences — FTE hiring managers and consulting prospects — with one generic form (name/email/message). No prequalification. Submissions arrive with no intent signal, no context, no routing data.

The consulting page (`/consulting`) sends people to `/lets-talk` but that page has no consulting-specific fields.

## Solution

Split into two purpose-built forms. Route each audience to the right one.

---

## Part 1: `/lets-talk` — Intent Gate

### UI

Three intent cards appear between the header text and any form. User selects one to reveal the appropriate form. No form visible until selection.

**Cards:**
1. "I want to hire you full-time"
2. "I need consulting help"
3. "Something else"

Cards use teal highlight on hover and selected state. Selection is reversible (user can switch).

### Card Outcomes

**"I want to hire you full-time"** → reveals FTE form inline:
- Name (text)
- Email (email)
- Company (text)
- Role they're hiring for (text)
- Message (textarea)

**"I need consulting help"** → no form. Shows routing message:
> "The consulting page walks through how I work and has a form built for that conversation."
> CTA button: "Start with The Diagnosis →" → `/consulting#contact`

**"Something else"** → reveals general form inline:
- Name (text)
- Email (email)
- Message (textarea)

### Existing Page Structure

Everything below the form (What I'm Looking For list, footer links) stays unchanged.

---

## Part 2: `/consulting` — Consulting Form

New section added at bottom of page below the existing CTA block. Anchor: `id="contact"`.

### Fields

| Field | Type | Notes |
|-------|------|-------|
| Name | text | required |
| Email | email | required |
| Company/product URL | url | required |
| Team size | select | Solo / 2–5 / 6–15 / 16–50 / 50+ |
| What's stalling | textarea | placeholder: "What's the thing you can't seem to ship?" |
| Which offer interests you | radio | The Diagnosis / The Rewire / Embedded / Not sure yet |
| Timeline | select | ASAP / 1–3 months / Just exploring |

---

## Part 3: API

**Endpoint:** `/api/contact/route.js` — single endpoint, extended.

Extra fields pass through as-is. Email body renders all present fields. No schema enforcement server-side — format whatever arrives.

New `type` field in payload: `'fte' | 'general' | 'consulting'` — used for analytics, also included in email subject/body for quick scanning.

---

## Part 4: Analytics

Both **Umami** and **Rybbit** (stats.zkg.io) track form submit events with a `type` dimension.

Rybbit re-added to `layout.js` (was removed due to CORS — user will fix CORS separately).

Tracking call on success: `trackContactFormSubmit(type, 'success')` — update signature in `src/lib/umami.js` and add parallel Rybbit event call.

---

## Part 5: Components

| Component | Status | Notes |
|-----------|--------|-------|
| `IntentGate.js` | new | 3-card selector + conditional form render. Client component. |
| `FTEForm.js` | new | FTE-specific form (name/email/company/role/message) |
| `ConsultingForm.js` | new | Consulting-specific form (all 7 fields above) |
| `ContactForm.js` | keep | Used as-is for "Something else" path |
| `layout.js` | update | Rybbit script re-added |
| `/api/contact/route.js` | update | Accept + render extended fields, include `type` |
| `src/lib/umami.js` | update | `trackContactFormSubmit` accepts `type` param |
| `/lets-talk/page.js` | update | Replace `<ContactForm />` with `<IntentGate />` |
| `/consulting/page.js` | update | Add `<ConsultingForm />` section with `id="contact"` |
