import React, { useEffect, useState, useRef } from 'react';

interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
}

const languageColors: Record<string, string> = {
  TypeScript: 'bg-blue-500',
  JavaScript: 'bg-yellow-400',
  Python: 'bg-green-500',
  Go: 'bg-cyan-400',
  'C++': 'bg-pink-500',
  Dart: 'bg-sky-400',
  Delphi: 'bg-red-500',
  HTML: 'bg-orange-500',
  CSS: 'bg-purple-500',
  Rust: 'bg-orange-600',
  Java: 'bg-red-400',
  C: 'bg-gray-400',
  Shell: 'bg-green-400',
};

const About: React.FC = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const reposRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/users/justinbornais/repos?sort=updated&per_page=6&type=public'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (reposRef.current) {
      observer.observe(reposRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 px-6 bg-neutral-900">
      <div className="max-w-6xl mx-auto">
        {/* About Me Section */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            About Me
          </h2>
          
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed flex-1">
              <p>
                I'm currently working at <span className="text-amber-400 font-semibold">Tessonics</span> as a Software Developer, 
                where I build robust applications using a diverse tech stack including{' '}
                <span className="text-blue-400">C++</span>,{' '}
                <span className="text-cyan-400">Golang</span>,{' '}
                <span className="text-red-400">Delphi</span>,{' '}
                <span className="text-sky-400">React</span>,{' '}
                <span className="text-blue-500">TypeScript</span>,{' '}
                <span className="text-purple-400">Hugo</span>, and{' '}
                <span className="text-teal-400">Flutter</span>.
              </p>
              
              <p>
                Beyond coding, I'm a passionate musician. I play piano, organ, and guitar, and I also sing. 
                I taught piano for 7 years, helping students of all ages discover their musical potential. 
                For the past 4 years, I've had the honor of performing at weddings and funerals, 
                providing meaningful musical moments during life's most significant occasions.
              </p>
            </div>

            <div className="lg:w-60 w-64 flex-shrink-0 mx-auto lg:mx-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-blue-500 rounded-lg transform rotate-3"></div>
                <img
                  src="/me.webp"
                  alt="Justin Bornais"
                  className="relative rounded-lg shadow-2xl w-full h-auto object-cover transform -rotate-3 hover:rotate-0 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* GitHub Repositories Section */}
        <div ref={reposRef}>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-white">
              Featured Projects
            </h3>
            <a
              href="https://github.com/justinbornais?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-neutral-800 text-gray-300 rounded-lg hover:bg-neutral-700 hover:text-white transition-colors border border-neutral-700"
            >
              <span>View All</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>

          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="bg-neutral-800 rounded-lg p-6 animate-pulse"
                >
                  <div className="h-6 bg-neutral-700 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-neutral-700 rounded w-full mb-2"></div>
                  <div className="h-4 bg-neutral-700 rounded w-2/3"></div>
                </div>
              ))}
            </div>
          )}

          {error && (
            <div className="text-center py-12 text-gray-400">
              <p>Unable to load repositories. Please visit my GitHub directly.</p>
              <a
                href="https://github.com/justinbornais"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 mt-2 inline-block"
              >
                github.com/justinbornais
              </a>
            </div>
          )}

          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.map((repo, index) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group bg-neutral-800 rounded-lg p-6 border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-750 transition-all duration-300 transform ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                  }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors truncate">
                        {repo.name}
                      </h4>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-2 min-h-[2.5rem]">
                    {repo.description || 'No description available'}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    {repo.language && (
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`w-3 h-3 rounded-full ${
                            languageColors[repo.language] || 'bg-gray-500'
                          }`}
                        ></span>
                        <span>{repo.language}</span>
                      </div>
                    )}
                    {repo.stargazers_count > 0 && (
                      <div className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        <span>{repo.stargazers_count}</span>
                      </div>
                    )}
                    {repo.forks_count > 0 && (
                      <div className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M7 5a2 2 0 11-4 0 2 2 0 014 0zM8.5 10a2 2 0 11-4 0 2 2 0 014 0zM12.5 10a2 2 0 11-4 0 2 2 0 014 0zM7 15a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span>{repo.forks_count}</span>
                      </div>
                    )}
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
