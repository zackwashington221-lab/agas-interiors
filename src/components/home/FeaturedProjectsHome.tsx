import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS, type Project } from '../../data/projects';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import { useEnquiry } from '../../context/EnquiryContext';

export const FeaturedProjectsHome: React.FC = () => {
  const { openProjectEnquiry } = useEnquiry();
  const featured = PROJECTS.filter((p: Project) => p.featured).slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-[#FAF9F7] border-t border-[#E6E2DC]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <span className="text-[0.6875rem] font-semibold tracking-[0.14em] uppercase text-[#806B54]">
              Architectural Monograph &amp; Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium text-[#202321] mt-2 leading-tight">
              Selected Work Across Pakistan
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#6B6B65] leading-relaxed">
              Real residential transformations in Karachi's premier communities, showcasing bespoke millwork, architectural lighting, and integrated custom furniture.
            </p>
          </div>
          <Link
            to="/projects"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#202321] hover:text-[#806B54] transition-colors"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Editorial Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project: Project) => {
            const heroImage = project.gallery[0]?.url || '/img/hero/candid-showroom-hero.jpg';
            return (
              <article
                key={project.id}
                className="group flex flex-col bg-white border border-[#E6E2DC] rounded-xl overflow-hidden hover:border-[#806B54] hover:shadow-xl transition-all"
              >
                {/* Visual */}
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

                {/* Narrative */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-2.5">
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
                      <h3 className="text-lg font-medium text-[#202321] group-hover:text-[#806B54] transition-colors leading-snug">
                        {project.title}
                      </h3>
                    </Link>

                    <p className="mt-2 text-xs sm:text-sm text-[#6B6B65] line-clamp-3 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

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
      </div>
    </section>
  );
};

export default FeaturedProjectsHome;
