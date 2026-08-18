import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowUpRight } from 'lucide-react'
import { INSTITUTION } from '@/lib/constants'

function WhatsAppIcon({ className = 'h-6 w-6' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.66.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.71 4.29 3.8.6.26 1.07.41 1.44.53.6.19 1.15.16 1.59.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.12-.22-.19-.47-.31z" />
    </svg>
  )
}

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false)
  const popupRef = useRef(null)

  // Official APDCH WhatsApp Business Link
  const whatsappUrl = INSTITUTION.whatsapp || 'https://wa.me/917824069595?text=Hi'

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div ref={popupRef} className="fixed bottom-6 right-6 z-50 select-none">
      {/* Small APDCH Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-16 right-0 mb-2 w-[calc(100vw-2.5rem)] max-w-[320px] sm:max-w-[330px] overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_16px_40px_rgba(0,0,0,0.22)] ring-1 ring-black/5"
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-[#075E54] to-[#128C7E] p-3.5 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-0.5 ring-2 ring-white/30 shadow-sm">
                    <img
                      src="/f0229f1b-ddbb-46f5-ad40-c13d2676e8b2.png"
                      alt="APDCH Logo"
                      className="h-full w-full object-contain"
                    />
                    <span className="absolute bottom-0.5 right-0.5 h-2.5 w-2.5 rounded-full bg-[#25D366] ring-2 ring-white" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold leading-snug tracking-tight text-white line-clamp-1">
                      {INSTITUTION.shortName} Dental College
                    </h3>
                    <p className="text-[11px] font-medium text-emerald-100/90">
                      Admissions &amp; Help Desk · Online
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-1 text-white/80 transition-colors hover:bg-white/15 hover:text-white"
                  aria-label="Close WhatsApp popup"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="bg-[#f0f2f5] p-3.5">
              {/* Message Bubble */}
              <div className="relative rounded-2xl rounded-tl-sm bg-white p-3.5 shadow-sm text-xs leading-relaxed text-foreground border border-black/5">
                <p className="font-medium text-foreground">
                  Hello! 👋 Welcome to <strong className="text-primary">APDCH</strong>.
                </p>
                <p className="mt-1 text-muted">
                  How can we help you today with admissions, hospital OPD, or academic enquiries?
                </p>
                <span className="mt-2 block text-right text-[10px] text-muted/70">
                  Just now · Verified Support
                </span>
              </div>

              {/* Continue on WhatsApp Button */}
              <div className="mt-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:bg-[#20ba5a] hover:shadow-lg active:scale-[0.98]"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>Continue on WhatsApp</span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-80" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <div className="relative flex items-center justify-center">
        {/* Ripple effect */}
        {!isOpen && (
          <span className="pointer-events-none absolute inline-flex h-14 w-14 animate-ping rounded-full bg-[#25D366]/30" />
        )}

        <motion.button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          aria-label="Chat on WhatsApp"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-[#20ba5a] to-[#25D366] text-white shadow-[0_8px_25px_rgba(37,211,102,0.45)] ring-4 ring-white transition-shadow hover:shadow-[0_12px_32px_rgba(37,211,102,0.6)] focus:outline-none"
        >
          {/* Online badge */}
          <span className="absolute right-0.5 top-0.5 flex h-3.5 w-3.5">
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-emerald-400 ring-2 ring-white" />
          </span>

          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="whatsapp"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <WhatsAppIcon className="h-7 w-7" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Hover Tooltip (Desktop) */}
          {!isOpen && (
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-full bg-foreground/90 px-3 py-1 text-xs font-semibold text-white opacity-0 shadow-lg backdrop-blur transition-opacity group-hover:opacity-100 sm:block">
              Chat on WhatsApp
            </span>
          )}
        </motion.button>
      </div>
    </div>
  )
}
