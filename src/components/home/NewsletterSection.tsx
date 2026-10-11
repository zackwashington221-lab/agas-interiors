import React, { useState } from 'react';
import { Check } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#faf9f7] border-b border-[#e6e2dc]">
      <div className="mx-auto max-w-[800px] px-5 sm:px-8 text-center">
        <p className="eyebrow text-[#825e2d]">Stay in touch</p>
        <h2 className="display-l mt-2 text-[#1a1a1a]">
          New pieces, room ideas, and the occasional markdown.
        </h2>
        <p className="mt-3.5 text-[0.9375rem] leading-relaxed text-stone-600 max-w-xl mx-auto">
          No countdown timers and no daily email. Unsubscribe in one click.
        </p>

        {subscribed ? (
          <div className="mt-8 p-4 bg-stone-100 border border-[#a67c3d] text-stone-800 text-sm font-medium flex items-center justify-center gap-2">
            <Check className="w-5 h-5 text-[#a67c3d]" />
            Thank you for subscribing to AGAS Interiors journal &amp; private releases.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 bg-white border border-[#d3cec6] px-4 py-3 text-xs text-[#1a1a1a] placeholder-stone-400 focus:outline-none focus:border-[#a67c3d]"
              />
              <button
                type="submit"
                className="bg-[#1a1a1a] text-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] hover:bg-[#a67c3d] transition-colors"
              >
                Subscribe
              </button>
            </div>
            <p className="mt-3 text-[0.6875rem] text-stone-500">
              By signing up you agree to receive marketing updates from AGAS Interiors. We do not sell or share your address.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};
