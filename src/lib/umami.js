/**
 * Umami tracking utility functions
 * Provides type-safe wrappers for Umami event tracking
 */

/**
 * Track an event with Umami
 * @param {string} eventName - The name of the event to track
 * @param {Object} properties - Event properties/metadata
 */
export function track(eventName, properties = {}) {
  if (typeof window !== 'undefined' && window.umami) {
    window.umami.track(eventName, properties);
  }
}

// Specific event trackers

export function trackContactFormSubmit(status, errorType = null) {
  track('contact_form_submit', {
    status,
    form_location: 'lets_talk_page',
    ...(errorType && { error_type: errorType })
  });
}

export function trackLetsTalkCTA(location) {
  track('cta_lets_talk_click', { location });
}

export function trackGetInTouchCTA(location) {
  track('cta_get_in_touch', { location });
}

export function trackResumeDownload(location, format = 'pdf') {
  track('resume_download_click', { location, format });
}

export function trackProjectCardClick(projectSlug, location, options = {}) {
  track('project_card_click', {
    project_slug: projectSlug,
    location,
    ...options
  });
}

export function trackProjectCardHover(projectSlug, location) {
  track('project_card_hover', {
    project_slug: projectSlug,
    location
  });
}

export function trackExternalLinkClick(destination, location) {
  track('external_link_click', { destination, location });
}

export function trackNavigationClick(destination, navType = 'desktop') {
  track('nav_click', { destination, nav_type: navType });
}

export function trackFooterNavClick(destination) {
  track('footer_nav_click', { destination });
}

export function trackProjectNavigation(direction, fromProject, toProject) {
  track('project_navigation_click', {
    direction,
    from_project: fromProject,
    to_project: toProject
  });
}

export function trackBackToProjects(fromProject) {
  track('navigation_back_to_projects', { from_project: fromProject });
}

export function trackMobileMenuToggle(action) {
  track('mobile_menu_toggle', { action });
}

export function trackLogoClick(location = 'header') {
  track('logo_click', { location });
}

export function trackCTAClick(ctaType, location) {
  track(`cta_${ctaType}`, { location });
}

export function trackTimelineScroll(yearReached) {
  track('timeline_scroll_interaction', { year_reached: yearReached });
}
