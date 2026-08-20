const WORDS_PER_MINUTE = 200;

function getReadableText(body: string): string {
  return body
    // Exclude imports and other module-level code from MDX posts.
    .replace(/^\s*(?:import|export)\s.+$/gm, ' ')
    // Exclude fenced code blocks before processing the remaining Markdown.
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/~~~[\s\S]*?~~~/g, ' ')
    // Keep link text but exclude URLs, and exclude image syntax entirely.
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/https?:\/\/\S+/g, ' ')
    // Inline code and MDX/HTML tags are not part of the readable word count.
    .replace(/`[^`]*`/g, ' ')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\$\$[\s\S]*?\$\$/g, ' ')
    .replace(/\$[^$\n]*\$/g, ' ');
}

export function getReadingTime(body?: string): number {
  if (!body) return 1;

  const words = getReadableText(body).match(/[\p{L}\p{N}]+(?:['’][\p{L}\p{N}]+)?/gu) ?? [];
  return Math.max(1, Math.ceil(words.length / WORDS_PER_MINUTE));
}
