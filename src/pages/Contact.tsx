import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Showroom Visit',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMsg = `*AGAS Interiors Showroom Inquiry*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Subject:* ${formData.subject}\n*Message:* ${formData.message}`;
    window.open(`https://wa.me/923158739625?text=${encodeURIComponent(whatsappMsg)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="bg-[#faf9f7] min-h-screen py-12 lg:py-16">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Title */}
        <div className="max-w-2xl mb-12">
          <span className="eyebrow text-[#825e2d]">Connect with AGAS</span>
          <h1 className="display-l text-[#1a1a1a] mt-2 font-medium">
            Visit Our Showroom in D.H.A., Karachi
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-stone-600">
            Experience our pieces on the showroom floor. Our design concierges are available to assist with room measurements, finish samples, and custom architectural commissions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Info & Showroom Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-8 border border-[#e6e2dc] shadow-xs">
              <h3 className="text-sm font-semibold tracking-[0.1em] uppercase text-[#1a1a1a] mb-6">
                Showroom Details
              </h3>

              <div className="space-y-6 text-xs text-stone-700">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#825e2d] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900 font-semibold mb-0.5">Flagship Address</strong>
                    <span>Shop 2, Plot 17-C, Lane 7, Khayaban-e-Sehar, Phase 7, D.H.A., Karachi, 75500, Pakistan</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-[#825e2d] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900 font-semibold mb-0.5">Showroom Timings</strong>
                    <span>Monday &ndash; Saturday: 09:00 AM &ndash; 09:00 PM</span>
                    <span className="block text-stone-500 mt-0.5">Sunday: By appointment only</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-[#825e2d] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900 font-semibold mb-0.5">Direct Helpline</strong>
                    <a href="tel:+923158739625" className="text-[#a67c3d] hover:underline font-medium">
                      0315 8739625
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-[#825e2d] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900 font-semibold mb-0.5">Email Concierge</strong>
                    <a href="mailto:ahsan.gaffar00123@gmail.com" className="text-stone-700 hover:underline">
                      ahsan.gaffar00123@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#e6e2dc]">
                <a
                  href="https://wa.me/923158739625?text=Hi%20AGAS%20Interiors%2C%20I%20would%20like%20to%20plan%20a%20showroom%20visit."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 px-4 text-xs font-semibold uppercase tracking-[0.08em] hover:bg-[#1ebc59] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp Directly
                </a>
              </div>
            </div>

            {/* Nationwide Delivery Note */}
            <div className="bg-[#f2f0ec] p-6 border border-[#e6e2dc] text-xs text-stone-700">
              <h4 className="font-semibold text-stone-900 uppercase tracking-wider mb-2">
                Delivering Nationwide Across Pakistan
              </h4>
              <p className="leading-relaxed">
                Orders for Lahore, Islamabad, Rawalpindi, Peshawar, Multan, and Faisalabad are scheduled with dedicated white-glove transport and on-site assembly technicians.
              </p>
            </div>
          </div>

          {/* Right: Interactive Message & Appointment Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-[#e6e2dc] shadow-xs">
            <span className="eyebrow text-[#825e2d]">Inquiry &amp; Appointments</span>
            <h3 className="text-xl font-medium text-[#1a1a1a] mt-1 mb-6">
              Send an Inquiry or Schedule a Visit
            </h3>

            {submitted ? (
              <div className="py-16 text-center">
                <CheckCircle2 className="w-12 h-12 text-[#3f7d5c] mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-[#1a1a1a]">Message Sent</h4>
                <p className="text-xs text-stone-600 mt-2 max-w-sm mx-auto">
                  Our showroom concierge has received your inquiry. We will contact you shortly to confirm your consultation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[0.6875rem] font-semibold uppercase tracking-wider text-stone-600 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name"
                      className="w-full bg-[#faf9f7] border border-[#d3cec6] px-3.5 py-2.5 text-xs text-[#1a1a1a] focus:outline-none focus:border-[#a67c3d]"
                    />
                  </div>

                  <div>
                    <label className="block text-[0.6875rem] font-semibold uppercase tracking-wider text-stone-600 mb-1">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+92 300 0000000"
                      className="w-full bg-[#faf9f7] border border-[#d3cec6] px-3.5 py-2.5 text-xs text-[#1a1a1a] focus:outline-none focus:border-[#a67c3d]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[0.6875rem] font-semibold uppercase tracking-wider text-stone-600 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@domain.com"
                      className="w-full bg-[#faf9f7] border border-[#d3cec6] px-3.5 py-2.5 text-xs text-[#1a1a1a] focus:outline-none focus:border-[#a67c3d]"
                    />
                  </div>

                  <div>
                    <label className="block text-[0.6875rem] font-semibold uppercase tracking-wider text-stone-600 mb-1">
                      Purpose of Contact
                    </label>
                    <select
                      value={formData.subject}
                      onChange={e => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#faf9f7] border border-[#d3cec6] px-3.5 py-2.5 text-xs text-[#1a1a1a] focus:outline-none focus:border-[#a67c3d]"
                    >
                      <option value="Showroom Visit">Book Karachi Showroom Visit</option>
                      <option value="Custom Furniture Inquiry">Custom Furniture Commission</option>
                      <option value="Modular Kitchen Consultation">Nordika Modular Kitchen Planning</option>
                      <option value="Interior Design Consultation">Complete Residential Turnkey</option>
                      <option value="Order Tracking">Existing Order Tracking</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[0.6875rem] font-semibold uppercase tracking-wider text-stone-600 mb-1">
                    Your Message / Requirements
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the room, your timeline, or any specific pieces you have in mind..."
                    className="w-full bg-[#faf9f7] border border-[#d3cec6] px-3.5 py-2.5 text-xs text-[#1a1a1a] focus:outline-none focus:border-[#a67c3d]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1a1a1a] text-white py-3.5 px-6 text-xs font-semibold uppercase tracking-[0.1em] hover:bg-[#a67c3d] transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Submit Inquiry via Concierge
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
