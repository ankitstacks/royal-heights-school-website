
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  Play,
  X,
  Video,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import "./GalleryLabs.css";

// IMPORTANT: This path matches your renamed folder exactly.
const imageModules = import.meta.glob("../assets/my-gallary/*", {
  eager: true,
  query: "?url",
  import: "default",
});

const imageDetails = {
  "my-img.jpg": {
    title: "Our School Campus",
    category: "Campus",
  },
  "my-img2.jpg": {
    title: "School Grounds",
    category: "Campus",
  },
  "my-img3.jpg": {
    title: "Our School Community",
    category: "Events",
  },
  "my-img4.webp": {
    title: "Students Together",
    category: "Events",
  },
  "my-img5.jpg": {
    title: "Royal Heights School Building",
    category: "Campus",
  },
  "my-img6.webp": {
    title: "Classroom Activities",
    category: "Classrooms",
  },
  "my-img7.jpg": {
    title: "School Celebrations",
    category: "Events",
  },
};

const videoItems = [
  {
    id: "welcome",
    title: "Welcome to Royal Heights",
    description: "Discover our school and learning environment.",
    category: "School Life",
    src: "/gallery/welcome-school.mp4",
  },
  {
    id: "navdurga",
    title: "Navdurga Celebration",
    description: "A memorable celebration of culture and tradition.",
    category: "Cultural Events",
    src: "/gallery/navdurga-celebration.mp4",
  },
  {
    id: "hanuman",
    title: "Hanuman Movie Experience",
    description: "A memorable school activity.",
    category: "Activities",
    src: "/gallery/hanuman-movie.mp4",
  },
  {
    id: "school-life",
    title: "A Day at Royal Heights",
    description: "A glimpse into everyday school life.",
    category: "School Life",
    src: "/gallery/school-life.mp4",
  },
  {
    id: "investiture",
    title: "Investiture Ceremony",
    description: "Celebrating leadership and responsibility.",
    category: "Cultural Events",
    src: "/gallery/investiture-ceremony.mp4",
  },
];

function getFilename(path) {
  return decodeURIComponent(path.split("/").pop() || "");
}

function getCategory(filename) {
  const name = filename.toLowerCase();

  if (/science|lab/.test(name)) return "Science Labs";
  if (/computer|digital|technology/.test(name)) return "Computer Lab";
  if (/sport|game|ground/.test(name)) return "Sports";
  if (/event|function|annual|celebration/.test(name)) return "Events";
  if (/class|room/.test(name)) return "Classrooms";
  return "Campus";
}

function getTitle(filename) {
  return filename
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function useBodyScrollLock(active) {
  useEffect(() => {
    if (!active) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [active]);
}

function PhotoGallery() {
  const [activeCategory, setActiveCategory] = useState("All Photos");
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [failedPhotos, setFailedPhotos] = useState([]);

  const photos = useMemo(() => {
    return Object.entries(imageModules)
      .filter(([path]) => /\.(jpe?g|png|webp|avif|gif)$/i.test(path))
      .map(([path, src]) => {
        const filename = getFilename(path);
        const details = imageDetails[filename];

        return {
          id: path,
          filename,
          src,
          title: details?.title || getTitle(filename),
          category: details?.category || getCategory(filename),
        };
      })
      .sort((a, b) => a.filename.localeCompare(b.filename, undefined, {
        numeric: true,
      }));
  }, []);

  const categories = [
    "All Photos",
    ...new Set(photos.map((photo) => photo.category)),
  ];

  const filteredPhotos = photos.filter(
    (photo) =>
      !failedPhotos.includes(photo.filename) &&
      (activeCategory === "All Photos" ||
        photo.category === activeCategory)
  );

  const selectedIndex = filteredPhotos.findIndex(
    (photo) => photo.id === selectedPhoto?.id
  );

  useBodyScrollLock(Boolean(selectedPhoto));

  useEffect(() => {
    if (!selectedPhoto) return undefined;

    function onKeyDown(event) {
      if (event.key === "Escape") setSelectedPhoto(null);

      if (event.key === "ArrowRight" && filteredPhotos.length) {
        const next = (selectedIndex + 1) % filteredPhotos.length;
        setSelectedPhoto(filteredPhotos[next]);
      }

      if (event.key === "ArrowLeft" && filteredPhotos.length) {
        const previous =
          (selectedIndex - 1 + filteredPhotos.length) %
          filteredPhotos.length;
        setSelectedPhoto(filteredPhotos[previous]);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedPhoto, selectedIndex, filteredPhotos]);

  return (
    <div className="gl-photo-area">
      <div className="gl-toolbar">
        <div className="gl-filters">
          {categories.map((category) => {
            const count = photos.filter(
              (photo) =>
                !failedPhotos.includes(photo.filename) &&
                (category === "All Photos" ||
                  photo.category === category)
            ).length;

            return (
              <button
                type="button"
                key={category}
                className={
                  activeCategory === category ? "gl-filter-active" : ""
                }
                onClick={() => {
                  setActiveCategory(category);
                  setSelectedPhoto(null);
                }}
              >
                {category}
                <span>{count}</span>
              </button>
            );
          })}
        </div>

        <span className="gl-photo-count">
          {filteredPhotos.length}{" "}
          {filteredPhotos.length === 1 ? "photo" : "photos"}
        </span>
      </div>

      {filteredPhotos.length > 0 ? (
        <motion.div layout className="gl-photo-grid">
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo, index) => (
              <motion.article
                layout
                key={photo.id}
                className={`gl-photo-card ${
                  index === 0 ? "gl-photo-card-featured" : ""
                }`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  type="button"
                  className="gl-photo-button"
                  onClick={() => setSelectedPhoto(photo)}
                  aria-label={`View ${photo.title}`}
                >
                  <div className="gl-photo-image">
                    <img
                      src={photo.src}
                      alt={photo.title}
                      loading={index < 4 ? "eager" : "lazy"}
                      onError={() =>
                        setFailedPhotos((current) =>
                          current.includes(photo.filename)
                            ? current
                            : [...current, photo.filename]
                        )
                      }
                    />

                    <div className="gl-photo-overlay" />

                    <span className="gl-photo-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="gl-photo-category">
                      {photo.category}
                    </span>

                    <span className="gl-photo-zoom">
                      <Camera size={18} />
                    </span>
                  </div>

                  <div className="gl-photo-caption">
                    <div>
                      <h3>{photo.title}</h3>
                      <p>{photo.category} · Royal Heights</p>
                    </div>
                    <ChevronRight size={19} />
                  </div>
                </button>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="gl-empty">
          <Camera size={38} />
          <h3>
            {photos.length === 0
              ? "No photographs detected"
              : "Images could not be loaded"}
          </h3>
          <p>
            Confirm the files are inside{" "}
            <code>client/src/assets/my-gallary/</code> and restart Vite.
          </p>
        </div>
      )}

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="gl-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="gl-lightbox-panel"
              role="dialog"
              aria-modal="true"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="gl-lightbox-header">
                <div>
                  <span>ROYAL HEIGHTS · PHOTO GALLERY</span>
                  <h3>{selectedPhoto.title}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedPhoto(null)}
                  aria-label="Close photo viewer"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="gl-lightbox-image">
                {filteredPhotos.length > 1 && (
                  <button
                    type="button"
                    className="gl-lightbox-arrow gl-lightbox-prev"
                    onClick={() =>
                      setSelectedPhoto(
                        filteredPhotos[
                          (selectedIndex - 1 + filteredPhotos.length) %
                            filteredPhotos.length
                        ]
                      )
                    }
                    aria-label="Previous photo"
                  >
                    <ChevronLeft size={26} />
                  </button>
                )}

                <img src={selectedPhoto.src} alt={selectedPhoto.title} />

                {filteredPhotos.length > 1 && (
                  <button
                    type="button"
                    className="gl-lightbox-arrow gl-lightbox-next"
                    onClick={() =>
                      setSelectedPhoto(
                        filteredPhotos[
                          (selectedIndex + 1) % filteredPhotos.length
                        ]
                      )
                    }
                    aria-label="Next photo"
                  >
                    <ChevronRight size={26} />
                  </button>
                )}
              </div>

              <div className="gl-lightbox-footer">
                <span>{selectedPhoto.category}</span>
                <span>
                  {selectedIndex + 1} / {filteredPhotos.length}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [failedVideos, setFailedVideos] = useState([]);

  useBodyScrollLock(Boolean(activeVideo));

  useEffect(() => {
    if (!activeVideo) return undefined;

    function onKeyDown(event) {
      if (event.key === "Escape") setActiveVideo(null);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeVideo]);

  return (
    <div className="gl-video-area">
      <div className="gl-video-heading">
        <div>
          <span className="gl-eyebrow">
            <Video size={15} /> SCHOOL STORIES
          </span>
          <h3>Watch our moments.</h3>
          <p>School life, celebrations and memorable activities.</p>
        </div>
        <span className="gl-video-badge">{videoItems.length} videos</span>
      </div>

      <div className="gl-video-grid">
        {videoItems.map((video, index) => (
          <article className="gl-video-card" key={video.id}>
            <button
              type="button"
              className="gl-video-open"
              onClick={() => setActiveVideo(video)}
              disabled={failedVideos.includes(video.id)}
            >
              <div className="gl-video-cover">
                {!failedVideos.includes(video.id) ? (
                  <video
                    src={video.src}
                    preload="metadata"
                    muted
                    playsInline
                    onError={() =>
                      setFailedVideos((current) =>
                        current.includes(video.id)
                          ? current
                          : [...current, video.id]
                      )
                    }
                  />
                ) : (
                  <div className="gl-video-fallback">
                    <Video size={28} />
                    <span>Video file unavailable</span>
                  </div>
                )}

                <span className="gl-video-play">
                  <Play size={20} fill="currentColor" />
                </span>

                <span className="gl-video-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="gl-video-caption">
                <span>{video.category}</span>
                <h4>{video.title}</h4>
                <p>{video.description}</p>
                <div className="gl-video-link">
                  Watch video <ArrowRight size={16} />
                </div>
              </div>
            </button>
          </article>
        ))}
      </div>

      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="gl-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
          >
            <div
              className="gl-lightbox-panel gl-video-player-panel"
              role="dialog"
              aria-modal="true"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="gl-lightbox-header">
                <div>
                  <span>ROYAL HEIGHTS · VIDEO GALLERY</span>
                  <h3>{activeVideo.title}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveVideo(null)}
                  aria-label="Close video"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="gl-player">
                <video
                  key={activeVideo.id}
                  src={activeVideo.src}
                  controls
                  autoPlay
                  playsInline
                  preload="auto"
                />
              </div>

              <div className="gl-lightbox-footer">
                <span>{activeVideo.description}</span>
                <span>{activeVideo.category}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function GalleryLabs() {
  return (
    <section id="gallery" className="gl-section">
      <div className="gl-container">
        <motion.div
          className="gl-heading"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="gl-eyebrow">
            <Sparkles size={15} /> OUR CAMPUS · OUR MEMORIES
          </span>

          <h2>
            A glimpse into
            <br />
            <span>life at Royal Heights.</span>
          </h2>

          <p>
            Explore our campus, classrooms, student activities and memorable
            school moments through our photo and video gallery.
          </p>
        </motion.div>

        <PhotoGallery />

        <div className="gl-section-divider">
          <span />
          <Camera size={19} />
          <span />
        </div>

        <VideoGallery />

        <div className="gl-gallery-bottom">
          <span>
            <Sparkles size={15} /> Every picture holds a memory.
          </span>
          <a href="#contact">
            Connect with our school <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
