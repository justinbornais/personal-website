import React from 'react';

interface CalloutProps {
  type: 'note' | 'tip' | 'example' | 'warning' | 'info';
  children: React.ReactNode;
}

const calloutConfig = {
  note: {
    bgColor: 'bg-blue-900/30',
    borderColor: 'border-blue-500',
    iconColor: 'text-blue-400',
    title: 'Note',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
      </svg>
    ),
  },
  info: {
    bgColor: 'bg-cyan-900/30',
    borderColor: 'border-cyan-500',
    iconColor: 'text-cyan-400',
    title: 'Info',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
      </svg>
    ),
  },
  tip: {
    bgColor: 'bg-green-900/30',
    borderColor: 'border-green-500',
    iconColor: 'text-green-400',
    title: 'Tip',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
      </svg>
    ),
  },
  example: {
    bgColor: 'bg-purple-900/30',
    borderColor: 'border-purple-500',
    iconColor: 'text-purple-400',
    title: 'Example',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
      </svg>
    ),
  },
  warning: {
    bgColor: 'bg-amber-900/30',
    borderColor: 'border-amber-500',
    iconColor: 'text-amber-400',
    title: 'Warning',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
    ),
  },
};

export default function Callout({ type, children }: CalloutProps) {
  const config = calloutConfig[type];

  return (
    <div className={`${config.bgColor} ${config.borderColor} border-l-4 rounded-r-lg p-4 my-6`}>
      <div className={`flex items-center gap-2 ${config.iconColor} font-semibold mb-2`}>
        {config.icon}
        <span>{config.title}</span>
      </div>
      <div className="text-gray-300 prose-callout">
        {children}
      </div>
    </div>
  );
}

// Named exports for convenience in MDX
export function Note({ children }: { children: React.ReactNode }) {
  return <Callout type="note">{children}</Callout>;
}

export function Tip({ children }: { children: React.ReactNode }) {
  return <Callout type="tip">{children}</Callout>;
}

export function Example({ children }: { children: React.ReactNode }) {
  return <Callout type="example">{children}</Callout>;
}

export function Warning({ children }: { children: React.ReactNode }) {
  return <Callout type="warning">{children}</Callout>;
}

export function Info({ children }: { children: React.ReactNode }) {
  return <Callout type="info">{children}</Callout>;
}
