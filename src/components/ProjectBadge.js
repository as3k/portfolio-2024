/**
 * Project badge component for displaying status indicators
 * Shows WIP, archived, or personal project badges based on project metadata
 */
export function ProjectBadge({ project }) {
  const { status, workInProgress, category } = project.meta;

  if (workInProgress || status === 'in-progress') {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-microcopy-1-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
        Work in Progress
      </span>
    );
  }

  if (status === 'archived') {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-microcopy-1-semibold bg-gray-500/10 text-gray-400 border border-gray-500/30">
        Archived
      </span>
    );
  }

  if (category === 'Personal Project') {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-microcopy-1-semibold bg-violet-500/10 text-violet-400 border border-violet-500/30">
        Personal Project
      </span>
    );
  }

  return null;
}

export default ProjectBadge;
