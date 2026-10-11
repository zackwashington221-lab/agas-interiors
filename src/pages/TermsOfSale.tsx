import React from 'react';

export const TermsOfSale: React.FC = () => {
  return (
    <div className="bg-[#faf9f7] min-h-screen py-12 lg:py-20">
      <div className="mx-auto max-w-[900px] px-5 sm:px-8">
        <span className="eyebrow text-[#825e2d]">Client Terms</span>
        <h1 className="display-l text-[#1a1a1a] mt-2 font-medium">
          Terms of Sale &amp; Delivery Policy
        </h1>
        <p className="mt-2 text-xs text-stone-500 uppercase tracking-wider">
          Effective January 2026 &bull; AGAS Interiors Pakistan
        </p>

        <div className="mt-10 bg-white p-8 sm:p-10 border border-[#e6e2dc] shadow-xs space-y-8 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <section>
            <h2 className="text-base font-semibold text-[#1a1a1a] mb-2">1. Made to Order Manufacturing</h2>
            <p>
              Each piece in the AGAS Interiors catalogue is produced to order in our manufacturing facilities. Production commences following order confirmation and receipt of the advance commitment deposit (minimum 50%).
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1a1a1a] mb-2">2. Production &amp; Delivery Timelines</h2>
            <p>
              Standard lead times for made-to-order bedroom, living, and dining suites range from 15 to 30 business days. Custom modular kitchen installations and bespoke millwork may require additional site measurement and installation scheduling.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1a1a1a] mb-2">3. Nationwide Delivery &amp; White-Glove Setup</h2>
            <p>
              AGAS Interiors coordinates nationwide delivery across all major cities in Pakistan. In Karachi, Lahore, Islamabad, and Rawalpindi, our dedicated crew uncrates and installs furniture inside your residence. Delivery recipients are requested to inspect pieces upon assembly.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1a1a1a] mb-2">4. 10-Year Structural Guarantee</h2>
            <p>
              All sofa frames, bed skeletons, and modular carcasses carry a 10-Year Structural Frame Guarantee against wood warping, structural fracture, and joint degradation. Fabric upholstery, general wear and tear, and accidental damage are not covered under frame structural guarantee.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1a1a1a] mb-2">5. Cancellations &amp; Modifications</h2>
            <p>
              Because fabrics and custom lumber are cut specifically to your specifications, modifications to fabric choices or dimensions must be requested within 48 hours of order confirmation.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
export default TermsOfSale;
