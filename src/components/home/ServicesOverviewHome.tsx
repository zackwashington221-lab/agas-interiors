import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, type Service } from '../../data/services';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useEnquiry } from '../../context/EnquiryContext';

export const ServicesOverviewHome: React.FC = () => {
  const { openServiceEnquiry } = useEnquiry();

  return (
    <section className="py-20 lg:py-28 bg-[#F5F3EE] border-t border-[#E6E2DC]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <span className="text-[0.6875rem] font-semibold tracking-[0.14em] uppercase text-[#806B54]">
              Multi-Disciplinary Design Studio
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium text-[#202321] mt-2 leading-tight">
              Architectural &amp; Manufacturing Services
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#6B6B65] leading-relaxed">
              Every stage of your project is coordinated under one roof: from spatial layouts and material specification to custom factory fabrication and site installation.
            </p>
          </div>
          <Link
            to="/services"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#202321] hover:text-[#806B54] transition-colors"
          >
            <span>Explore All 7 Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Services Grid (6 services in home view) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.slice(0, 6).map((service: Service) => {
            const previewImage = service.gallery[0]?.url || '/img/tile/living-room-furniture.jpg';
            return (
              <div
                key={service.id}
                className="bg-white border border-[#E6E2DC] p-7 flex flex-col justify-between hover:border-[#806B54] transition-colors group"
              >
                <div>
                  <div className="aspect-16/9 mb-5 overflow-hidden bg-stone-200">
                    <img
                      src={previewImage}
                      alt={service.name}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <Link to={`/services/${service.slug}`}>
                    <h3 className="text-xl font-medium text-[#202321] group-hover:text-[#806B54] transition-colors">
                      {service.name}
                    </h3>
                  </Link>

                  <p className="mt-2 text-xs sm:text-sm text-[#6B6B65] line-clamp-3 leading-relaxed">
                    {service.summary}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-[#E6E2DC] pt-4 text-xs text-[#202321]">
                    {service.inclusions.slice(0, 3).map((inc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#806B54] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E6E2DC] flex items-center justify-between">
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-xs font-semibold uppercase tracking-[0.1em] text-[#202321] inline-flex items-center gap-1 group-hover:text-[#806B54] transition-colors"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => openServiceEnquiry(service)}
                    className="text-[0.6875rem] font-medium text-[#806B54] hover:underline"
                  >
                    Consult
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverviewHome;
