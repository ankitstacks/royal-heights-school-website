
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Bus,
  CheckCircle2,
  ChevronDown,
  Clock3,
  FlaskConical,
  GraduationCap,
  HeartHandshake,
  HeartPulse,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  Monitor,
  Phone,
  Presentation,
  Send,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  X,
} from "lucide-react";

import OurApproach from "./pages/OurApproach.jsx";
import OurInspiration from "./pages/OurInspiration.jsx";
import AcademicDetail from "./pages/AcademicDetail.jsx";
import GalleryLabs from "./components/GalleryLabs.jsx";
import WebsiteLoader from "./components/WebsiteLoader.jsx";
import AdmissionPopup from "./components/AdmissionPopup.jsx"; 
import "./App.css";

const school = {
  name: "Royal Heights Higher Secondary School",
  phone: "+91 87200 24123",
  email: "royalzrp@gmail.com",
  address:
    "29CC+G7F, Machhalpur Road, Zirapur, Madhya Pradesh 465691",
  udise: "23300621641",
  hours: "Monday–Saturday, 7:15 AM–4:30 PM",
};

const programs = [
  {
    slug: "foundational-learning",
    number: "01",
    title: "Foundational Learning",
    text: "Build strong fundamentals through curiosity, guided learning and regular practice.",
    icon: BookOpen,
  },
  {
    slug: "academic-excellence",
    number: "02",
    title: "Academic Excellence",
    text: "Develop subject knowledge, independent thinking and confidence in learning.",
    icon: GraduationCap,
  },
  {
    slug: "beyond-academics",
    number: "03",
    title: "Beyond Academics",
    text: "Encourage creativity, teamwork and all-round student development.",
    icon: Trophy,
  },
];

const facilities = [
  {
    number: "01",
    title: "Learning Spaces",
    category: "ACADEMIC",
    text: "A supportive environment for curiosity, concentration and classroom participation.",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Science Laboratories",
    category: "PRACTICAL LEARNING",
    text: "Explore scientific concepts through practical learning.",
    icon: FlaskConical,
  },
  {
    number: "03",
    title: "Computer Education",
    category: "DIGITAL LEARNING",
    text: "Develop digital awareness, logical thinking and computer skills.",
    icon: Monitor,
  },
  {
    number: "04",
    title: "Sports & Games",
    category: "SPORTS",
    text: "Activities that encourage teamwork, discipline and confidence.",
    icon: Trophy,
  },
  {
    number: "05",
    title: "Transport",
    category: "STUDENT CONVENIENCE",
    text: "Contact the school to confirm transport availability and routes.",
    icon: Bus,
  },
  {
    number: "06",
    title: "Health & Safety",
    category: "STUDENT WELLBEING",
    text: "A student-focused environment that values wellbeing and safety awareness.",
    icon: HeartPulse,
  },
  {
    number: "07",
    title: "Smart Learning",
    category: "CLASSROOM EXPERIENCE",
    text: "Engaging teaching approaches that help students understand concepts.",
    icon: Presentation,
  },
  {
    number: "08",
    title: "Activities & Events",
    category: "ALL-ROUND DEVELOPMENT",
    text: "Activities and competitions that encourage creativity.",
    icon: Users,
  },
];

const feeStructure = [
  { className: "Nursery", admission: 4000, tuition: 1200, annual: 2500, development: 1500, exam: 500 },
  { className: "LKG", admission: 4000, tuition: 1300, annual: 2500, development: 1500, exam: 500 },
  { className: "UKG", admission: 4000, tuition: 1400, annual: 2500, development: 1500, exam: 600 },
  { className: "Class 1", admission: 5000, tuition: 1600, annual: 3000, development: 1800, exam: 700 },
  { className: "Class 2", admission: 5000, tuition: 1700, annual: 3000, development: 1800, exam: 700 },
  { className: "Class 3", admission: 5000, tuition: 1800, annual: 3000, development: 2000, exam: 800 },
  { className: "Class 4", admission: 5000, tuition: 1900, annual: 3200, development: 2000, exam: 800 },
  { className: "Class 5", admission: 5000, tuition: 2000, annual: 3200, development: 2200, exam: 900 },
  { className: "Class 6", admission: 6000, tuition: 2200, annual: 3500, development: 2500, exam: 1000 },
  { className: "Class 7", admission: 6000, tuition: 2300, annual: 3500, development: 2500, exam: 1000 },
  { className: "Class 8", admission: 6000, tuition: 2400, annual: 3800, development: 2800, exam: 1100 },
  { className: "Class 9", admission: 7000, tuition: 2800, annual: 4000, development: 3000, exam: 1500 },
  { className: "Class 10", admission: 7000, tuition: 3000, annual: 4000, development: 3000, exam: 1800 },
  { className: "Class 11", admission: 8000, tuition: 3200, annual: 4500, development: 3500, exam: 2000 },
  { className: "Class 12", admission: 8000, tuition: 3500, annual: 4500, development: 3500, exam: 2500 },
];

const money = (amount) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);

const annualTotal = (fee) =>
  fee.admission +
  fee.tuition * 12 +
  fee.annual +
  fee.development +
  fee.exam;

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

function Logo({ light = false }) {
  const [failed, setFailed] = useState(false);

  return (
    <a href="/#home" className={`brand ${light ? "brand-light" : ""}`}>
      {!failed && (
        <img
          src="/images/royal-heights-logo.jpeg"
          alt="Royal Heights Higher Secondary School logo"
          onError={() => setFailed(true)}
        />
      )}

      <span className="brand-copy">
        <strong>ROYAL HEIGHTS</strong>
        <small>HIGHER SECONDARY SCHOOL</small>
      </span>
    </a>
  );
}

function DropdownItems({ items, onNavigate }) {
  return items.map((item) => {
    const Icon = item.icon;

    return (
      <a
        key={item.href}
        className="academics-dropdown-item"
        href={item.href}
        onClick={onNavigate}
      >
        <span className="academics-dropdown-icon">
          <Icon size={20} />
        </span>

        <span className="academics-dropdown-copy">
          <strong>{item.title}</strong>
          <small>{item.description}</small>
        </span>

        <ArrowUpRight size={16} />
      </a>
    );
  });
}

function AboutDropdown({ onNavigate }) {
  const [open, setOpen] = useState(false);

  const items = [
    {
      title: "Our Approach",
      description: "Our learning philosophy.",
      href: "/our-approach",
      icon: Lightbulb,
    },
    {
      title: "Our Inspiration",
      description: "Our values and vision.",
      href: "/our-inspiration",
      icon: HeartHandshake,
    },
  ];

  const close = () => {
    setOpen(false);
    onNavigate?.();
  };

  return (
    <div
      className={`academics-dropdown ${open ? "academics-dropdown-open" : ""}`}
      onMouseEnter={() => {
        if (window.matchMedia("(min-width: 901px)").matches) setOpen(true);
      }}
      onMouseLeave={() => {
        if (window.matchMedia("(min-width: 901px)").matches) setOpen(false);
      }}
    >
      <button
        className="academics-dropdown-trigger"
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((previous) => !previous)}
      >
        About <ChevronDown size={14} className={open ? "is-rotated" : ""} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="academics-dropdown-menu"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
          >
            <div className="academics-dropdown-heading">
              <span>GET TO KNOW US</span>
              <p>The values and vision behind our school.</p>
            </div>

            <DropdownItems items={items} onNavigate={close} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function AcademicsDropdown({ onNavigate }) {
  const [open, setOpen] = useState(false);

  const items = programs.map((program) => ({
    title: program.title,
    description: program.text,
    href: `/academics/${program.slug}`,
    icon: program.icon,
  }));

  const close = () => {
    setOpen(false);
    onNavigate?.();
  };

  return (
    <div
      className={`academics-dropdown ${open ? "academics-dropdown-open" : ""}`}
      onMouseEnter={() => {
        if (window.matchMedia("(min-width: 901px)").matches) setOpen(true);
      }}
      onMouseLeave={() => {
        if (window.matchMedia("(min-width: 901px)").matches) setOpen(false);
      }}
    >
      <button
        className="academics-dropdown-trigger"
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((previous) => !previous)}
      >
        Academics <ChevronDown size={14} className={open ? "is-rotated" : ""} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="academics-dropdown-menu"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
          >
            <div className="academics-dropdown-heading">
              <span>OUR LEARNING PROGRAMMES</span>
              <p>Explore learning and development.</p>
            </div>

            <DropdownItems items={items} onNavigate={close} />

            <a
              href="/#academics"
              className="academics-dropdown-footer"
              onClick={close}
            >
              View all programmes <ArrowRight size={15} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const close = () => setMobileOpen(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Logo />

        <nav
          className={`nav-links ${mobileOpen ? "nav-open" : ""}`}
          aria-label="Main navigation"
        >
          <a href="/#home" onClick={close}>Home</a>
          <AboutDropdown onNavigate={close} />
          <AcademicsDropdown onNavigate={close} />
          <a href="/#fees" onClick={close}>Fees</a>
          <a href="/#facilities" onClick={close}>Facilities</a>
          <a href="/#gallery" onClick={close}>Gallery</a>
          <a href="/#contact" onClick={close}>Contact</a>

          <a className="nav-cta" href="/#contact" onClick={close}>
            Enquire Now <ArrowUpRight size={16} />
          </a>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((previous) => !previous)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  const image =
    "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2000&q=85";

  return (
    <section id="home" className="hero">
      <div
        className="hero-photo"
        style={{ backgroundImage: `url("${image}")` }}
      />
      <div className="hero-overlay" />
      <div className="hero-pattern" />

      <div className="container hero-content">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="hero-eyebrow">
            <Sparkles size={15} /> A PLACE TO LEARN AND GROW
          </span>

          <h1>
            Shaping bright minds.
            <br />
            <span>Building brighter</span>
            <br />
            futures.
          </h1>

          <p>
            Welcome to Royal Heights Higher Secondary School, Jeerapur,
            where every learner deserves an opportunity to discover their potential.
          </p>

          <div className="hero-actions">
            <a className="btn-gold" href="#contact">
              Explore Admissions <ArrowRight size={17} />
            </a>
            <a className="hero-text-link" href="#about">
              Discover our school <ArrowDown size={16} />
            </a>
          </div>

          <div className="hero-bottom-note">
            <span className="hero-dot" />
            Learning today. Leading tomorrow.
          </div>
        </motion.div>

        <motion.div
          className="hero-side-card"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="side-card-icon">
            <GraduationCap size={24} />
          </div>
          <span>YOUR JOURNEY STARTS HERE</span>
          <h3>Every student has a future worth nurturing.</h3>
          <a href="#academics">
            Discover learning <ArrowUpRight size={15} />
          </a>
        </motion.div>
      </div>

      <div className="hero-bottom-bar">
        <div className="container hero-bar-inner">
          <span><MapPin size={15} /> Jeerapur, Madhya Pradesh</span>
          <span><Clock3 size={15} /> Mon–Sat · 7:15 AM–4:30 PM</span>
          <a href={`tel:${school.phone.replaceAll(" ", "")}`}>
            <Phone size={15} /> Call the school
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container about-grid">
        <Reveal className="about-visual">
          <div className="about-image-main">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=85"
              alt="Students learning together"
              loading="lazy"
            />
          </div>

          <div className="about-stamp">
            <span>THE</span>
            <strong>ROYAL</strong>
            <span>LEARNING EXPERIENCE</span>
          </div>

          <div className="about-image-caption">
            <Sparkles size={18} />
            <span>Curiosity opens doors to possibility.</span>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="about-copy">
          <span className="section-label">WELCOME TO ROYAL HEIGHTS</span>
          <h2 className="section-heading">
            More than a school.
            <br />
            A foundation for life.
          </h2>

          <p className="section-description">
            Education is about more than textbooks. It is also about asking
            questions, developing character, discovering strengths and learning
            to face challenges with confidence.
          </p>

          <p className="section-description">
            We believe every student's journey deserves encouragement,
            meaningful learning opportunities and a supportive educational environment.
          </p>

          <div className="about-points">
            <div><CheckCircle2 /> Student-focused learning</div>
            <div><CheckCircle2 /> Academic and personal growth</div>
            <div><CheckCircle2 /> Curiosity and respect</div>
          </div>

          <a className="btn-primary" href="/our-approach">
            Explore our approach <ArrowRight size={17} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Academics() {
  return (
    <section id="academics" className="section academic-section">
      <div className="container">
        <Reveal className="section-top">
          <div>
            <span className="section-label">LEARNING WITH PURPOSE</span>
            <h2 className="section-heading">
              A strong start.
              <br />
              A confident future.
            </h2>
          </div>

          <p className="section-description">
            Learning should help students understand the world, think independently
            and prepare for opportunities ahead.
          </p>
        </Reveal>

        <div className="program-grid">
          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <Reveal key={program.slug} delay={index * 0.1}>
                <article className="program-card">
                  <div className="program-top">
                    <span>{program.number}</span>
                    <Icon size={27} />
                  </div>

                  <h3>{program.title}</h3>
                  <p>{program.text}</p>

                  <a href={`/academics/${program.slug}`}>
                    Learn more <ArrowUpRight size={17} />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeesStructure() {
  const [selectedClass, setSelectedClass] = useState("Nursery");

  const fee =
    feeStructure.find((item) => item.className === selectedClass) ||
    feeStructure[0];

  return (
    <section id="fees" className="section fees-section">
      <div className="container">
        <Reveal className="fees-heading">
          <span className="section-label">FEE INFORMATION</span>
          <h2 className="section-heading">
            Transparent fees.
            <br />
            Clear planning.
          </h2>
          <p className="section-description">
            Choose a class to view its sample fee breakdown and estimated first-year cost.
          </p>
        </Reveal>

        <div className="fees-disclaimer">
          <ShieldCheck size={19} />
          <p>
            <strong>Sample fees for design purposes only.</strong>
            These amounts are not the school's confirmed fee schedule.
            Replace them with approved figures before publishing.
          </p>
        </div>

        <div className="fees-layout">
          <Reveal className="fees-selector-panel">
            <span className="fees-small-label">SELECT YOUR CLASS</span>

            <label className="fees-select-label" htmlFor="fee-class-select">
              Class / Grade
            </label>

            <select
              id="fee-class-select"
              className="fees-select"
              value={selectedClass}
              onChange={(event) => setSelectedClass(event.target.value)}
            >
              {feeStructure.map((item) => (
                <option key={item.className} value={item.className}>
                  {item.className}
                </option>
              ))}
            </select>

            <div className="fees-total-card">
              <span>Estimated first-year total</span>
              <strong>{money(annualTotal(fee))}</strong>
              <small>Including one-time admission fee</small>
            </div>

            <div className="fees-monthly-card">
              <span>Monthly tuition fee</span>
              <strong>{money(fee.tuition)}</strong>
            </div>

            <a className="btn-primary fees-enquiry-button" href="#contact">
              Ask about fees <ArrowRight size={17} />
            </a>
          </Reveal>

          <Reveal delay={0.1} className="fees-breakdown-panel">
            <div className="fees-breakdown-heading">
              <div>
                <span className="fees-small-label">DETAILED BREAKDOWN</span>
                <h3>{fee.className}</h3>
              </div>
              <span className="fees-currency-badge">INR ₹</span>
            </div>

            <div className="fees-table-wrap">
              <table className="fees-table">
                <thead>
                  <tr>
                    <th>Fee component</th>
                    <th>Payment type</th>
                    <th className="fees-amount">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Admission fee</td><td>One-time</td><td className="fees-amount">{money(fee.admission)}</td></tr>
                  <tr><td>Tuition fee</td><td>Monthly</td><td className="fees-amount">{money(fee.tuition)}</td></tr>
                  <tr><td>Annual charges</td><td>Annual</td><td className="fees-amount">{money(fee.annual)}</td></tr>
                  <tr><td>Development charges</td><td>Annual</td><td className="fees-amount">{money(fee.development)}</td></tr>
                  <tr><td>Examination charges</td><td>Annual</td><td className="fees-amount">{money(fee.exam)}</td></tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={2}>Estimated first-year total</td>
                    <td className="fees-amount">{money(annualTotal(fee))}</td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <p className="fees-calculation-note">
              Total = admission + 12 months tuition + annual + development + examination charges.
            </p>
          </Reveal>
        </div>

        <Reveal className="fees-all-classes">
          <div className="fees-all-heading">
            <div>
              <span className="section-label">ALL CLASSES</span>
              <h3>Compare annual estimates</h3>
            </div>
            <span>Sample amounts only</span>
          </div>

          <div className="fees-compare-grid">
            {feeStructure.map((item, index) => (
              <button
                type="button"
                key={item.className}
                className={`fees-compare-card ${selectedClass === item.className ? "fees-active" : ""}`}
                onClick={() => setSelectedClass(item.className)}
              >
                <span className="fees-compare-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <strong>{item.className}</strong>
                <span>{money(annualTotal(item))}</span>
                <small>Estimated first year</small>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="fees-footnote">
          <div>
            <BookOpen size={20} />
            <p>
              <strong>Additional expenses</strong>
              Books, uniforms, transport and optional services are not included in these sample totals.
            </p>
          </div>
          <a href="#contact">
            Contact for official fees <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Facilities() {
  return (
    <section id="facilities" className="section facilities-section">
      <div className="container">
        <Reveal className="section-top">
          <div>
            <span className="section-label">LIFE AT SCHOOL</span>
            <h2 className="section-heading">
              Room to learn.
              <br />
              Space to grow.
            </h2>
          </div>

          <p className="section-description">
            School life brings together classroom learning, practical exploration,
            physical activity and opportunities for personal development.
          </p>
        </Reveal>

        <div className="rh-facilities-grid">
          {facilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.number} delay={(index % 4) * 0.07}>
                <article className="rh-facility-card">
                  <div className="rh-card-top">
                    <span className="rh-card-number">{item.number}</span>
                    <span className="rh-card-icon"><Icon size={25} /></span>
                  </div>

                  <span className="rh-card-category">{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>

                  <div className="rh-card-bottom">
                    <span>ROYAL HEIGHTS</span>
                    <ArrowUpRight size={18} />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <p className="facilities-verification-note">
          Contact the school to confirm the availability of specific facilities and services.
        </p>
      </div>
    </section>
  );
}

function AdmissionCTA() {
  return (
    <section className="admission-cta">
      <div className="cta-decoration cta-decoration-one" />
      <div className="cta-decoration cta-decoration-two" />

      <div className="container cta-inner">
        <Reveal>
          <span className="cta-label">
            <HeartHandshake size={16} /> LET'S START A CONVERSATION
          </span>

          <h2>
            Big dreams begin
            <br />
            with the right questions.
          </h2>

          <p>
            Looking for school information or admission guidance?
            Contact the school team with your enquiry.
          </p>

          <a className="btn-gold" href="#contact">
            Make an enquiry <ArrowRight size={17} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    enquiryType: "Admission enquiry",
    classInterested: "",
    message: "",
    consent: false,
  });

  const [state, setState] = useState("idle");
  const [feedback, setFeedback] = useState("");

  function update(event) {
    const { name, value, checked, type } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function submit(event) {
    event.preventDefault();
    setState("loading");
    setFeedback("");

    try {
      const base = (
        import.meta.env.VITE_API_URL || "http://localhost:5000"
      ).replace(/\/+$/, "");

      const response = await fetch(`${base}/api/enquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.message || "Enquiry could not be submitted.");
      }

      setState("success");
      setFeedback("Thank you! Your enquiry has been submitted.");

      setForm({
        name: "",
        phone: "",
        email: "",
        enquiryType: "Admission enquiry",
        classInterested: "",
        message: "",
        consent: false,
      });
    } catch (error) {
      setState("error");
      setFeedback(
        error.message === "Failed to fetch"
          ? "Backend server connect nahi ho raha. Server start karke dobara try karo."
          : error.message || "Something went wrong. Please try again."
      );
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-grid">
        <Reveal className="contact-copy">
          <span className="section-label">WE'RE HERE TO HELP</span>
          <h2 className="section-heading">
            Have a question?
            <br />
            Let's talk.
          </h2>

          <p className="section-description">
            Contact us for admission enquiries, school information and questions about available services.
          </p>

          <div className="contact-detail">
            <span className="contact-icon"><Phone size={20} /></span>
            <div>
              <small>CALL THE SCHOOL</small>
              <a href={`tel:${school.phone.replaceAll(" ", "")}`}>{school.phone}</a>
            </div>
          </div>

          <div className="contact-detail">
            <span className="contact-icon"><Mail size={20} /></span>
            <div>
              <small>EMAIL US</small>
              <a href={`mailto:${school.email}`}>{school.email}</a>
            </div>
          </div>

          <div className="contact-detail">
            <span className="contact-icon"><MapPin size={20} /></span>
            <div>
              <small>FIND OUR SCHOOL</small>
              <span>{school.address}</span>
            </div>
          </div>

          <div className="contact-detail">
            <span className="contact-icon"><Clock3 size={20} /></span>
            <div>
              <small>SCHOOL HOURS</small>
              <span>{school.hours}</span>
            </div>
          </div>

          <a
            className="map-link"
            href="https://www.google.com/maps/search/?api=1&query=Royal+Heights+Higher+Secondary+School+Jeerapur"
            target="_blank"
            rel="noreferrer"
          >
            Open location in Maps <ArrowUpRight size={16} />
          </a>
        </Reveal>

        <Reveal delay={0.1} className="contact-form-wrap">
          <div className="form-heading">
            <span className="form-heading-icon"><Send size={20} /></span>
            <div>
              <h3>Send us an enquiry</h3>
              <p>Fields marked * are required.</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={submit}>
            <div className="form-row">
              <label>
                Full name *
                <input
                  name="name"
                  value={form.name}
                  onChange={update}
                  placeholder="Your full name"
                  minLength={2}
                  maxLength={100}
                  autoComplete="name"
                  required
                />
              </label>

              <label>
                Phone number *
                <input
                  name="phone"
                  value={form.phone}
                  onChange={update}
                  placeholder="Mobile number"
                  type="tel"
                  inputMode="tel"
                  pattern="[+]?[0-9 ()-]{10,18}"
                  autoComplete="tel"
                  required
                />
              </label>
            </div>

            <label>
              Email address
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={update}
                placeholder="you@example.com"
                maxLength={150}
                autoComplete="email"
              />
            </label>

            <div className="form-row">
              <label>
                Enquiry type *
                <select
                  name="enquiryType"
                  value={form.enquiryType}
                  onChange={update}
                  required
                >
                  <option>Admission enquiry</option>
                  <option>General information</option>
                  <option>School facilities</option>
                  <option>Fee enquiry</option>
                  <option>Other</option>
                </select>
              </label>

              <label>
                Class interested in
                <select
                  name="classInterested"
                  value={form.classInterested}
                  onChange={update}
                >
                  <option value="">Select class</option>
                  {[
                    "Nursery",
                    "LKG",
                    "UKG",
                    ...Array.from({ length: 12 }, (_, i) => `Class ${i + 1}`),
                  ].map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>
              </label>
            </div>

            <label>
              Your message *
              <textarea
                name="message"
                value={form.message}
                onChange={update}
                placeholder="How can we help you?"
                rows={4}
                minLength={5}
                maxLength={1500}
                required
              />
            </label>

            <label className="consent-label">
              <input
                name="consent"
                type="checkbox"
                checked={form.consent}
                onChange={update}
                required
              />
              <span>
                I agree that the school may use these details to respond to my enquiry.
              </span>
            </label>

            {feedback && (
              <div
                className={`form-feedback ${state}`}
                role="status"
                aria-live="polite"
              >
                {state === "success" && <CheckCircle2 size={18} />}
                {feedback}
              </div>
            )}

            <button
              className="form-submit"
              type="submit"
              disabled={state === "loading"}
            >
              {state === "loading" ? "Submitting..." : "Submit enquiry"}
              {state !== "loading" && <ArrowRight size={18} />}
            </button>

            <p className="form-privacy">
              <ShieldCheck size={14} />
              Your details are intended for enquiry follow-up.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Logo light />
          <p>
            Helping learners discover their strengths, grow with confidence
            and prepare for the opportunities ahead.
          </p>
        </div>

        <div className="footer-column">
          <h4>Explore</h4>
          <a href="/#about">About the school</a>
          <a href="/#academics">Academics</a>
          <a href="/#fees">Fees Structure</a>
          <a href="/our-approach">Our approach</a>
          <a href="/our-inspiration">Our inspiration</a>
          <a href="/#facilities">Facilities</a>
          <a href="/#gallery">Gallery</a>
          <a href="/#contact">Contact</a>
        </div>

        <div className="footer-column">
          <h4>Get in touch</h4>
          <a href={`tel:${school.phone.replaceAll(" ", "")}`}>{school.phone}</a>
          <a href={`mailto:${school.email}`}>{school.email}</a>
          <span>Jeerapur, Madhya Pradesh</span>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {new Date().getFullYear()} Royal Heights Higher Secondary School</span>
          <span>UDISE: {school.udise}</span>
          <a href="/#home">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Academics />
        <FeesStructure />
        <Facilities />
        <GalleryLabs />
        <AdmissionCTA />
        <Contact />
      </main>

      <Footer />

      <a
        className="floating-call"
        href={`tel:${school.phone.replaceAll(" ", "")}`}
        aria-label="Call the school"
      >
        <Phone size={21} />
      </a>
    </>
  );
}

function AppLayout({ children }) {
  return (
    <>
      {children}
      <WebsiteLoader />
      <AdmissionPopup />
    </>
  );
}

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";

  const academicRoutes = {
    "/academics/foundational-learning": "foundational-learning",
    "/academics/academic-excellence": "academic-excellence",
    "/academics/beyond-academics": "beyond-academics",
  };

  if (path === "/our-approach") {
    return (
      <AppLayout>
        <OurApproach />
      </AppLayout>
    );
  }

  if (path === "/our-inspiration") {
    return (
      <AppLayout>
        <OurInspiration />
      </AppLayout>
    );
  }

  if (academicRoutes[path]) {
    return (
      <AppLayout>
        <AcademicDetail slug={academicRoutes[path]} />
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <HomePage />
    </AppLayout>
  );
}
