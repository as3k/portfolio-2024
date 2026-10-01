/**
 * Rybbit tracking helpers. Analytics is optional and must never affect product behavior.
 */
export function track(eventName, properties = {}) {
  if (typeof window === 'undefined' || !window.rybbit?.event) return;

  const safeProperties = Object.fromEntries(
    Object.entries(properties)
      .filter(([, value]) => value !== null && value !== undefined)
      .map(([key, value]) => [key, typeof value === 'boolean' ? String(value) : value]),
  );

  try {
    window.rybbit.event(eventName, safeProperties);
  } catch {
    // Analytics failures must never interrupt the user flow.
  }
}

export function trackContactFormSubmit(type, status, errorType = null) {
  track('contact_form_submit', {
    status,
    form_type: type,
    form_location: type === 'consulting' ? 'consulting_page' : 'lets_talk_page',
    error_type: errorType,
  });
}

export function trackLetsTalkCTA(location) { track('cta_lets_talk_click', { location }); }
export function trackGetInTouchCTA(location) { track('cta_get_in_touch', { location }); }
export function trackResumeDownload(location, format = 'pdf') { track('resume_download_click', { location, format }); }
export function trackProjectCardClick(projectSlug, location, options = {}) {
  track('project_card_click', { project_slug: projectSlug, location, ...options });
}
export function trackProjectCardHover(projectSlug, location) { track('project_card_hover', { project_slug: projectSlug, location }); }
export function trackExternalLinkClick(destination, location) { track('external_link_click', { destination, location }); }
export function trackNavigationClick(destination, navType = 'desktop') { track('nav_click', { destination, nav_type: navType }); }
export function trackFooterNavClick(destination) { track('footer_nav_click', { destination }); }
export function trackProjectNavigation(direction, fromProject, toProject) {
  track('project_navigation_click', { direction, from_project: fromProject, to_project: toProject });
}
export function trackBackToProjects(fromProject) { track('navigation_back_to_projects', { from_project: fromProject }); }
export function trackMobileMenuToggle(action) { track('mobile_menu_toggle', { action }); }
export function trackLogoClick(location = 'header') { track('logo_click', { location }); }
export function trackCTAClick(ctaType, location) { track(`cta_${ctaType}`, { location }); }
export function trackTimelineScroll(yearReached) { track('timeline_scroll_interaction', { year_reached: yearReached }); }

export function trackAudioStart({ slug, contentType, provider, chunkIndex, playbackRate }) {
  track('audio_started', {
    content_slug: slug,
    content_type: contentType,
    provider,
    chunk_index: chunkIndex,
    playback_rate: playbackRate,
  });
}

export function trackAudioResume({ slug, contentType, provider, chunkIndex, playbackRate }) {
  track('audio_resumed', {
    content_slug: slug,
    content_type: contentType,
    provider,
    chunk_index: chunkIndex,
    playback_rate: playbackRate,
  });
}

export function trackAudioChunkError({ slug, contentType, provider, chunkIndex }) {
  track('audio_chunk_error', { content_slug: slug, content_type: contentType, provider, chunk_index: chunkIndex });
}

export function trackAudioComplete({ slug, contentType, provider, chunks, totalDuration }) {
  track('audio_completed', {
    content_slug: slug,
    content_type: contentType,
    provider,
    chunk_count: chunks,
    total_duration: totalDuration,
  });
}
