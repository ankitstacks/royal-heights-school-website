import React from "react";
import { motion } from "motion/react";
import {
  BookOpen,
  FlaskConical,
  Monitor,
  Trophy,
  Bus,
  HeartPulse,
  Presentation,
  Users,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const facilities = [
  {
    number: "01",
    title: "Learning Spaces",
    description:
      "A supportive learning environment designed to encourage curiosity, concentration and classroom participation.",
    icon: BookOpen,
    category: "ACADEMIC",
  },
  {
    number: "02",
    title: "Science Laboratories",
    description:
      "Practical learning opportunities that help students explore scientific concepts through experiments.",
    icon: FlaskConical,
    category: "PRACTICAL LEARNING",
  },
  {
    number: "03",
    title: "Computer Education",
    description:
      "Opportunities to develop digital awareness, logical thinking and essential computer skills.",
    icon: Monitor,
    category: "DIGITAL LEARNING",
  },
  {
    number: "04",
    title: "Sports & Games",
    description:
      "Physical activities that encourage teamwork, discipline, confidence and a healthy competitive spirit.",
    icon: Trophy,
    category: "SPORTS",
  },
  {
    number: "05",
    title: "Transport",
    description:
      "Transport-related information and availability can be confirmed with the school administration.",
    icon: Bus,
    category: "STUDENT CONVENIENCE",
  },
  {
    number: "06",
    title: "Health & Safety",
    description:
      "A student-focused environment where wellbeing, responsible behaviour and safety awareness matter.",
    icon: HeartPulse,
    category: "STUDENT WELLBEING",
  },
  {
    number: "07",
    title: "Smart Learning",
    description:
      "Technology-supported teaching methods can make lessons more engaging and easier to understand.",
    icon: Presentation,
    category: "CLASSROOM EXPERIENCE",
  },
  {
    number: "08",
    title: "Activities & Events",
    description:
      "School activities, celebrations and competitions provide opportunities to build confidence and express creativity.",
    icon: Users,
    category: "ALL-ROUND DEVELOPMENT",
  },
];

export default function Facilities() {
  return (
    <main className="rh-facilities">
      <section className="rh-facilities-hero">
        <div className="rh-facilities-glow rh-glow-one" />
        <div className="rh-facilities-glow rh-glow-two" />

        <motion.div
          className="rh-facilities-hero-content"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="rh-eyebrow">
            <Sparkles size={15} />
            LEARNING BEYOND THE CLASSROOM
          </span>

          <h1>
            An environment to
            <br />
            <span>learn, explore & grow.</span>
          </h1>

          <p>
            Discover the learning experiences, activities and student-focused
            opportunities that form part of school life at Royal Heights
            Higher Secondary School, Jeerapur.
          </p>

          <a href="#facilities-list" className="rh-primary-button">
            Explore Facilities <ArrowUpRight size={18} />
          </a>
        </motion.div>

        <div className="rh-hero-decoration" aria-hidden="true">
          <BookOpen size={100} strokeWidth={0.8} />
        </div>
      </section>

      <section className="rh-facilities-section" id="facilities-list">
        <motion.div
          className="rh-facilities-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
        >
          <span className="rh-eyebrow">THE SCHOOL EXPERIENCE</span>
          <h2>Spaces and opportunities for every learner.</h2>
          <p>
            Education includes classroom learning, practical exploration,
            personal development and participation in school life.
          </p>
        </motion.div>

        <div className="rh-facilities-grid">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;

            return (
              <motion.article
                className="rh-facility-card"
                key={facility.number}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: (index % 4) * 0.08,
                }}
                whileHover={{ y: -7 }}
              >
                <div className="rh-card-top">
                  <span className="rh-card-number">
                    {facility.number}
                  </span>

                  <span className="rh-card-icon">
                    <Icon size={25} strokeWidth={1.7} />
                  </span>
                </div>

                <span className="rh-card-category">
                  {facility.category}
                </span>

                <h3>{facility.title}</h3>
                <p>{facility.description}</p>

                <div className="rh-card-bottom">
                  <span>ROYAL HEIGHTS</span>
                  <ArrowUpRight size={18} />
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="rh-facilities-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="rh-eyebrow">NEED MORE INFORMATION?</span>
            <h2>We are here to help.</h2>
            <p>
              Contact the school to confirm available facilities, transport
              routes, timings and other arrangements.
            </p>
          </div>

          <a href="/#contact" className="rh-primary-button">
            Contact School <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </section>
    </main>
  );
}