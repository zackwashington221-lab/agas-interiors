import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { JOURNAL_POSTS } from '../data/navigation';
import { ArrowLeft, Share2 } from 'lucide-react';

export const BlogPost: React.FC = () => {
  const { slug } = useParams();
  const post = JOURNAL_POSTS.find(p => p.slug === slug) || JOURNAL_POSTS[0];

  return (
    <article className="bg-[#faf9f7] min-h-screen py-12 lg:py-20">
      <div className="mx-auto max-w-[900px] px-5 sm:px-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 hover:text-[#1a1a1a] mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Journal
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 text-xs text-stone-500 mb-3 uppercase tracking-wider">
            <span className="text-[#a67c3d] font-semibold">{post.tag}</span>
            <span>&bull;</span>
            <span>{post.date}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#1a1a1a] leading-tight">
            {post.title}
          </h1>
        </div>

        {/* Featured Image */}
        <div className="aspect-16/9 overflow-hidden bg-stone-200 mb-10">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        {/* Content */}
        <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed text-sm sm:text-base space-y-6">
          <p className="text-lg font-medium text-stone-800 leading-relaxed border-l-2 border-[#a67c3d] pl-4">
            {post.excerpt}
          </p>

          <p>
            As residential architecture evolves across Pakistan&apos;s urban centers, there is a profound movement towards tactile luxury. Homeowners in Karachi, Lahore, and Islamabad are shifting away from ornate, high-gloss finishes toward textured neutrals, organic curved silhouettes, and unvarnished natural timber.
          </p>

          <h3 className="text-xl font-semibold text-[#1a1a1a] pt-4">
            1. The Rise of Bouclé and Earth-Tone Velvets
          </h3>
          <p>
            Bouclé upholstery introduces multidimensional depth that absorbs and diffuses natural light softly throughout the day. Paired with low-profile brushed brass or oiled walnut accents, a bouclé bed or sectional anchors a sanctuary without visual clutter.
          </p>

          <h3 className="text-xl font-semibold text-[#1a1a1a] pt-4">
            2. Integrated Ambient Illumination
          </h3>
          <p>
            Modern bedroom architecture increasingly demands furniture that integrates lighting into its very anatomy. Floating bedside panels and fluted headboards fitted with concealed, warm LED channels allow rooms to maintain serene nocturnal ambiances without bulky freestanding lamps.
          </p>

          <h3 className="text-xl font-semibold text-[#1a1a1a] pt-4">
            3. The Seamless Kitchen &amp; Social Space
          </h3>
          <p>
            The boundary between the kitchen and gathering areas continues to dissolve. Handleless, textured cabinetry with sintered stone island hubs now serve as breakfast bars, evening entertaining stations, and architectural centerpieces.
          </p>
        </div>

        {/* Share & Explore */}
        <div className="mt-12 pt-8 border-t border-[#e6e2dc] flex items-center justify-between">
          <Link
            to="/bedroom-furniture"
            className="text-xs font-semibold uppercase tracking-wider text-[#a67c3d] hover:underline"
          >
            Explore Matching Pieces &rarr;
          </Link>
          <button
            type="button"
            onClick={() => {
              navigator.clipboard?.writeText(window.location.href);
              alert('Article link copied to clipboard!');
            }}
            className="inline-flex items-center gap-1.5 text-xs text-stone-600 hover:text-[#1a1a1a]"
          >
            <Share2 className="w-4 h-4" />
            Share Article
          </button>
        </div>
      </div>
    </article>
  );
};
export default BlogPost;
