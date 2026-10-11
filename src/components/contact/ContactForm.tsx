import React, { useState } from 'react';
import { Upload, CheckCircle2, AlertCircle } from 'lucide-react';
import {
  submitProjectInquiry,
  validateReferenceFile,
  type ProjectTypeOption,
} from '../../utils/inquiryService';

const projectTypes: ProjectTypeOption[] = [
  'Villa',
  'Apartment',
  'Commercial',
  'Furniture',
  'Landscape',
  'Rooftop',
  'Other',
];

const budgetRanges = [
  'PKR 5M – 15M (Bespoke Room / Furniture)',
  'PKR 15M – 35M (Apartment / Partial Villa)',
  'PKR 35M – 75M (1-Kanal Turnkey Villa)',
  'PKR 75M+ (2-Kanal+ Estate / Flagship)',
];

const timelineOptions = [
  'Immediate (Within 30 Days)',
  '1 – 3 Months',
  '3 – 6 Months',
  'Planning / Architectural Stage',
];

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  location?: string;
  description?: string;
  file?: string;
  submit?: string;
}

/**
 * 32. CONTACT PAGE & 33. FORM UX
 * Accessible project inquiry form with selectable project types, budget ranges,
 * floor plan upload validation, loading state, error state, and editorial success screen.
 */
export const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState<ProjectTypeOption>('Villa');
  const [location, setLocation] = useState('');
  const [budgetRange, setBudgetRange] = useState(budgetRanges[2]);
  const [timeline, setTimeline] = useState(timelineOptions[1]);
  const [description, setDescription] = useState('');
  const [referenceFile, setReferenceFile] = useState<File | null>(null);

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!name.trim()) {
      nextErrors.name = 'Please enter your full name.';
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = 'Please provide a valid email address.';
    }
    if (!phone.trim() || phone.trim().length < 7) {
      nextErrors.phone = 'Please enter a reachable contact number.';
    }
    if (!location.trim()) {
      nextErrors.location = 'Please specify the project city or sector.';
    }
    if (!description.trim() || description.trim().length < 15) {
      nextErrors.description =
        'Please share a brief overview of your space and architectural goals (minimum 15 characters).';
    }
    const fileCheck = validateReferenceFile(referenceFile);
    if (!fileCheck.valid) {
      nextErrors.file = fileCheck.error;
    }
    return nextErrors;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    const check = validateReferenceFile(file);
    if (!check.valid) {
      setErrors((prev) => ({ ...prev, file: check.error }));
      setReferenceFile(null);
    } else {
      setErrors((prev) => ({ ...prev, file: undefined }));
      setReferenceFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitting(true);

    try {
      const response = await submitProjectInquiry({
        name,
        email,
        phone,
        projectType,
        location,
        budgetRange,
        timeline,
        description,
        referenceFileName: referenceFile?.name,
        referenceFileSize: referenceFile?.size,
      });

      if (!response.ok) {
        setErrors({
          submit:
            response.errorMessage ||
            'Unable to submit your project brief right now. Please try again.',
        });
      } else {
        setSubmittedRef(response.referenceCode);
      }
    } catch {
      setErrors({
        submit: 'An unexpected network error occurred. Please try again.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (submittedRef) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="bg-[#171717] text-[#F5F1E8] p-10 sm:p-16 border border-[#B49A72]/40"
      >
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#B49A72] mb-6">
          <CheckCircle2 className="w-4 h-4" />
          <span>INQUIRY REGISTERED · {submittedRef}</span>
        </div>

        <h3 className="font-serif-editorial text-4xl sm:text-6xl leading-[0.98] tracking-tight text-[#F5F1E8] uppercase mb-8">
          THANK YOU.
          <br />
          <br />
          YOUR PROJECT DETAILS
          <br />
          HAVE BEEN RECEIVED.
          <br />
          <br />
          <span className="text-[#D8CBB8] italic font-normal">
            WE&apos;LL BE IN TOUCH SOON.
          </span>
        </h3>

        <p className="text-sm text-[#D8CBB8]/85 font-light max-w-lg leading-relaxed mb-10">
          Our Principal Architect reviews every commission personally. Expect a private
          consultation response within one business day.
        </p>

        <button
          type="button"
          onClick={() => {
            setSubmittedRef(null);
            setName('');
            setEmail('');
            setPhone('');
            setLocation('');
            setDescription('');
            setReferenceFile(null);
          }}
          className="text-xs uppercase tracking-[0.24em] text-[#B49A72] hover:text-[#F5F1E8] border-b border-[#B49A72] pb-1 transition-colors"
        >
          SUBMIT ANOTHER COMMISSION →
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Project Inquiry Form"
      className="space-y-10"
    >
      {errors.submit && (
        <div
          role="alert"
          className="p-4 border border-[#4A3528] bg-[#4A3528]/10 text-[#171717] flex items-center gap-3 text-xs"
        >
          <AlertCircle className="w-4 h-4 text-[#4A3528] shrink-0" />
          <span>{errors.submit}</span>
        </div>
      )}

      {/* Row 1: Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label
            htmlFor="inquiry-name"
            className="block text-[11px] uppercase tracking-[0.26em] text-[#4A3528] mb-3 font-medium"
          >
            NAME *
          </label>
          <input
            id="inquiry-name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'error-name' : undefined}
            className="w-full bg-transparent border-b border-[#91877A]/50 py-3.5 text-sm text-[#171717] placeholder:text-[#91877A]/70 focus:border-[#171717] focus:outline-none transition-colors"
          />
          {errors.name && (
            <p id="error-name" className="mt-2 text-xs text-[#4A3528] font-medium">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="inquiry-email"
            className="block text-[11px] uppercase tracking-[0.26em] text-[#4A3528] mb-3 font-medium"
          >
            EMAIL *
          </label>
          <input
            id="inquiry-email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@domain.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'error-email' : undefined}
            className="w-full bg-transparent border-b border-[#91877A]/50 py-3.5 text-sm text-[#171717] placeholder:text-[#91877A]/70 focus:border-[#171717] focus:outline-none transition-colors"
          />
          {errors.email && (
            <p id="error-email" className="mt-2 text-xs text-[#4A3528] font-medium">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Row 2: Phone & Project Location */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label
            htmlFor="inquiry-phone"
            className="block text-[11px] uppercase tracking-[0.26em] text-[#4A3528] mb-3 font-medium"
          >
            PHONE *
          </label>
          <input
            id="inquiry-phone"
            name="phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+92 300 0000000"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'error-phone' : undefined}
            className="w-full bg-transparent border-b border-[#91877A]/50 py-3.5 text-sm text-[#171717] placeholder:text-[#91877A]/70 focus:border-[#171717] focus:outline-none transition-colors"
          />
          {errors.phone && (
            <p id="error-phone" className="mt-2 text-xs text-[#4A3528] font-medium">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="inquiry-location"
            className="block text-[11px] uppercase tracking-[0.26em] text-[#4A3528] mb-3 font-medium"
          >
            PROJECT LOCATION *
          </label>
          <input
            id="inquiry-location"
            name="location"
            type="text"
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g. DHA Phase 8, Lahore / F-7, Islamabad"
            aria-invalid={Boolean(errors.location)}
            aria-describedby={errors.location ? 'error-location' : undefined}
            className="w-full bg-transparent border-b border-[#91877A]/50 py-3.5 text-sm text-[#171717] placeholder:text-[#91877A]/70 focus:border-[#171717] focus:outline-none transition-colors"
          />
          {errors.location && (
            <p id="error-location" className="mt-2 text-xs text-[#4A3528] font-medium">
              {errors.location}
            </p>
          )}
        </div>
      </div>

      {/* Row 3: Selectable Project Type Pills */}
      <fieldset>
        <legend className="block text-[11px] uppercase tracking-[0.26em] text-[#4A3528] mb-4 font-medium">
          PROJECT TYPE
        </legend>
        <div className="flex flex-wrap gap-2.5">
          {projectTypes.map((type) => {
            const active = projectType === type;
            return (
              <button
                key={type}
                type="button"
                aria-pressed={active}
                onClick={() => setProjectType(type)}
                className={`px-5 py-2.5 text-xs uppercase tracking-[0.22em] border transition-colors ${
                  active
                    ? 'bg-[#171717] text-[#F5F1E8] border-[#171717]'
                    : 'bg-transparent text-[#171717] border-[#91877A]/40 hover:border-[#171717]'
                }`}
              >
                {type}
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* Row 4: Selectable Budget Range & Estimated Timeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label
            htmlFor="inquiry-budget"
            className="block text-[11px] uppercase tracking-[0.26em] text-[#4A3528] mb-3 font-medium"
          >
            BUDGET RANGE
          </label>
          <select
            id="inquiry-budget"
            name="budgetRange"
            value={budgetRange}
            onChange={(e) => setBudgetRange(e.target.value)}
            className="w-full bg-[#F5F1E8] border-b border-[#91877A]/50 py-3.5 text-sm text-[#171717] focus:border-[#171717] focus:outline-none"
          >
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="inquiry-timeline"
            className="block text-[11px] uppercase tracking-[0.26em] text-[#4A3528] mb-3 font-medium"
          >
            ESTIMATED TIMELINE
          </label>
          <select
            id="inquiry-timeline"
            name="timeline"
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
            className="w-full bg-[#F5F1E8] border-b border-[#91877A]/50 py-3.5 text-sm text-[#171717] focus:border-[#171717] focus:outline-none"
          >
            {timelineOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 5: Project Description */}
      <div>
        <label
          htmlFor="inquiry-description"
          className="block text-[11px] uppercase tracking-[0.26em] text-[#4A3528] mb-3 font-medium"
        >
          PROJECT DESCRIPTION *
        </label>
        <textarea
          id="inquiry-description"
          name="description"
          rows={4}
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Tell us about your property size, architectural aspirations, rooms or outdoor spaces to be transformed..."
          aria-invalid={Boolean(errors.description)}
          aria-describedby={errors.description ? 'error-description' : undefined}
          className="w-full bg-transparent border border-[#91877A]/40 p-4 text-sm text-[#171717] placeholder:text-[#91877A]/70 focus:border-[#171717] focus:outline-none transition-colors"
        />
        {errors.description && (
          <p id="error-description" className="mt-2 text-xs text-[#4A3528] font-medium">
            {errors.description}
          </p>
        )}
      </div>

      {/* Row 6: Reference / Floor Plan Upload */}
      <div>
        <label
          htmlFor="inquiry-floorplan"
          className="block text-[11px] uppercase tracking-[0.26em] text-[#4A3528] mb-3 font-medium"
        >
          REFERENCE / FLOOR PLAN UPLOAD (OPTIONAL)
        </label>
        <label
          htmlFor="inquiry-floorplan"
          className="flex items-center justify-between gap-4 border border-dashed border-[#91877A]/55 p-5 cursor-pointer hover:border-[#171717] transition-colors bg-[#D8CBB8]/15"
        >
          <div className="flex items-center gap-3.5">
            <Upload className="w-4 h-4 text-[#4A3528]" />
            <span className="text-xs text-[#171717]">
              {referenceFile
                ? `${referenceFile.name} (${Math.round(referenceFile.size / 1024)} KB)`
                : 'Attach architectural floor plan, site photos, or moodboard (PDF, JPG, PNG, WEBP, DWG)'}
            </span>
          </div>
          <span className="text-[10px] uppercase tracking-[0.22em] text-[#4A3528] font-medium shrink-0">
            BROWSE FILE
          </span>
          <input
            id="inquiry-floorplan"
            name="floorplan"
            type="file"
            accept=".pdf,.jpg,.jpeg,.png,.webp,.dwg"
            onChange={handleFileChange}
            className="sr-only"
          />
        </label>
        {errors.file && (
          <p className="mt-2 text-xs text-[#4A3528] font-medium">{errors.file}</p>
        )}
      </div>

      {/* Submit CTA */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={submitting}
          data-cursor="cta"
          className="group inline-flex items-center justify-center gap-4 bg-[#171717] text-[#F5F1E8] px-9 py-5 text-xs uppercase tracking-[0.26em] font-medium hover:bg-[#4A3528] transition-colors duration-500 disabled:opacity-50"
        >
          <span>{submitting ? 'SENDING PROJECT BRIEF...' : 'START A CONVERSATION'}</span>
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1.5"
          >
            →
          </span>
        </button>
      </div>
    </form>
  );
};
