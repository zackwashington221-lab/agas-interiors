import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { JOURNAL_POSTS } from '../data/navigation';

export const Blog: React.FC = () => {
  return (
    <div className="bg-[#faf9f7] min-h-screen py-12 lg:py-16">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow text-[#825e2d]">The Journal</span>
          <h1 className="display-l text-[#1a1a1a] mt-2 font-medium">
            Notes on how rooms come together
          </h1>
          <p className="mt-3 text-sm text-stone-600">
            Longer reads on what we are seeing in Pakistani homes, contemporary material movements, and architectural styling advice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {JOURNAL_POSTS.map(post => (
            <article key={post.id} className="bg-white border border-[#e6e2dc] overflow-hidden group flex flex-col justify-between">
              <Link to={`/blog/${post.slug}`} className="block overflow-hidden relative aspect-16/10">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-[#1a1a1a] text-white text-[0.625rem] font-semibold px-2.5 py-1 uppercase tracking-wider">
                  {post.tag}
                </span>
              </Link>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-stone-400 uppercase tracking-wider mb-2">
                    {post.date}
                  </p>
                  <h2 className="text-lg sm:text-xl font-medium text-[#1a1a1a] group-hover:text-[#a67c3d] transition-colors leading-snug">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#e6e2dc]">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1a1a1a] group-hover:text-[#a67c3d] transition-colors"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Blog;
