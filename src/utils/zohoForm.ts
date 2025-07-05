/**
 * Utility function to open Zoho form for lead capture
 */

const ZOHO_FORM_URL = 'https://forms.zohopublic.in/deeampceelabs1/form/WebdevelopmentScopingSession/formperma/gV2LSwKARVxOQh4MSvJ86okXEO4nTIBcoMzrklJddqM';

export const openZohoForm = (source?: string) => {
  try {
    const urlWithTracking = source ? `${ZOHO_FORM_URL}?utm_source=${encodeURIComponent(source)}` : ZOHO_FORM_URL;
    window.open(urlWithTracking, '_blank', 'noopener,noreferrer');
  } catch (error) {
    console.error('Error opening Zoho form:', error);
    // Fallback to direct navigation
    window.location.href = ZOHO_FORM_URL;
  }
};

export const getZohoFormUrl = (source?: string) => {
  return source ? `${ZOHO_FORM_URL}?utm_source=${encodeURIComponent(source)}` : ZOHO_FORM_URL;
};