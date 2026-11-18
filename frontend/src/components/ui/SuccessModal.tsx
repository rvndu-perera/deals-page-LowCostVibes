"use client";

import Image from "next/image";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  buttonText?: string;
}

export function SuccessModal({
  isOpen,
  onClose,
  title = "Your Message have Sent",
  message = "We will contact you in shortly. Thank You!",
  buttonText = "Done",
}: SuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-sm rounded-3xl bg-white p-7 text-center shadow-2xl transition-all"
      >
        {/* Success Icon */}
        <div className="mx-auto flex size-24 items-center justify-center">
          <Image
            src="/icons/success.png"
            alt="Success"
            width={96}
            height={96}
            className="size-24 object-contain"
            priority
          />
        </div>

        {/* Title */}
        <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-900">
          {title}
        </h3>

        {/* Subtitle */}
        <p className="mt-2 text-sm text-slate-500">
          {message}
        </p>

        {/* Done Button */}
        <button
          type="button"
          onClick={onClose}
          className="mt-6 w-full cursor-pointer rounded-xl bg-[#16385c] py-3 text-sm font-semibold text-white shadow-xs transition hover:bg-[#102f50]"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default SuccessModal;
