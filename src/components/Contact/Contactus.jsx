import { useEffect, useState } from "react";
import "./ContactSections.css";
import AnimatedText from "../AnimatedText";

// ─── Reveal hook ──────────────────────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// ─── Reveal wrapper ───────────────────────────────────────────────────────────
function R({ d = "", children, tag: Tag = "div" }) {
  return <Tag className={`reveal ${d}`.trim()}>{children}</Tag>;
}

// ─── Section header ───────────────────────────────────────────────────────────
function SecHead({ no, nm }) {
  return (
    <div className="sechead">
      <span className="sec-no">{no}</span>
      <span className="sec-nm">{nm}</span>
    </div>
  );
}

// ─── Hero §00 ─────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <R d="d1">
          <div className="eyebrow">
            <b className="eyebrow-b">●</b> §00 — GET IN TOUCH{" "}
            <b className="eyebrow-b">/</b> WE READ EVERYTHING
          </div>
        </R>
        <R d="d2">
          <h1 className="h1">
            <AnimatedText as="span" text="Let's open a file." />
          </h1>
        </R>
        <R d="d3">
          <p className="lead">
            Partner, investor, press, or rider — tell us what you need and we'll
            route it to <b className="lead-b">the right person on the team.</b>
          </p>
        </R>
      </div>
    </header>
  );
}

// ─── Form §01 ─────────────────────────────────────────────────────────────────
function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    org: "",
    type: "General",
    msg: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const sendMail = () => {
    const subject = `[${form.type}] enquiry${form.name ? ` from ${form.name}` : ""}`;
    const body =
      `Name: ${form.name}\nEmail: ${form.email}` +
      (form.org ? `\nOrganisation: ${form.org}` : "") +
      `\nType: ${form.type}\n\n${form.msg}`;
    window.location.href = `mailto:info@startecdynamics.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="sec" id="form">
      <div className="wrap">
        <R>
          <SecHead no="§01" nm="Start a Conversation" />
        </R>
        <div className="contact-grid">
          {/* Form */}
          <R d="d1">
            <div className="form">
              <div className="field">
                <label className="label" htmlFor="f-name">
                  Name
                </label>
                <input
                  id="f-name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  className="input"
                />
              </div>
              <div className="field">
                <label className="label" htmlFor="f-email">
                  Email
                </label>
                <input
                  id="f-email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={handleChange}
                  className="input"
                />
              </div>
              <div className="field">
                <label className="label" htmlFor="f-org">
                  Organisation{" "}
                  <span className="label-optional">(optional)</span>
                </label>
                <input
                  id="f-org"
                  name="org"
                  type="text"
                  placeholder="Company / outlet"
                  value={form.org}
                  onChange={handleChange}
                  className="input"
                />
              </div>
              <div className="field">
                <label className="label" htmlFor="f-type">
                  Enquiry type
                </label>
                <select
                  id="f-type"
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  className="input"
                >
                  {[
                    "General",
                    "Partnership / OEM",
                    "Investment",
                    "Press & media",
                    "Careers",
                  ].map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div className="field-full">
                <label className="label" htmlFor="f-msg">
                  Message
                </label>
                <textarea
                  id="f-msg"
                  name="msg"
                  placeholder="Tell us what you're working on, or what you need from us."
                  value={form.msg}
                  onChange={handleChange}
                  className="textarea"
                />
              </div>
              <div className="field-full">
                <button onClick={sendMail} className="send-btn">
                  SEND MESSAGE <span className="arrow">↗</span>
                </button>
                <div className="form-note">
                  // Opens your email client, addressed to the Startec Dynamics
                  team.
                </div>
              </div>
            </div>
          </R>

          {/* Side panel */}
          <R d="d2">
            <div className="side">
              <div className="side-k">Direct line</div>
              <h3 className="side-h3">
                <AnimatedText as="span" text="Prefer email?" />
              </h3>
              <a href="mailto:info@startecdynamics.com" className="side-em">
                info@startecdynamics.com
              </a>
              <div className="side-k">Response</div>
              <p className="side-hours">
                <b className="side-hours-b">
                  We aim to reply within 2 business days.
                </b>{" "}
                Time zones: our HQ runs on Pacific Time (Vancouver), R&amp;D on
                Mountain Time (Calgary).
              </p>
            </div>
          </R>
        </div>
      </div>
    </section>
  );
}

// ─── Routes §02 ───────────────────────────────────────────────────────────────
const routeData = [
  {
    tag: "General",
    title: "Say hello",
    body: "Questions, ideas, or anything that doesn't fit a box below.",
    go: "info@startecdynamics.com",
    href: "mailto:info@startecdynamics.com?subject=General%20enquiry",
    delay: "d1",
  },
  {
    tag: "Partnerships & OEM",
    title: "Build with us",
    body: "Integrate Startec Intelligent at the factory, or co-develop something new.",
    go: "Start a partnership",
    href: "mailto:info@startecdynamics.com?subject=Partnership%20%2F%20OEM%20enquiry",
    delay: "d2",
  },
  {
    tag: "Investors",
    title: "Back the work",
    body: "The roadmap, the raise, and the numbers — under NDA where needed.",
    go: "Request the brief",
    href: "mailto:info@startecdynamics.com?subject=Investor%20enquiry",
    delay: "d1",
  },
  {
    tag: "Press & Media",
    title: "For journalists",
    body: "Interviews, comment, and brand assets. See the press page for coverage.",
    go: "Media enquiries",
    href: "mailto:info@startecdynamics.com?subject=Press%20enquiry",
    delay: "d2",
  },
];

function RouteCard({ tag, title, body, go, href, delay }) {
  return (
    <R d={delay}>
      <a href={href} className="route">
        <span className="route-tag">{tag}</span>
        <h4 className="route-h4">
          <AnimatedText as="span" text={title} />
        </h4>
        <p className="route-p">{body}</p>
        <span className="route-go">
          {go} <span className="arrow">↗</span>
        </span>
      </a>
    </R>
  );
}

function Routes() {
  return (
    <section className="sec" id="routes">
      <div className="wrap">
        <R>
          <SecHead no="§02" nm="Or Reach Us Directly" />
        </R>
        <div className="routes">
          {routeData.map((r) => (
            <RouteCard key={r.title} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Find Us §03 ──────────────────────────────────────────────────────────────
function FindUs() {
  return (
    <section className="sec" id="find">
      <div className="wrap">
        <R>
          <SecHead no="§03" nm="Find Us" />
        </R>
        <div className="locs">
          <a
            href="https://maps.app.goo.gl/EJhTEfN53VQ1n5wn9"
            target="_blank"
            rel="noreferrer"
          >
            <R d="d1">
              <div className="loc">
                <div className="loc-k">HQ · Commercial</div>
                <h3 className="loc-h3">
                  <AnimatedText as="span" text="Vancouver, BC" />
                </h3>
                <p className="loc-p">
                  Partnerships, commercial strategy, and investor relations.
                </p>
                <div className="loc-addr">
                  804 PACIFIC ST
                  <br />
                  VANCOUVER, BC V6Z 1C2
                  <br />
                  CANADA
                </div>
              </div>
            </R>
          </a>
          <a
            href="https://maps.app.goo.gl/uyiQbVqHkJsnzJV97"
            target="_blank"
            rel="noreferrer"
          >
            <R d="d2">
              <div className="loc">
                <div className="loc-k">R&amp;D · Engineering</div>
                <h3 className="loc-h3">
                  <AnimatedText as="span" text="Calgary, AB" />
                </h3>
                <p className="loc-p">
                  Hardware, firmware, AI, and test — at the U Calgary Life
                  Sciences Innovation Hub.
                </p>
                <div className="loc-addr">
                  3655 36 ST NW
                  <br />
                  CALGARY, AB T2L 1Y8
                  <br />
                  CANADA
                </div>
              </div>
            </R>
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Root export ──────────────────────────────────────────────────────────────
export default function ContactSections() {
  useReveal();
  return (
    <div className="contact-page-sections">
      <Hero />
      <ContactForm />
      <Routes />
      <FindUs />
    </div>
  );
}
