import { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import "./StartecIntelligent.css";
import c11 from "../../assets/c-1-1.png";
import c12 from "../../assets/c-1-2.png";
import c13 from "../../assets/c-1-3.png";
import c14 from "../../assets/c-1-4.png";
import c15 from "../../assets/c-1-5.png";
import c21 from "../../assets/c-2-1.png";
import c22 from "../../assets/c-2-2.png";
import c23 from "../../assets/c-2-3.png";
import c24 from "../../assets/c-2-4.png";
import c25 from "../../assets/c-2-5.png";
import c31 from "../../assets/c-3-1.png";
import c32 from "../../assets/c-3-2.png";
import c33 from "../../assets/c-3-3.png";
import c34 from "../../assets/c-3-4.png";
import c35 from "../../assets/c-3-5.png";
import c41 from "../../assets/c-4-1.png";
import c42 from "../../assets/c-4-2.png";
import c43 from "../../assets/c-4-3.png";
import c44 from "../../assets/c-4-4.png";
import c45 from "../../assets/c-4-5.png";
import AnimatedText from "../AnimatedText";

const CRASH_1 = [
  {
    img: c11,
    alt: "Incident Notification",
    h: "Incident Notification",
    p: "A crash incident has been reported. Initial assessment and investigation are currently in progress.",
  },
  {
    img: c12,
    alt: "Alert & Notification",
    h: "Alert & Notification",
    p: "Real-time incident alerts and updates for immediate action and monitoring.",
  },
  {
    img: c13,
    alt: "Vehicle Condition Report",
    h: "Vehicle Condition Report",
    p: "Summary of the vehicle’s current status, including damage assessment and operational condition.",
  },
  {
    img: c14,
    alt: "Vehicle Location Status",
    h: "Vehicle Location Status",
    p: "Current vehicle position and movement status updated in real time.",
  },
  {
    img: c15,
    alt: "Rider Condition",
    h: "Rider Condition",
    p: "Current health and safety status of the rider after the incident.",
  },
];
const CRASH_2 = [
  {
    img: c21,
    alt: "SI Connect locate and status",
    h: "Vehicle Location",
    p: "Stay connected to your bike from anywhere. Monitor real-time location, view travel history, control key systems, and plan ahead with nearby gas stations and live weather — all from one intuitive dashboard.",
  },
  {
    img: c22,
    alt: "SI Connect theft detection",
    h: "Security & System Notifications",
    p: "Get instant alerts when it matters most. Respond to theft events in real time, confirm incidents directly from the app, and stay up to date with system notifications ensuring you always have the latest features.",
  },
  {
    img: c23,
    alt: "SI Connect alerts and commands",
    h: "Notification & Command History",
    p: "Keep a clear record of every event and action. Review collision alerts with timestamps and locations, and track past commands — unlocking, lighting, engine changes — to confirm everything executed as intended.",
  },
  {
    img: c24,
    alt: "SI Connect nearby help",
    h: "Essential Services Locator",
    p: "Find what you need, fast. Locate nearby gas stations and medical facilities with live status, addresses, contact numbers, and direct map links — so you are never without support when you need it most.",
  },
  {
    img: c25,
    alt: "SI Connect nearby help",
    h: "Essential Services Locator",
    p: "Find what you need, fast. Locate nearby gas stations and medical facilities with live status, addresses, contact numbers, and direct map links — so you are never without support when you need it most.",
  },
];
const CRASH_3 = [
  {
    img: c31,
    alt: "SI Connect locate and status",
    h: "Vehicle Location",
    p: "Stay connected to your bike from anywhere. Monitor real-time location, view travel history, control key systems, and plan ahead with nearby gas stations and live weather — all from one intuitive dashboard.",
  },
  {
    img: c32,
    alt: "SI Connect theft detection",
    h: "Security & System Notifications",
    p: "Get instant alerts when it matters most. Respond to theft events in real time, confirm incidents directly from the app, and stay up to date with system notifications ensuring you always have the latest features.",
  },
  {
    img: c33,
    alt: "SI Connect alerts and commands",
    h: "Notification & Command History",
    p: "Keep a clear record of every event and action. Review collision alerts with timestamps and locations, and track past commands — unlocking, lighting, engine changes — to confirm everything executed as intended.",
  },
  {
    img: c34,
    alt: "SI Connect nearby help",
    h: "Essential Services Locator",
    p: "Find what you need, fast. Locate nearby gas stations and medical facilities with live status, addresses, contact numbers, and direct map links — so you are never without support when you need it most.",
  },
  {
    img: c35,
    alt: "SI Connect nearby help",
    h: "Essential Services Locator",
    p: "Find what you need, fast. Locate nearby gas stations and medical facilities with live status, addresses, contact numbers, and direct map links — so you are never without support when you need it most.",
  },
];
const CRASH_4 = [
  {
    img: c41,
    alt: "SI Connect locate and status",
    h: "Vehicle Location",
    p: "Stay connected to your bike from anywhere. Monitor real-time location, view travel history, control key systems, and plan ahead with nearby gas stations and live weather — all from one intuitive dashboard.",
  },
  {
    img: c42,
    alt: "SI Connect theft detection",
    h: "Security & System Notifications",
    p: "Get instant alerts when it matters most. Respond to theft events in real time, confirm incidents directly from the app, and stay up to date with system notifications ensuring you always have the latest features.",
  },
  {
    img: c43,
    alt: "SI Connect alerts and commands",
    h: "Notification & Command History",
    p: "Keep a clear record of every event and action. Review collision alerts with timestamps and locations, and track past commands — unlocking, lighting, engine changes — to confirm everything executed as intended.",
  },
  {
    img: c44,
    alt: "SI Connect nearby help",
    h: "Essential Services Locator",
    p: "Find what you need, fast. Locate nearby gas stations and medical facilities with live status, addresses, contact numbers, and direct map links — so you are never without support when you need it most.",
  },
  {
    img: c45,
    alt: "SI Connect nearby help",
    h: "Essential Services Locator",
    p: "Find what you need, fast. Locate nearby gas stations and medical facilities with live status, addresses, contact numbers, and direct map links — so you are never without support when you need it most.",
  },
];

/* ─── Hooks ─────────────────────────────────────────────────────────────── */

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

/* ─── Sub-components ────────────────────────────────────────────────────── */

function SectionHead({ no, label }) {
  return (
    <div className="sechead reveal" style={{ border: 0 }}>
      <span className="no">{no}</span>
      <span className="nm">{label}</span>
    </div>
  );
}

/* ─── Carousel ──────────────────────────────────────────────────────────── */

function Carousel({ interval = 4500, tag, slides }) {
  const rootRef = useRef(null);
  const timerRef = useRef(null);
  const idxRef = useRef(0);
  // const pausedRef = useRef(false);

  // Store callbacks in refs so event listeners never go stale
  const goRef = useRef(null);
  const playRef = useRef(null);

  const go = useCallback(
    (k) => {
      const root = rootRef.current;
      if (!root) return;

      const allSlides = root.querySelectorAll(".car-slide");
      const descs = root.querySelectorAll(".desc-slide");
      const dots = root.querySelectorAll(".dot");
      const step = root.querySelector(".car-step");
      const bar = root.querySelector(".car-bar i");
      const n = allSlides.length;

      idxRef.current = ((k % n) + n) % n;
      const i = idxRef.current;

      allSlides.forEach((s, x) => s.classList.toggle("is-active", x === i));
      descs.forEach((s, x) => s.classList.toggle("is-active", x === i));
      dots.forEach((d, x) => d.classList.toggle("is-active", x === i));

      if (step)
        step.textContent = `${String(i + 1).padStart(2, "0")} / ${String(n).padStart(2, "0")}`;

      if (bar) {
        bar.style.animation = "none";
        void bar.offsetWidth;
        bar.style.animation = `carbar ${interval}ms linear`;
        // if (pausedRef.current) bar.style.animationPlayState = "paused";
      }
    },
    [interval],
  );

  const stop = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const play = useCallback(() => {
    stop();
    timerRef.current = setInterval(
      () => goRef.current(idxRef.current + 1), // ← always reads latest go + latest idx
      interval,
    );
  }, [stop, interval]);

  // Keep refs in sync
  useEffect(() => {
    goRef.current = go;
  }, [go]);
  useEffect(() => {
    playRef.current = play;
  }, [play]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    go(0);
    play();

    // Wrap handlers so they always call the current ref version
    const dotHandlers = [];
    root.querySelectorAll(".dot").forEach((d, x) => {
      const handler = () => {
        goRef.current(x);
        playRef.current();
      };
      dotHandlers.push({ el: d, handler });
      d.addEventListener("click", handler);
    });

    const prevHandler = () => {
      goRef.current(idxRef.current - 1);
      playRef.current();
    };
    const nextHandler = () => {
      goRef.current(idxRef.current + 1);
      playRef.current();
    };

    root.querySelector(".nav-prev")?.addEventListener("click", prevHandler);
    root.querySelector(".nav-next")?.addEventListener("click", nextHandler);

    // const onEnter = () => {
    //   pausedRef.current = true;
    //   stop();
    //   const bar = root.querySelector(".car-bar i");
    //   if (bar) bar.style.animationPlayState = "paused";
    // };
    // const onLeave = () => {
    //   pausedRef.current = false;
    //   playRef.current();
    // };

    // root.addEventListener("mouseenter", onEnter);
    // root.addEventListener("mouseleave", onLeave);

    return () => {
      stop();
      dotHandlers.forEach(({ el, handler }) =>
        el.removeEventListener("click", handler),
      );
      root
        .querySelector(".nav-prev")
        ?.removeEventListener("click", prevHandler);
      root
        .querySelector(".nav-next")
        ?.removeEventListener("click", nextHandler);
      // root.removeEventListener("mouseenter", onEnter);
      // root.removeEventListener("mouseleave", onLeave);
    };
  }, []); // ← empty deps: runs once, refs handle staleness

  return (
    <div className="carousel reveal" ref={rootRef} data-interval={interval}>
      <div className="car-stage">
        {slides.map((s, i) => (
          <figure key={i} className={`car-slide${i === 0 ? " is-active" : ""}`}>
            <img loading="lazy" src={s.img} alt={s.alt} />
          </figure>
        ))}
      </div>

      <div className="car-desc">
        <div className="car-top">
          <span className="car-tag" style={{ fontSize: "7px" }}>
            {tag}
          </span>
          <span className="car-step">
            01 / {String(slides.length).padStart(2, "0")}
          </span>
        </div>
        <div className="desc-wrap">
          {slides.map((s, i) => (
            <div key={i} className={`desc-slide${i === 0 ? " is-active" : ""}`}>
              <h4>
                <AnimatedText as="span" text={s.h} />
              </h4>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
        <div className="car-bar">
          <i />
        </div>
        <div className="car-foot">
          <div className="car-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`dot${i === 0 ? " is-active" : ""}`}
                aria-label={`slide ${i + 1}`}
              />
            ))}
          </div>
          <div className="car-nav">
            <button className="nav-prev" aria-label="previous">
              ‹
            </button>
            <button className="nav-next" aria-label="next">
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Component ────────────────────────────────────────────────────── */

const OutcomeDetails = () => {
  useReveal();

  return (
    <div className="project-details-page">
      {/* ── INTERFACE §04 ── */}
      <section className="" id="interface">
        <div className="wrap" style={{ paddingTop: "40px" }}>
          {/* <SectionHead no="§04" label="Interface — As It Ships" /> */}
          <h2 className="sys-h reveal d1" style={{ marginBottom: "5px" }}>
            <AnimatedText as="span" text="User Incident Reports" />
          </h2>
          <p
            className="reveal d1"
            style={{
              color: "var(--soft)",
              fontSize: "15px",
              maxWidth: "640px",
              marginBottom: "30px",
            }}
          >
            User Incident Reports provide a structured and efficient way to
            capture, track, and manage issues reported by users. The system
            helps organizations document incidents accurately, monitor their
            resolution progress, and improve service quality by identifying
            recurring problems and ensuring timely corrective actions.
          </p>
          <div
            className=""
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div className="grouplbl reveal">
              <b>A.</b> SI INTELLIGENT · INSURANCE CLAIMS
            </div>
          </div>
          <Carousel
            interval={4500}
            tag="SI INTELLIGENT · Vehicle Damage Assessment"
            slides={CRASH_1}
          />
          <div
            className=""
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div className="grouplbl reveal">
              <b>B.</b> SI INTELLIGENT · INSURANCE CLAIMS
            </div>
          </div>
          <Carousel
            interval={5000}
            tag="SI INTELLIGENT · Vehicle Damage Assessment"
            slides={CRASH_2}
          />
          <div
            className=""
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div className="grouplbl reveal">
              <b>C.</b> SI INTELLIGENT · INSURANCE CLAIMS
            </div>
          </div>
          <Carousel
            interval={5000}
            tag="SI INTELLIGENT · Vehicle Damage Assessment"
            slides={CRASH_3}
          />
          <div
            className=""
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div className="grouplbl reveal">
              <b>D.</b> SI INTELLIGENT · INSURANCE CLAIMS
            </div>
          </div>
          <Carousel
            interval={5000}
            tag="SI INTELLIGENT · Vehicle Damage Assessment"
            slides={CRASH_4}
          />
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact">
        <div className="wrap">
          <div className="cta reveal in">
            <h2>
              <AnimatedText
                as="span"
                text="Bringing Startec Intelligent to your vehicles, your fleet, or your factory? "
              />
              <em>
                <AnimatedText
                  as="span"
                  text="Let's open a conversation."
                  delayStart={1980}
                />
              </em>
            </h2>
            <div className="row">
              <a href="/contact-us" className="btn btn-fill">
                TALK TO US <span className="a">↗</span>
              </a>
              <span className="mono">
                RIDERS · OPERATORS · OEMS · INVESTORS
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OutcomeDetails;
