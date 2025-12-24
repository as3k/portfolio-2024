# Add Umami Analytics Tracking

**Status:** Completed  
**Created:** 2024-12-24  
**Implemented:** 2024-12-24  
**Change ID:** add-umami-analytics-tracking

## Summary

Implement comprehensive analytics tracking using Umami across the portfolio site to measure user engagement, conversion events, and navigation patterns.

## Motivation

The site lacked visibility into:
- Which projects generate the most interest
- How users navigate the site
- Contact form conversion rates
- Resume download frequency
- External link engagement (LinkedIn, GitHub, Email)

This data is essential for understanding user behavior and optimizing the portfolio for maximum impact.

## Scope

### In Scope
- Contact form submissions (success/error tracking)
- All call-to-action buttons ("Let's Talk", "Get in Touch")
- Resume download events (footer + resume page)
- Project card clicks across all pages (home, projects, archive)
- External link clicks (LinkedIn, Email, GitHub, MDX content)
- Navigation tracking (header, footer, mobile menu)
- Project navigation (previous/next, back to projects)
- Engagement events (project card hovers, timeline scrolls)

### Out of Scope
- Analytics dashboard customization
- A/B testing functionality
- Session replay or heatmaps
- Custom analytics backend

## Implementation Details

### Architecture
- Created centralized tracking utility (`src/lib/umami.js`) with reusable functions
- Converted affected components to client components where needed
- Used `useUmamiTrack` hook for consistent event tracking
- Followed consistent naming patterns for events and properties

### Key Components Modified
1. **New Client Components Created:**
   - `ProjectCard.js` - Project card with click/hover tracking
   - `ArchiveProjectCard.js` - Archive page project cards
   - `ResumeDownloadButton.js` - Resume download with tracking
   - `ContactMethodCard.js` - Contact page external links
   - `ProjectNavigation.js` - Project detail navigation

2. **Existing Components Enhanced:**
   - `ContactForm.js` - Form submission tracking
   - `Header.js` - Navigation and mobile menu tracking
   - `Footer.js` - Footer navigation and resume download
   - `HomeContent.js` - Homepage CTAs and project clicks
   - `MDXComponents.js` - External link tracking
   - And 2 more files

### Event Naming Conventions
- User actions: `contact_form_submit`, `cta_click`, `resume_download`
- Navigation: `nav_click`, `mobile_menu_toggle`, `project_navigation`
- Engagement: `project_card_hover`, `timeline_scroll`
- All events include contextual properties (location, label, etc.)

## Testing

- Manual testing of all tracked events
- Verified events appear in Umami dashboard
- Build tested and passing successfully
- All tracking functions are non-blocking (failures don't break UX)

## Rollout Plan

Implementation is complete and committed (commit: 86c3457).

## Success Metrics

- All high-priority user actions are tracked
- Events flow correctly to Umami dashboard
- No impact on site performance or user experience
- Tracking provides actionable insights for portfolio optimization
