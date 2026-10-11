import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { JOURNAL_POSTS } from '../../data/navigation';

export const TheJournalSection: React.FC = () => {
  return (
    <section className="bg-[#1a1a1a] text-stone-200 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-stone-800">
          <div>
            <p className="eyebrow text-[#bf9250]">The journal</p>
            <h2 className="display-l mt-2 text-stone-50 font-normal">
              Notes on how rooms come together
            </h2>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-stone-300 max-w-xl">
              Longer reads on what we are seeing in Pakistani homes, and how to use it.
            </p>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 border-b border-dashed border-stone-400 pb-1 text-[0.75rem] font-semibold tracking-[0.1em] text-stone-100 uppercase transition-colors duration-300 hover:border-[#bf9250] hover:text-[#bf9250] shrink-0"
          >
            <span>All posts</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 2 Articles Grid */}
        <ul className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-14">
          {JOURNAL_POSTS.map(post => (
            <li key={post.id}>
              <Link to={`/blog/${post.slug}`} className="group block">
                {/* Article Image Container */}
                <div className="relative aspect-16/10 overflow-hidden bg-stone-800 rounded-xl">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-[1.04]"
                  />
                  <span className="absolute top-3 left-3 bg-[#faf9f7] px-3.5 py-1.5 text-[0.625rem] font-semibold tracking-[0.12em] text-[#1a1a1a] uppercase rounded-sm shadow-sm">
                    {post.tag}
                  </span>
                </div>

                {/* Date */}
                <p className="mt-5 text-[0.75rem] tracking-[0.06em] text-stone-400 uppercase">
                  {post.date}
                </p>

                {/* Title */}
                <h3 className="mt-2 text-[1.375rem] leading-[1.25] text-stone-50 transition-colors duration-300 group-hover:text-[#bf9250] lg:text-[1.625rem] font-medium">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="mt-3 line-clamp-3 text-[0.875rem] leading-relaxed text-stone-300">
                  {post.excerpt}
                </p>

                {/* Link */}
                <span className="mt-5 inline-flex items-center gap-2 text-[0.75rem] font-semibold tracking-[0.1em] text-stone-100 uppercase group-hover:text-[#bf9250] transition-colors">
                  <span>Read the post</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
