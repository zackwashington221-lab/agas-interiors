import React, { createContext, useContext, useState } from 'react';
import type { Product } from '../data/products';
import type { Service } from '../data/services';
import type { Project } from '../data/projects';

export interface EnquiryRecord {
  id: string;
  type: 'project' | 'product' | 'service' | 'general';
  name: string;
  phone: string;
  email?: string;
  city: string;
  projectType?: string;
  servicesSelected?: string[];
  productId?: string;
  productName?: string;
  productOptions?: {
    size?: string;
    finish?: string;
  };
  serviceId?: string;
  serviceName?: string;
  budgetRange?: string;
  timeline?: string;
  message: string;
  createdAt: string;
}

interface EnquiryContextType {
  // Modal state
  isModalOpen: boolean;
  modalType: 'project' | 'product' | 'service' | 'general';
  activeProduct: Product | null;
  activeService: Service | null;
  activeProject: Project | null;
  openProductEnquiry: (product: Product, options?: { size?: string; finish?: string }) => void;
  openServiceEnquiry: (service: Service) => void;
  openProjectEnquiry: (initial?: string | Project) => void;
  closeModal: () => void;
  
  // Quick View Product state
  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;

  // Search state
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;

  // Feedback toast
  toastMessage: string | null;
  showToast: (msg: string) => void;

  // Submissions
  submitEnquiry: (enquiry: Omit<EnquiryRecord, 'id' | 'createdAt'>) => EnquiryRecord;
  lastSubmittedEnquiry: EnquiryRecord | null;
}

const EnquiryContext = createContext<EnquiryContextType | undefined>(undefined);

export const EnquiryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'project' | 'product' | 'service' | 'general'>('project');
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [activeService, setActiveService] = useState<Service | null>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [lastSubmittedEnquiry, setLastSubmittedEnquiry] = useState<EnquiryRecord | null>(() => {
    try {
      const saved = sessionStorage.getItem('agas_last_enquiry');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const openProductEnquiry = (product: Product) => {
    setActiveProduct(product);
    setActiveService(null);
    setActiveProject(null);
    setModalType('product');
    setIsModalOpen(true);
  };

  const openServiceEnquiry = (service: Service) => {
    setActiveService(service);
    setActiveProduct(null);
    setActiveProject(null);
    setModalType('service');
    setIsModalOpen(true);
  };

  const openProjectEnquiry = (initial?: string | Project) => {
    setActiveProduct(null);
    setActiveService(null);
    if (typeof initial === 'object' && initial !== null) {
      setActiveProject(initial);
    } else {
      setActiveProject(null);
    }
    setModalType('project');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const submitEnquiry = (enquiryData: Omit<EnquiryRecord, 'id' | 'createdAt'>): EnquiryRecord => {
    const record: EnquiryRecord = {
      ...enquiryData,
      id: `ENQ-${Date.now().toString(36).toUpperCase()}`,
      createdAt: new Date().toISOString()
    };

    // Store in localStorage history
    try {
      const history = JSON.parse(localStorage.getItem('agas_enquiries_list') || '[]');
      history.unshift(record);
      localStorage.setItem('agas_enquiries_list', JSON.stringify(history));
      sessionStorage.setItem('agas_last_enquiry', JSON.stringify(record));
    } catch {
      // storage quota or private browsing
    }

    setLastSubmittedEnquiry(record);
    showToast(`Enquiry ${record.id} received. Our concierge is preparing your brief.`);
    setIsModalOpen(false);
    return record;
  };

  return (
    <EnquiryContext.Provider
      value={{
        isModalOpen,
        modalType,
        activeProduct,
        activeService,
        activeProject,
        openProductEnquiry,
        openServiceEnquiry,
        openProjectEnquiry,
        closeModal,
        quickViewProduct,
        setQuickViewProduct,
        isSearchOpen,
        setIsSearchOpen,
        toastMessage,
        showToast,
        submitEnquiry,
        lastSubmittedEnquiry
      }}
    >
      {children}
    </EnquiryContext.Provider>
  );
};

export const useEnquiry = () => {
  const context = useContext(EnquiryContext);
  if (!context) {
    throw new Error('useEnquiry must be used within an EnquiryProvider');
  }
  return context;
};
