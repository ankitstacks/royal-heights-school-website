
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import "./WebsiteLoader.css";

export default function WebsiteLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let minimumTimer;
    let maximumTimer;

    let pageLoaded = document.readyState === "complete";
    let minimumTimePassed = false;
    let finished = false;

    const finishLoading = () => {
      if (finished || !pageLoaded || !minimumTimePassed) return;

      finished = true;
      setVisible(false);
    };

    const handlePageLoad = () => {
      pageLoaded = true;
      finishLoading();
    };

    minimumTimer = window.setTimeout(() => {
      minimumTimePassed = true;
      finishLoading();
    }, 1800);

    maximumTimer = window.setTimeout(() => {
      if (!finished) {
        finished = true;
        setVisible(false);
      }
    }, 4500);

    if (!pageLoaded) {
      window.addEventListener("load", handlePageLoad, {
        once: true,
      });
    }

    return () => {
      window.clearTimeout(minimumTimer);
      window.clearTimeout(maximumTimer);

      window.removeEventListener("load", handlePageLoad);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="website-loader"
          role="status"
          aria-label="Loading Royal Heights Higher Secondary School"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.65,
            ease: "easeInOut",
          }}
        >
          {/* Background glow effects */}
          <div className="loader-glow loader-glow-one" />
          <div className="loader-glow loader-glow-two" />

          <motion.div
            className="loader-content"
            initial={{
              opacity: 0,
              y: 22,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Actual school logo */}
            <motion.div
              className="loader-emblem"
              initial={{
                opacity: 0,
                scale: 0.7,
                y: 18,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="loader-emblem-inner">
                <img
                  src="/images/royal-heights-logo.jpeg"
                  alt="Royal Heights Higher Secondary School logo"
                  className="loader-school-logo"
                  fetchPriority="high"
                />
              </div>

              <span
                className="loader-emblem-star"
                aria-hidden="true"
              >
                ✦
              </span>
            </motion.div>

            {/* Welcome heading */}
            <motion.p
              className="loader-overline"
              initial={{
                opacity: 0,
                letterSpacing: "0.45em",
              }}
              animate={{
                opacity: 1,
                letterSpacing: "0.28em",
              }}
              transition={{
                duration: 0.8,
                delay: 0.35,
              }}
            >
              WELCOME TO
            </motion.p>

            {/* School name */}
            <motion.h1
              className="loader-school-name"
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.45,
              }}
            >
              ROYAL HEIGHTS
            </motion.h1>

            <motion.p
              className="loader-school-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.65,
              }}
            >
              HIGHER SECONDARY SCHOOL
            </motion.p>

            {/* Golden divider */}
            <motion.div
              className="loader-divider"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.55,
              }}
            />

            <motion.p
              className="loader-tagline"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.75,
              }}
            >
              Inspiring minds. Building futures.
            </motion.p>

            {/* Animated progress bar */}
            <div
              className="loader-progress-track"
              aria-hidden="true"
            >
              <motion.div
                className="loader-progress-fill"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 2.2,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Loading status */}
            <motion.p
              className="loader-status"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.45, 1, 0.45],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Preparing your experience
              <span className="loader-dots">...</span>
            </motion.p>
          </motion.div>

          {/* Bottom golden accent */}
          <div className="loader-bottom-line" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
