/**
 * Project Inquiry & File Upload Service Abstraction (Section 33 & 50)
 * Separates submission & file handling from presentation components.
 */

export type ProjectTypeOption =
  | 'Villa'
  | 'Apartment'
  | 'Commercial'
  | 'Furniture'
  | 'Landscape'
  | 'Rooftop'
  | 'Other';

export interface ProjectInquiryPayload {
  name: string;
  email: string;
  phone: string;
  projectType: ProjectTypeOption;
  location: string;
  budgetRange: string;
  timeline: string;
  description: string;
  referenceFileName?: string;
  referenceFileSize?: number;
}

export interface InquiryResponse {
  ok: boolean;
  referenceCode: string;
  submittedAt: string;
  errorMessage?: string;
}

const MAX_FILE_SIZE_BYTES = 15 * 1024 * 1024; // 15 MB
const ALLOWED_EXTENSIONS = ['.pdf', '.jpg', '.jpeg', '.png', '.webp', '.dwg'];

export function validateReferenceFile(file: File | null): { valid: boolean; error?: string } {
  if (!file) return { valid: true };

  if (file.size > MAX_FILE_SIZE_BYTES) {
    return {
      valid: false,
      error: 'Reference file exceeds the 15 MB architectural plan limit.',
    };
  }

  const lowerName = file.name.toLowerCase();
  const hasAllowedExtension = ALLOWED_EXTENSIONS.some((ext) => lowerName.endsWith(ext));

  if (!hasAllowedExtension) {
    return {
      valid: false,
      error: 'Supported formats: PDF, JPG, PNG, WEBP, or CAD DWG.',
    };
  }

  return { valid: true };
}

export async function submitProjectInquiry(
  payload: ProjectInquiryPayload
): Promise<InquiryResponse> {
  // Simulate network latency cleanly without exposing secrets or pretending success on network drop
  await new Promise((resolve) => setTimeout(resolve, 750));

  if (typeof navigator !== 'undefined' && navigator.onLine === false) {
    return {
      ok: false,
      referenceCode: '',
      submittedAt: new Date().toISOString(),
      errorMessage:
        'Network connection unavailable. Please check your connection and try submitting again.',
    };
  }

  // Deterministic validation safeguard
  if (!payload.name.trim() || !payload.email.trim() || !payload.description.trim()) {
    return {
      ok: false,
      referenceCode: '',
      submittedAt: new Date().toISOString(),
      errorMessage: 'Please complete all required architectural brief fields.',
    };
  }

  const referenceCode = `AGS-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

  return {
    ok: true,
    referenceCode,
    submittedAt: new Date().toISOString(),
  };
}
