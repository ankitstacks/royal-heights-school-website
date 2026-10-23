
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, ArrowRight } from "lucide-react";

const POSTER = "/images/admission-poster.jpg";
const DELAY = 5000;

export default function AdmissionPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer;
    let lastLocation = window.location.pathname + window.location.hash;

    const showAfterDelay = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => setVisible(true), DELAY);
    };

    // Show 5 seconds after the website initially opens.
    showAfterDelay();

    const handleLocationChange = () => {
      const currentLocation =
        window.location.pathname + window.location.hash;

      if (currentLocation === lastLocation) return;
      lastLocation = currentLocation;

      // If the visitor returns to Home, start a fresh 5-second timer.
      const isHome =
        window.location.pathname === "/" ||
        window.location.hash === "#home";

      if (isHome) {
        setVisible(false);
        showAfterDelay();
      }
    };

    window.addEventListener("hashchange", handleLocationChange);
    window.addEventListener("popstate", handleLocationChange);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("hashchange", handleLocationChange);
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  useEffect(() => {
    if (!visible) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKey = (event) => {
      if (event.key === "Escape") setVisible(false);
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="admission-popup-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setVisible(false);
          }}
        >
          <motion.div
            className="admission-popup"
            role="dialog"
            aria-modal="true"
            aria-label="Admissions announcement"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.28 }}
          >
            <button
              type="button"
              className="admission-popup-close"
              onClick={() => setVisible(false)}
              aria-label="Close admission announcement"
            >
              <X size={22} />
            </button>

            <div className="admission-popup-poster">
              <img
                src={POSTER}
                alt="Royal Heights Higher Secondary School admission announcement"
              />
            </div>

            <div className="admission-popup-actions">
              <a
                href="/#contact"
                className="admission-popup-enquire"
                onClick={() => setVisible(false)}
              >
                Enquire for Admission <ArrowRight size={17} />
              </a>

              <button
                type="button"
                className="admission-popup-dismiss"
                onClick={() => setVisible(false)}
              >
                Maybe later
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
