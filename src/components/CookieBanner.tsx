"use client";

import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem("cookieConsent");
    if (!hasConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-600">
          <p>
            Utilizziamo i cookie per migliorare la tua esperienza sul nostro
            sito. Continuando a navigare, accetti l&apos;utilizzo dei cookie in
            conformità con la nostra
            <a
              href="/privacy-policy"
              className="text-[#CB997E] hover:text-[#b88a6f] ml-1"
            >
              politica sulla privacy
            </a>
            .
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            color="gray"
            variant="outlined"
            size="sm"
            onClick={() => setIsVisible(false)}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            placeholder={undefined}
          >
            Rifiuta
          </Button>
          <Button
            color="gray"
            size="sm"
            onClick={handleAccept}
            className="bg-[#CB997E] hover:bg-[#b88a6f]"
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            placeholder={undefined}
          >
            Accetta
          </Button>
        </div>
      </div>
    </div>
  );
}
