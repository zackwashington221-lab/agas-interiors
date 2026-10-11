import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Send } from 'lucide-react';
import { useEnquiry } from '../../context/EnquiryContext';
import { useNavigate } from 'react-router-dom';
import { SERVICES } from '../../data/services';

export const EnquiryModal: React.FC = () => {
  const {
    isModalOpen,
    modalType,
    activeProduct,
    activeService,
    closeModal,
    submitEnquiry
  } = useEnquiry();

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('Karachi');
  const [projectType, setProjectType] = useState('House / Villa');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [budgetRange, setBudgetRange] = useState('PKR 1.5M – 3.5M');
  const [timeline, setTimeline] = useState('1 – 3 Months');
  const [message, setMessage] = useState('');
  const [customDimensions, setCustomDimensions] = useState('');
  const [selectedFinish, setSelectedFinish] = useState('');

  useEffect(() => {
    if (activeService) {
      setSelectedServices([activeService.name]);
    } else if (activeProduct) {
      setSelectedServices([activeProduct.category]);
      setSelectedFinish(activeProduct.finishes[0] || '');
      setCustomDimensions(activeProduct.sizes[0] || '');
    } else {
      setSelectedServices(['Interior Design & Furnishing']);
    }
  }, [activeService, activeProduct, modalType]);

  if (!isModalOpen) return null;

  const toggleService = (srvName: string) => {
    setSelectedServices(prev =>
      prev.includes(srvName) ? prev.filter(s => s !== srvName) : [...prev, srvName]
    );
  };

  const handleSubmit = (e: React.FormEvent, viaWhatsApp = false) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const record = submitEnquiry({
      type: modalType,
      name,
      phone,
      email,
      city,
      projectType: modalType === 'project' ? projectType : undefined,
      servicesSelected: selectedServices,
      productId: activeProduct?.id,
      productName: activeProduct?.title,
      productOptions: activeProduct
        ? { size: customDimensions, finish: selectedFinish }
        : undefined,
      serviceId: activeService?.id,
      serviceName: activeService?.name,
      budgetRange: modalType === 'project' ? budgetRange : undefined,
      timeline: modalType === 'project' ? timeline : undefined,
      message: message || (modalType === 'product' ? `Inquiring about quotation and lead time for ${activeProduct?.title}.` : `Requesting spatial consultation.`)
    });

    if (viaWhatsApp) {
      let waText = `*${modalType === 'project' ? 'Project Brief' : modalType === 'product' ? 'Product Quote Request' : 'Service Inquiry'} - AGAS Interiors*\n`;
      waText += `*Reference:* ${record.id}\n`;
      waText += `*Name:* ${name}\n`;
      waText += `*Phone:* ${phone}\n`;
      waText += `*Location:* ${city}\n`;
      if (modalType === 'product' && activeProduct) {
        waText += `*Product:* ${activeProduct.title}\n`;
        waText += `*Config:* ${customDimensions} | ${selectedFinish}\n`;
      }
      if (modalType === 'project') {
        waText += `*Property:* ${projectType}\n`;
        waText += `*Services:* ${selectedServices.join(', ')}\n`;
        waText += `*Budget:* ${budgetRange}\n`;
      }
      if (message) waText += `*Notes:* ${message}\n`;

      window.open(`https://wa.me/923158739625?text=${encodeURIComponent(waText)}`, '_blank');
    }

    navigate('/thank-you');
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#202321]/80 backdrop-blur-xs transition-opacity"
        onClick={closeModal}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-2xl bg-[#F5F3EE] border border-[#B9B3A8] shadow-2xl p-6 sm:p-8 my-8 max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={closeModal}
          className="absolute top-4 right-4 p-2 text-stone-500 hover:text-[#202321] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <span className="text-[0.6875rem] font-semibold tracking-[0.12em] uppercase text-[#806B54]">
            {modalType === 'product'
              ? 'Product Quotation Request'
              : modalType === 'service'
              ? 'Service Consultation'
              : 'Architectural Project Brief'}
          </span>
          <h2 className="text-xl sm:text-2xl font-medium text-[#202321] mt-1 leading-snug">
            {modalType === 'product' && activeProduct
              ? `Request Quote: ${activeProduct.title}`
              : modalType === 'service' && activeService
              ? `Inquire About ${activeService.name}`
              : 'Tell Us About Your Space'}
          </h2>
          <p className="mt-1.5 text-xs text-[#6B6B65] leading-relaxed">
            {modalType === 'product'
              ? 'Receive a formal quotation with material breakdowns and workshop lead times.'
              : 'Our Karachi design office reviews every brief to assess feasibility, budget alignment, and spatial layouts.'}
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={e => handleSubmit(e, false)} className="space-y-4">
          {/* Product Specific Customization Context */}
          {modalType === 'product' && activeProduct && (
            <div className="bg-white p-4 border border-[#B9B3A8]/60 mb-4 flex gap-4 items-center">
              <img
                src={activeProduct.images[0]}
                alt={activeProduct.title}
                className="w-16 h-16 object-cover bg-stone-100"
              />
              <div className="flex-1 text-xs">
                <h4 className="font-semibold text-[#202321]">{activeProduct.title}</h4>
                <p className="text-stone-500 mt-0.5">Manufacturing: {activeProduct.leadTime}</p>
                <div className="mt-2 flex flex-wrap gap-2 text-[0.6875rem]">
                  {activeProduct.sizes.length > 0 && (
                    <span className="bg-[#F5F3EE] px-2 py-0.5 border border-stone-300">
                      Size: {customDimensions || activeProduct.sizes[0]}
                    </span>
                  )}
                  {activeProduct.finishes.length > 0 && (
                    <span className="bg-[#F5F3EE] px-2 py-0.5 border border-stone-300">
                      Finish: {selectedFinish || activeProduct.finishes[0]}
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[0.6875rem] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="e.g. Asad Malik"
                className="w-full bg-white border border-[#B9B3A8] px-3.5 py-2.5 text-xs text-[#202321] focus:outline-none focus:border-[#806B54]"
              />
            </div>

            <div>
              <label className="block text-[0.6875rem] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                Phone / WhatsApp *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="+92 3XX XXXXXXX"
                className="w-full bg-white border border-[#B9B3A8] px-3.5 py-2.5 text-xs text-[#202321] focus:outline-none focus:border-[#806B54]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[0.6875rem] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                Email Address (Optional)
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="name@domain.com"
                className="w-full bg-white border border-[#B9B3A8] px-3.5 py-2.5 text-xs text-[#202321] focus:outline-none focus:border-[#806B54]"
              />
            </div>

            <div>
              <label className="block text-[0.6875rem] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                Project Location / City
              </label>
              <select
                value={city}
                onChange={e => setCity(e.target.value)}
                className="w-full bg-white border border-[#B9B3A8] px-3.5 py-2.5 text-xs text-[#202321] focus:outline-none focus:border-[#806B54]"
              >
                <option value="Karachi - D.H.A.">Karachi &ndash; D.H.A. (Phases 1&ndash;8)</option>
                <option value="Karachi - Clifton">Karachi &ndash; Clifton &amp; Sea View</option>
                <option value="Karachi - KDA / Tipu Sultan">Karachi &ndash; KDA / Tipu Sultan</option>
                <option value="Karachi - PECHS">Karachi &ndash; PECHS &amp; SMCHS</option>
                <option value="Karachi - Bahria Town">Karachi &ndash; Bahria Town</option>
                <option value="Karachi - Other">Karachi &ndash; Other Area</option>
                <option value="Lahore">Lahore (Furniture Commission)</option>
                <option value="Islamabad / Rawalpindi">Islamabad / Rawalpindi (Furniture Commission)</option>
                <option value="Other">Other City</option>
              </select>
            </div>
          </div>

          {/* Project Mode Fields */}
          {modalType === 'project' && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[0.6875rem] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Property Type
                  </label>
                  <select
                    value={projectType}
                    onChange={e => setProjectType(e.target.value)}
                    className="w-full bg-white border border-[#B9B3A8] px-3.5 py-2.5 text-xs text-[#202321] focus:outline-none focus:border-[#806B54]"
                  >
                    <option value="House / Villa">Complete House / Villa (500–2,000 sq yd)</option>
                    <option value="Apartment / Penthouse">Apartment / Seafront Penthouse</option>
                    <option value="Commercial / Office">Corporate Office / Retail</option>
                    <option value="Single Room">Individual Room / Master Suite</option>
                    <option value="Rooftop / Terrace">Rooftop Terrace / Garden</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[0.6875rem] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Estimated Budget Range
                  </label>
                  <select
                    value={budgetRange}
                    onChange={e => setBudgetRange(e.target.value)}
                    className="w-full bg-white border border-[#B9B3A8] px-3.5 py-2.5 text-xs text-[#202321] focus:outline-none focus:border-[#806B54]"
                  >
                    <option value="Under PKR 1.5M">Under PKR 1.5M (Single area / piece)</option>
                    <option value="PKR 1.5M – 3.5M">PKR 1.5M – 3.5M (Selective renovation)</option>
                    <option value="PKR 3.5M – 8.0M">PKR 3.5M – 8.0M (Full floor / apartment)</option>
                    <option value="PKR 8.0M+">PKR 8.0M+ (Whole villa turnkey)</option>
                    <option value="Undetermined">To be determined during site visit</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[0.6875rem] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                  Target Move-in / Completion Timeline
                </label>
                <select
                  value={timeline}
                  onChange={e => setTimeline(e.target.value)}
                  className="w-full bg-white border border-[#B9B3A8] px-3.5 py-2.5 text-xs text-[#202321] focus:outline-none focus:border-[#806B54]"
                >
                  <option value="Immediate (Within 30 Days)">Immediate (Within 30 Days)</option>
                  <option value="1 – 3 Months">1 – 3 Months</option>
                  <option value="3 – 6 Months">3 – 6 Months</option>
                  <option value="6+ Months / Planning Phase">6+ Months / Early Planning Phase</option>
                </select>
              </div>

              {/* Multi-Select Services Required */}
              <div>
                <label className="block text-[0.6875rem] font-semibold uppercase tracking-wider text-stone-700 mb-2">
                  Required Service Disciplines (Select all that apply)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {SERVICES.map(srv => {
                    const active = selectedServices.includes(srv.name);
                    return (
                      <button
                        key={srv.id}
                        type="button"
                        onClick={() => toggleService(srv.name)}
                        className={`text-left p-2.5 text-[0.6875rem] border transition-all ${
                          active
                            ? 'bg-[#202321] text-white border-[#202321] font-medium'
                            : 'bg-white text-stone-700 border-[#B9B3A8] hover:border-stone-500'
                        }`}
                      >
                        {srv.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            </>
          )}

          {/* Description / Notes */}
          <div>
            <label className="block text-[0.6875rem] font-semibold uppercase tracking-wider text-stone-700 mb-1">
              Project Description / Specific Requirements
            </label>
            <textarea
              rows={3}
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder={
                modalType === 'product'
                  ? 'Specify any preferred fabric grades, wood stains, or dimensional adjustments...'
                  : 'Describe your vision, current condition of the property, or target move-in dates...'
              }
              className="w-full bg-white border border-[#B9B3A8] px-3.5 py-2.5 text-xs text-[#202321] focus:outline-none focus:border-[#806B54]"
            />
          </div>

          {/* CTAs */}
          <div className="pt-4 border-t border-[#B9B3A8] space-y-2.5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="submit"
                className="w-full bg-[#202321] text-white py-3.5 px-4 text-xs font-semibold uppercase tracking-[0.1em] hover:bg-[#806B54] transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Submit Formal Brief
              </button>

              <button
                type="button"
                onClick={e => handleSubmit(e, true)}
                className="w-full bg-[#25D366] text-white py-3.5 px-4 text-xs font-semibold uppercase tracking-[0.08em] hover:bg-[#1ebc59] transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Send via WhatsApp Directly
              </button>
            </div>

            <p className="text-[0.6875rem] text-center text-stone-500">
              Your details are used strictly to coordinate your architectural consultation and will never be shared.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
