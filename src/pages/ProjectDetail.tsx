import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS, type Project } from '../data/projects';
import { SERVICES } from '../data/services';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/product/ProductCard';
import { useEnquiry } from '../context/EnquiryContext';
import { MapPin, Calendar, Layers, CheckCircle2, ChevronRight, MessageSquare, ArrowLeft, ArrowRight } from 'lucide-react';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { openProjectEnquiry } = useEnquiry();

  const projectIndex = PROJECTS.findIndex((p: Project) => p.slug === slug);
  const project = projectIndex >= 0 ? PROJECTS[projectIndex] : PROJECTS[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#FAF9F7] px-6 text-center">
        <h1 className="text-3xl font-medium text-[#202321] mb-4">Project Not Found</h1>
        <p className="text-sm text-[#6B6B65] mb-8">The architectural case study you are looking for could not be found.</p>
        <Link
          to="/projects"
          className="px-6 py-3 bg-[#202321] text-white text-xs uppercase tracking-wider font-semibold"
        >
          View All Projects
        </Link>
      </div>
    );
  }

  // Cross-reference related services & products
  const relatedServices = SERVICES.filter(s => project.serviceIds.includes(s.id));
  const relatedProducts = PRODUCTS.filter(p => project.productIds.includes(p.id));
  const otherProjects = PROJECTS.filter(p => p.id !== project.id).slice(0, 2);

  const heroImage = project.gallery[0]?.url || '/img/hero/candid-showroom-hero.jpg';

  return (
    <div className="bg-[#FAF9F7] min-h-screen">
      {/* 1. Project Hero */}
      <div className="relative h-[65vh] min-h-[460px] max-h-[680px] bg-[#202321] overflow-hidden">
        <img
          src={heroImage}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#202321] via-black/30 to-black/40" />

        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="mx-auto max-w-[1400px] w-full px-5 sm:px-8 pb-12 sm:pb-16 text-[#F5F3EE]">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-[#B9B3A8] mb-4">
              <Link to="/projects" className="hover:text-white flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>All Projects</span>
              </Link>
              <ChevronRight className="w-3 h-3 text-[#B9B3A8]/60" />
              <span className="text-[#F5F3EE]">{project.title}</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-3">
              {project.categories.map(c => (
                <span
                  key={c}
                  className="text-[0.625rem] font-semibold tracking-[0.1em] uppercase px-2.5 py-1 bg-white/20 backdrop-blur-xs text-white"
                >
                  {c}
                </span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight max-w-4xl leading-tight">
              {project.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 mt-4 text-xs sm:text-sm text-[#B9B3A8]">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#9A8C70]" />
                {project.location}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#9A8C70]" />
                Completed {project.completionYear}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Core Case Study: Brief, Approach, and Scope */}
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Main Narrative Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* The Brief */}
            <div>
              <span className="text-[0.6875rem] font-semibold tracking-[0.14em] uppercase text-[#806B54]">
                The Architectural Brief
              </span>
              <h2 className="text-2xl sm:text-3xl font-medium text-[#202321] mt-2 mb-4">
                Vision &amp; Requirements
              </h2>
              <p className="text-sm sm:text-base text-[#6B6B65] leading-relaxed">
                {project.brief}
              </p>
            </div>

            {/* The Approach */}
            <div className="border-t border-[#E6E2DC] pt-10">
              <span className="text-[0.6875rem] font-semibold tracking-[0.14em] uppercase text-[#806B54]">
                The Design &amp; Craft Solution
              </span>
              <h2 className="text-2xl sm:text-3xl font-medium text-[#202321] mt-2 mb-4">
                Architectural Approach &amp; Execution
              </h2>
              <p className="text-sm sm:text-base text-[#6B6B65] leading-relaxed">
                {project.approach}
              </p>
            </div>

            {/* Scope Delivered */}
            <div className="border-t border-[#E6E2DC] pt-10">
              <span className="text-[0.6875rem] font-semibold tracking-[0.14em] uppercase text-[#806B54]">
                Execution Breakdown
              </span>
              <h2 className="text-xl sm:text-2xl font-medium text-[#202321] mt-2 mb-6">
                Scope of Work Delivered
              </h2>
              <ul className="space-y-3.5">
                {project.scope.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#202321]">
                    <CheckCircle2 className="w-4 h-4 text-[#806B54] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Photographic Gallery */}
            <div className="border-t border-[#E6E2DC] pt-10">
              <span className="text-[0.6875rem] font-semibold tracking-[0.14em] uppercase text-[#806B54]">
                Visual Record
              </span>
              <h2 className="text-2xl sm:text-3xl font-medium text-[#202321] mt-2 mb-6">
                Project Gallery &amp; Detail Shots
              </h2>
              <div className="space-y-6">
                {project.gallery.map((img, idx) => (
                  <figure key={idx} className="bg-white border border-[#E6E2DC] overflow-hidden">
                    <img
                      src={img.url}
                      alt={img.alt}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full max-h-[580px] object-cover"
                    />
                    {img.caption && (
                      <figcaption className="p-4 text-xs text-[#6B6B65] border-t border-[#E6E2DC] bg-[#FAF9F7]">
                        {img.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Sidebar: Materials, Services & CTAs */}
          <div className="lg:col-span-4 space-y-8">
            {/* Quick Consultation Card */}
            <div className="bg-[#202321] text-[#F5F3EE] p-6 sm:p-8">
              <span className="text-[0.625rem] font-semibold tracking-[0.14em] uppercase text-[#B9B3A8] block mb-2">
                Turnkey Architecture &amp; Craft
              </span>
              <h3 className="text-xl font-medium text-white mb-3">
                Commission a Similar Project
              </h3>
              <p className="text-xs text-[#B9B3A8] leading-relaxed mb-6">
                Discuss your Karachi residence or commercial space directly with our senior architectural design and manufacturing team.
              </p>
              <button
                type="button"
                onClick={() => openProjectEnquiry(project)}
                className="w-full py-3.5 px-4 bg-[#806B54] text-white text-xs font-semibold uppercase tracking-[0.12em] hover:bg-[#9A8C70] transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                Enquire for Your Space
              </button>
            </div>

            {/* Materials Palette Card */}
            <div className="bg-white border border-[#E6E2DC] p-6 sm:p-7">
              <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#806B54] mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                Specified Materials
              </h4>
              <ul className="divide-y divide-[#E6E2DC] text-xs">
                {project.materialsUsed.map((mat, i) => (
                  <li key={i} className="py-2.5 text-[#202321] font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#806B54] rounded-full shrink-0" />
                    <span>{mat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Architectural Services Involved */}
            {relatedServices.length > 0 && (
              <div className="bg-white border border-[#E6E2DC] p-6 sm:p-7">
                <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#806B54] mb-4">
                  Disciplines Deployed
                </h4>
                <div className="space-y-3">
                  {relatedServices.map(srv => (
                    <Link
                      key={srv.id}
                      to={`/services/${srv.slug}`}
                      className="group block p-3 border border-[#E6E2DC] hover:border-[#806B54] transition-colors"
                    >
                      <h5 className="text-xs font-semibold uppercase text-[#202321] group-hover:text-[#806B54] transition-colors flex items-center justify-between">
                        <span>{srv.name}</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </h5>
                      <p className="text-[0.6875rem] text-[#6B6B65] mt-1 line-clamp-2">
                        {srv.summary}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 3. Featured Bespoke Products in This Project */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-16 border-t border-[#E6E2DC]">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="text-[0.6875rem] font-semibold tracking-[0.14em] uppercase text-[#806B54]">
                  Authentic Fabrication
                </span>
                <h3 className="text-2xl font-medium text-[#202321] mt-1">
                  Furniture &amp; Millwork Installed in This Property
                </h3>
              </div>
              <Link
                to="/products"
                className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#202321] hover:text-[#806B54]"
              >
                <span>Explore Full Collection</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map(prod => (
                <ProductCard key={prod.id} product={prod} />
              ))}
            </div>
          </div>
        )}

        {/* 4. Cross-Reference Other Projects */}
        {otherProjects.length > 0 && (
          <div className="mt-20 pt-16 border-t border-[#E6E2DC]">
            <h3 className="text-2xl font-medium text-[#202321] mb-8">
              Explore More Architectural Case Studies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherProjects.map(other => (
                <Link
                  key={other.id}
                  to={`/projects/${other.slug}`}
                  className="group bg-white border border-[#E6E2DC] overflow-hidden hover:border-[#806B54] transition-colors flex flex-col sm:flex-row"
                >
                  <div className="sm:w-2/5 aspect-4/3 sm:aspect-square overflow-hidden bg-stone-200">
                    <img
                      src={other.gallery[0]?.url || '/img/hero/candid-showroom-hero.jpg'}
                      alt={other.title}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="sm:w-3/5 p-6 flex flex-col justify-between">
                    <div>
                      <span className="text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-[#806B54]">
                        {other.location}
                      </span>
                      <h4 className="text-base font-medium text-[#202321] mt-1 group-hover:text-[#806B54] transition-colors">
                        {other.title}
                      </h4>
                      <p className="text-xs text-[#6B6B65] mt-2 line-clamp-2">
                        {other.summary}
                      </p>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#202321] inline-flex items-center gap-1 mt-4 group-hover:text-[#806B54]">
                      <span>View Monograph</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
