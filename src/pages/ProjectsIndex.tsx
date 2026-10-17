import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS, type Project } from '../data/projects';
import { ArrowRight, MapPin, Calendar, Sparkles } from 'lucide-react';
import { useEnquiry } from '../context/EnquiryContext';

const CATEGORIES = [
  'All',
  'House Plans & Maps',
  'Bungalow Renovations',
  'Interior Design',
  'Complete Renovations',
  'Kitchens & Joinery',
  'Custom Furniture',
  'Flooring & Stone',
  'Walls, Ceilings & Finishes',
  'Rooftops & Terraces'
] as const;

export const ProjectsIndex: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const { openProjectEnquiry } = useEnquiry();

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.categories.includes(selectedCategory));

  return (
    <div className="bg-[#FAF9F7] min-h-screen py-12 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Editorial Page Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-[0.6875rem] font-semibold tracking-[0.14em] uppercase text-[#806B54]">
            Architectural Monograph &amp; Case Studies
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#202321] mt-2 leading-tight">
            Our Work in Karachi &amp; Across Pakistan
          </h1>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#6B6B65]">
            Explore selected residential transformations, beachfront penthouses, bespoke furniture commissions, and turnkey architectural fit-outs executed by AGAS Interiors.
          </p>
        </div>

        {/* Category Pill Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none border-b border-[#E6E2DC]">
          {CATEGORIES.map(cat => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 text-xs uppercase tracking-[0.08em] font-medium transition-all ${
                  isActive
                    ? 'bg-[#202321] text-[#F5F3EE]'
                    : 'bg-white text-[#6B6B65] hover:text-[#202321] border border-[#E6E2DC]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: Project) => {
            const heroImage = project.gallery[0]?.url || '/img/hero/candid-showroom-hero.jpg';
            return (
              <article
                key={project.id}
                className="group flex flex-col bg-white border border-[#E6E2DC] overflow-hidden hover:border-[#806B54] transition-colors"
              >
                {/* Image */}
                <Link
                  to={`/projects/${project.slug}`}
                  className="relative aspect-4/3 overflow-hidden bg-stone-200 block"
                >
                  <img
                    src={heroImage}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  
                  {/* Location badge on image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <span className="flex items-center gap-1.5 font-medium tracking-wide">
                      <MapPin className="w-3.5 h-3.5 text-[#B9B3A8]" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1 text-[0.6875rem] opacity-80">
                      <Calendar className="w-3 h-3" />
                      {project.completionYear}
                    </span>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.categories.slice(0, 2).map(c => (
                        <span
                          key={c}
                          className="text-[0.625rem] font-semibold tracking-[0.08em] uppercase px-2 py-0.5 bg-[#F5F3EE] text-[#806B54]"
                        >
                          {c}
                        </span>
                      ))}
                    </div>

                    <Link to={`/projects/${project.slug}`}>
                      <h2 className="text-lg font-medium text-[#202321] group-hover:text-[#806B54] transition-colors">
                        {project.title}
                      </h2>
                    </Link>

                    <p className="mt-2 text-xs sm:text-sm text-[#6B6B65] line-clamp-3 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Footer link */}
                  <div className="mt-6 pt-4 border-t border-[#E6E2DC] flex items-center justify-between">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="text-xs font-semibold uppercase tracking-[0.1em] text-[#202321] inline-flex items-center gap-1 group-hover:text-[#806B54] transition-colors"
                    >
                      <span>Explore Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <button
                      type="button"
                      onClick={() => openProjectEnquiry(project)}
                      className="text-[0.6875rem] font-medium text-[#806B54] hover:underline"
                    >
                      Enquire Similar
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Studio Consultation Banner */}
        <div className="mt-16 bg-[#202321] text-[#F5F3EE] p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-[0.6875rem] font-semibold tracking-[0.14em] uppercase text-[#B9B3A8] flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#9A8C70]" />
              Start Your Architectural Project
            </span>
            <h3 className="text-xl sm:text-2xl font-medium text-[#F5F3EE] mt-2">
              Have a property in Karachi or across Pakistan ready for transformation?
            </h3>
            <p className="text-xs sm:text-sm text-[#B9B3A8] mt-2 leading-relaxed">
              Share your floor plans, site measurements, or concept inspiration with our lead architects and master craftsmen for an initial feasibility review.
            </p>
          </div>
          <button
            type="button"
            onClick={() => openProjectEnquiry()}
            className="whitespace-nowrap px-6 py-3.5 bg-[#806B54] text-white text-xs font-semibold uppercase tracking-[0.12em] hover:bg-[#9A8C70] transition-colors"
          >
            Submit Project Brief
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsIndex;
