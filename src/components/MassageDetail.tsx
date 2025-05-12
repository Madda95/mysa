import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { ReactNode } from "react";

interface MassageDetailProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  description: ReactNode;
}

export function MassageDetail({
  isOpen,
  onClose,
  images,
  description,
}: MassageDetailProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
      onClick={onClose}
      style={{ maxWidth: "100vw" }}
    >
      <div
        className="bg-white rounded-lg w-full max-w-4xl my-4 sm:my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-[#CB997E] text-white p-2 rounded-full hover:bg-[#b88a6f] transition-colors shadow-lg hover:shadow-xl z-[60]"
          >
            <XMarkIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Scrollable content */}
          <div className="overflow-y-auto max-h-[calc(100vh-4rem)] sm:max-h-[calc(100vh-8rem)]">
            <div className="p-3 sm:p-6">
              {/* Images */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6 max-w-2xl mx-auto">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-square w-full max-w-[200px] sm:max-w-[250px] mx-auto"
                  >
                    <Image
                      src={image}
                      alt={`Massage detail ${index + 1}`}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="prose max-w-none text-gray-700">
                <div className="space-y-3 sm:space-y-4 [&>p]:text-sm sm:[&>p]:text-base [&>p]:leading-relaxed [&>h4]:text-lg sm:[&>h4]:text-xl [&>h4]:font-semibold [&>h4]:text-[#CB997E] [&>h4]:mt-4 sm:[&>h4]:mt-6 [&>h4]:mb-3 sm:[&>h4]:mb-4 [&>ul]:list-disc [&>ul]:pl-4 sm:[&>ul]:pl-6 [&>ul]:space-y-1 sm:[&>ul]:space-y-2 [&>ol]:list-decimal [&>ol]:pl-4 sm:[&>ol]:pl-6 [&>ol]:space-y-1 sm:[&>ol]:space-y-2 [&>li]:text-sm sm:[&>li]:text-base [&>li]:leading-relaxed [&>strong]:text-gray-800">
                  {description}
                </div>
              </div>

              {/* Close button at bottom */}
              <div className="mt-6 sm:mt-8 flex justify-center pb-2">
                <button
                  onClick={onClose}
                  className="bg-[#CB997E] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-[#b88a6f] transition-colors shadow-lg hover:shadow-xl font-semibold text-sm sm:text-base"
                >
                  Chiudi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
