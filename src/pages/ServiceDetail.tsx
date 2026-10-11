import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES } from '../data/services';
import { PROJECTS } from '../data/projects';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/product/ProductCard';
import { useEnquiry } from '../context/EnquiryContext';
import { ChevronRight, CheckCircle2, ArrowRight, MessageSquare, Layers, HelpCircle } from 'lucide-react';

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams();
  const { openServiceEnquiry } = useEnquiry();

  const service = SERVICES.find(s => s.slug === slug) || SERVICES[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Find related projects
  const relatedProjects = PROJECTS.filter(p => service.relatedProjectIds.includes(p.id));

  // Find related products
  const relatedProducts = PRODUCTS.filter(
    p =>
      service.relatedProductCategory
        ? p.category.toLowerCase() === service.relatedProductCategory.toLowerCase()
        : p.category === 'Bedroom' || p.category === 'Living'
  ).slice(0, 4);

  return (
    <div className="bg-[#FAF9F7] min-h-screen py-10 lg:py-16">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 mb-8">
          <Link to="/" className="hover:text-[#202321]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/services" className="hover:text-[#202321]">Services</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#202321] font-medium truncate">{service.name}</span>
        </nav>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16 pb-12 border-b border-[#B9B3A8]">
          <div className="lg:col-span-7">
            <span className="text-[0.6875rem] font-semibold tracking-[0.14em] uppercase text-[#806B54]">
              Service Discipline
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#202321] mt-2 leading-tight">
              {service.name}
            </h1>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#6B6B65]">
              {service.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => openServiceEnquiry(service)}
                className="bg-[#202321] text-white px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.1em] hover:bg-[#806B54] transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                Request Consultation for this Service
              </button>
              <Link
                to="/contact"
                className="border border-[#202321] text-[#202321] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.1em] hover:bg-[#202321] hover:text-white transition-colors"
              >
                Karachi Studio Visit
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 aspect-4/3 overflow-hidden bg-stone-200 shadow-md">
            <img
              src={service.gallery[0]?.url || '/img/tile/bedroom-furniture.webp'}
              alt={service.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Inclusions & Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Scope & Inclusions */}
          <div className="bg-white p-8 border border-[#B9B3A8]">
            <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#202321] mb-6 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#806B54]" />
              Scope of Works &amp; Inclusions
            </h2>
            <ul className="space-y-3.5 text-xs sm:text-sm text-stone-700">
              {service.inclusions.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#806B54] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Materials & Finishes */}
          <div className="bg-white p-8 border border-[#B9B3A8]">
            <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#202321] mb-6 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#806B54]" />
              Material Palette &amp; Standards
            </h2>
            <ul className="space-y-3.5 text-xs sm:text-sm text-stone-700">
              {service.materials.map((mat, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#806B54] shrink-0 mt-1.5" />
                  <span>{mat}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 bg-[#F5F3EE] border border-stone-300 text-xs text-stone-600">
              <p className="font-semibold text-stone-800 mb-1">Material Integrity</p>
              <p>Physical timber swatches, marble cuts, and fabric catalogs are presented during your design consultation for tactile approval.</p>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <h2 className="text-2xl font-medium text-[#202321] mb-8">
            How We Execute This Service
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {service.process.map((step, idx) => (
              <div key={idx} className="bg-white p-5 border border-[#B9B3A8]">
                <span className="text-xs font-mono font-semibold text-[#806B54]">0{idx + 1}</span>
                <p className="mt-2 text-xs font-medium text-[#202321] leading-snug">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Case Studies / Projects */}
        {relatedProjects.length > 0 && (
          <div className="mb-20 pt-12 border-t border-[#B9B3A8]">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-[0.6875rem] font-semibold tracking-[0.12em] uppercase text-[#806B54]">
                  Portfolio Evidence
                </span>
                <h2 className="text-2xl font-medium text-[#202321] mt-1">
                  Completed Projects Featuring {service.name}
                </h2>
              </div>
              <Link
                to="/projects"
                className="text-xs font-semibold uppercase tracking-wider text-[#202321] hover:text-[#806B54]"
              >
                View All Projects &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map(proj => (
                <article key={proj.id} className="bg-white border border-[#B9B3A8] overflow-hidden group">
                  <div className="aspect-16/10 overflow-hidden relative">
                    <img
                      src={proj.gallery[0]?.url}
                      alt={proj.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute bottom-3 left-3 bg-[#202321]/90 text-white text-[0.625rem] font-semibold px-2.5 py-1 uppercase tracking-wider">
                      {proj.location}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-base font-semibold text-[#202321] group-hover:text-[#806B54] transition-colors">
                      <Link to={`/projects/${proj.slug}`}>
                        {proj.title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-[#6B6B65] line-clamp-2">
                      {proj.summary}
                    </p>
                    <Link
                      to={`/projects/${proj.slug}`}
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#806B54] hover:underline"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Related Custom Manufactured Products */}
        {relatedProducts.length > 0 && (
          <div className="mb-20 pt-12 border-t border-[#B9B3A8]">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-[0.6875rem] font-semibold tracking-[0.12em] uppercase text-[#806B54]">
                  Manufacturing Division
                </span>
                <h2 className="text-2xl font-medium text-[#202321] mt-1">
                  Custom Pieces Made For This Discipline
                </h2>
              </div>
              <Link
                to="/products"
                className="text-xs font-semibold uppercase tracking-wider text-[#202321] hover:text-[#806B54]"
              >
                Browse Full Catalogue &rarr;
              </Link>
            </div>

            <ul className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map(prod => (
                <li key={prod.id}>
                  <ProductCard product={prod} />
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <div className="pt-12 border-t border-[#B9B3A8] max-w-3xl">
            <h2 className="text-xl font-medium text-[#202321] mb-6 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#806B54]" />
              Questions About {service.name}
            </h2>
            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="bg-white p-6 border border-[#B9B3A8]">
                  <h3 className="text-xs sm:text-sm font-semibold text-[#202321] mb-2">{faq.q}</h3>
                  <p className="text-xs leading-relaxed text-[#6B6B65]">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default ServiceDetail;
