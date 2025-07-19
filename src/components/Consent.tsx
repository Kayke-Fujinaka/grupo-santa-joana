"use client";

import Cookies from "js-cookie";
import { useEffect, useState } from "react";

import { POLICY_URL } from "@/constants";

const Consent = () => {
  const [isConsentVisible, setIsConsentVisible] = useState<boolean>(false);
  const CONSENT_COOKIE_NAME = "user-consent-accepted";

  useEffect(() => {
    const hasConsent = Cookies.get(CONSENT_COOKIE_NAME);
    if (!hasConsent) setIsConsentVisible(true);
  }, []);

  const handleAcceptConsent = () => {
    Cookies.set(CONSENT_COOKIE_NAME, "true", { expires: 365 });
    setIsConsentVisible(false);
  };

  if (!isConsentVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary-700 text-white shadow-2xl">
      <div className="container mx-auto px-4 py-4 sm:px-6 sm:py-5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex-1 min-w-0 pr-0 sm:pr-4">
            <p className="text-sm sm:text-base leading-relaxed">
              Utilizamos cookies e dados para melhorar sua experiência. Ao
              continuar, você concorda com nossa{" "}
              <a
                href={POLICY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-200 font-medium transition-colors"
              >
                Política de Privacidade
              </a>
              .
            </p>
          </div>
          <div className="flex items-center justify-end sm:justify-start gap-3 shrink-0">
            <button
              onClick={handleAcceptConsent}
              className="bg-white text-primary-700 px-4 py-2 sm:px-6 sm:py-2.5 rounded-lg text-sm sm:text-base font-medium hover:bg-gray-100 active:bg-gray-200 transition-colors cursor-pointer touch-manipulation min-w-[80px]"
            >
              Aceitar
            </button>
            <button
              onClick={() => setIsConsentVisible(false)}
              className="text-white hover:text-gray-200 active:text-gray-300 p-2 cursor-pointer touch-manipulation flex items-center justify-center w-8 h-8 rounded-md hover:bg-white/10 transition-colors"
              aria-label="Fechar banner de consentimento"
            >
              <span className="sr-only">Fechar</span>
              <span className="text-lg leading-none">✕</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consent;
