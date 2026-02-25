import React from 'react';

interface CardProps {
  title: string;
  body: string;
  href: string;
}

const Card: React.FC<CardProps> = ({ title, body, href }) => {
  return (
    <li className="list-none flex p-px bg-neutral-800 bg-[length:400%] rounded-lg bg-[position:100%] transition-[background-position] duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] hover:bg-[position:0%] hover:bg-gradient-to-r hover:from-amber-400 hover:via-blue-500 hover:to-white group">
      <a
        href={href}
        className="w-full no-underline leading-relaxed p-6 rounded-lg text-white bg-neutral-800 opacity-80"
      >
        <h2 className="m-0 text-xl transition-colors duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-blue-400">
          {title}
          <span className="ml-2">&rarr;</span>
        </h2>
        <p className="mt-2 mb-0 text-gray-400">{body}</p>
      </a>
    </li>
  );
};

export default Card;
