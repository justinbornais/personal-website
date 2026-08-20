const tagLabels: Record<string, string> = {
  education: 'Education',
  'computer-science': 'Computer Science',
};

export function formatTag(tag: string): string {
  return tagLabels[tag] ?? tag;
}
