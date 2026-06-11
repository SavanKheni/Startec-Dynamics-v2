import { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import "./StartecIntelligent.css";
import siFig1 from "../../assets/fm1.jpg";
import siFig2 from "../../assets/f-d3.png";
import siApp1 from "../../assets/si-sonnect-1.png";
import siApp2 from "../../assets/si-sonnect-2.png";
import siApp3 from "../../assets/si-sonnect-3.png";
import siApp4 from "../../assets/si-sonnect-4.png";
import SIIntelligent1 from "../../assets/SIIntelligent-1.png";
import SIIntelligent2 from "../../assets/SIIntelligent-2.png";
import SIIntelligent3 from "../../assets/SIIntelligent-3.png";
import appIcon from "../../assets/unnamed.png";
import AnimatedText from "../AnimatedText";

/* ─── Constants / Data ──────────────────────────────────────────────────── */

const CAPABILITIES = [
  {
    id: "F-01",
    d: "d1",
    title: "Real-Time Vehicle Tracking",
    body: "Monitor live location and movement of every vehicle with high accuracy. Stay updated with continuous tracking and instant visibility across your entire fleet.",
  },
  {
    id: "F-02",
    d: "d1",
    title: "Geo-Fencing & Alerts",
    body: "Define operational zones and receive alerts when vehicles enter or exit predefined areas. Ensure compliance and prevent unauthorized movement.",
  },
  {
    id: "F-03",
    d: "d2",
    title: "Driver Behavior Monitoring",
    body: "Track driving patterns such as speed, harsh braking, and idle time. Improve safety and optimize performance through actionable insights.",
  },
  {
    id: "F-04",
    d: "d2",
    title: "Trip History & Analytics",
    body: "Access detailed logs of past trips, routes, and events. Analyze data to improve efficiency and operational planning.",
  },
  {
    id: "F-05",
    d: "d3",
    title: "Centralized Dashboard",
    body: "Manage all vehicles from a single interface with live status, alerts, and system controls designed for fleet operators.",
  },
  {
    id: "F-06",
    d: "d3",
    title: "Incident & Alert Management",
    body: "Respond quickly to theft, violations, or emergencies with real-time notifications and detailed event tracking.",
  },
];

const UNIT_SPECS = [
  ["Compute", "Secure 32-bit MCU"],
  ["Location", "Multi-GNSS"],
  ["Connectivity", "LTE + SMS fallback"],
  ["Short range", "BLE 5 + UWB keyless"],
  ["Sensing", "6-axis IMU"],
  ["Power", "Vehicle + deep-sleep modes"],
];

const STATUS_ITEMS = [
  {
    k: "● Live",
    d: "d1",
    h: "Actively deployed",
    p: "Fleet Management system is actively used by operators to monitor vehicles, optimize routes, and improve operational efficiency in real-time.",
  },
  {
    k: "Use Case",
    d: "d1",
    h: "Fleet operators & logistics",
    p: "Designed for businesses managing multiple vehicles — logistics, delivery services, and mobility operators requiring full visibility.",
  },
  {
    k: "Impact",
    d: "d2",
    h: "Operational efficiency",
    p: "Reduces downtime, improves driver accountability, and enhances fleet security through continuous monitoring and data-driven insights.",
  },
  {
    k: "Scalability",
    d: "d2",
    h: "Built for growth",
    p: "From small fleets to large-scale deployments, the system scales seamlessly with increasing vehicles and operational complexity.",
  },
  {
    k: "Roadmap",
    d: "d3",
    h: "Advanced analytics & AI",
    p: "Future updates include predictive maintenance, AI-based route optimization, and deeper behavioral intelligence for smarter fleet operations.",
  },
];

const SI_CONNECT_SLIDES = [
  {
    img: siApp1,
    alt: "SI Connect locate and status",
    h: "Vehicle Location",
    p: "Stay connected to your bike from anywhere. Monitor real-time location, view travel history, control key systems, and plan ahead with nearby gas stations and live weather — all from one intuitive dashboard.",
  },
  {
    img: siApp2,
    alt: "SI Connect theft detection",
    h: "Security & System Notifications",
    p: "Get instant alerts when it matters most. Respond to theft events in real time, confirm incidents directly from the app, and stay up to date with system notifications ensuring you always have the latest features.",
  },
  {
    img: siApp3,
    alt: "SI Connect alerts and commands",
    h: "Notification & Command History",
    p: "Keep a clear record of every event and action. Review collision alerts with timestamps and locations, and track past commands — unlocking, lighting, engine changes — to confirm everything executed as intended.",
  },
  {
    img: siApp4,
    alt: "SI Connect nearby help",
    h: "Essential Services Locator",
    p: "Find what you need, fast. Locate nearby gas stations and medical facilities with live status, addresses, contact numbers, and direct map links — so you are never without support when you need it most.",
  },
];

const FLEET_SLIDES = [
  {
    img: SIIntelligent1,
    alt: "SI Connect locate and status",
    h: "Smart Protection, Always On",
    p: "SI Intelligent secures your motorcycle with continuous real-time monitoring and instant threat detection. It alerts you to unusual activity before issues escalate. Whether parked at home or outside, your vehicle stays protected with fast, reliable system response.",
  },
  {
    img: SIIntelligent2,
    alt: "SI Connect theft detection",
    h: "Real-Time Tracking & Alerts",
    p: "Stay connected to your motorcycle with real-time tracking and instant alerts. Get notified of unauthorized movement or suspicious activity and view live location in the app. Every movement is recorded, keeping you informed, aware, and in control at all times.",
  },
  {
    img: SIIntelligent3,
    alt: "SI Connect alerts and commands",
    h: "Vehicle Maintenance",
    p: "Access trip history, alerts, and event logs anytime. Review activity patterns and monitor your motorcycle remotely with ease. SI Intelligent offers a simple, user-friendly system designed to keep you informed, in control, and confident about your vehicle’s safety.",
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
    <div className="sechead reveal">
      <span className="no">{no}</span>
      <span className="nm">{label}</span>
    </div>
  );
}

function PhotoFigure({ src, alt, caption, tag, style, imgStyle }) {
  return (
    <div className="photo reveal" style={style}>
      <img src={src} alt={alt} style={imgStyle} />
      <div className="cap">
        <span>{caption}</span>
        <b>{tag}</b>
      </div>
    </div>
  );
}

function TelemetryPanel() {
  return (
    <div className="panel reveal d4">
      <div className="ptop">
        <span>
          <AnimatedText as="span" text="STARTEC INTELLIGENT · TELEMETRY" />
        </span>
        <span className="secured">
          <span className="d" />
          SECURED
        </span>
      </div>

      <div className="gw">
        <svg width={100} height={100} viewBox="0 0 104 104">
          <circle
            cx={52}
            cy={52}
            r={40}
            fill="none"
            stroke="rgba(255,255,255,.08)"
            strokeWidth={8}
          />
          <circle
            className="sweep"
            cx={52}
            cy={52}
            r={40}
            fill="none"
            stroke="#D6341C"
            strokeWidth={8}
            strokeLinecap="round"
            transform="rotate(135 52 52)"
          />
          <text
            x={52}
            y={49}
            textAnchor="middle"
            fill="#F1EEE6"
            fontFamily="Space Mono"
            fontWeight={700}
            fontSize={12}
          >
            RIDE
          </text>
          <text
            x={52}
            y={63}
            textAnchor="middle"
            fill="#9A9DA4"
            fontFamily="Space Mono"
            fontSize={8}
          >
            MODE
          </text>
        </svg>
        <div className="gr">
          <div className="big">
            68<span className="u"> km/h</span>
          </div>
          <div className="unit">PAIRED · SI CONNECT</div>
        </div>
      </div>

      <div className="tele">
        {[
          { l: "Ignition", v: "Keyless · On" },
          { l: "Battery", v: "96%" },
          {
            l: "Anti-theft",
            v: (
              <>
                <span className="g" />
                Armed
              </>
            ),
          },
          { l: "SOS", v: "Standby" },
        ].map(({ l, v }) => (
          <div className="tc" key={l}>
            <div className="l">{l}</div>
            <div className="v">{v}</div>
          </div>
        ))}
      </div>

      <div className="map">
        <svg
          viewBox="0 0 320 88"
          preserveAspectRatio="none"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <path
            d="M28 70 C 90 54, 120 28, 200 30 S 288 18, 300 10"
            fill="none"
            stroke="#D6341C"
            strokeWidth={2}
            strokeDasharray="4 5"
            opacity=".85"
          />
        </svg>
        <span className="trk" />
      </div>
    </div>
  );
}

// Reusable animated rect wrapper
const Box = ({ x, y, width, height, delay, rectChildren, textChildren }) => (
  <motion.g>
    {/* Rect animates first */}
    <motion.g
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformOrigin: `${x + width / 2}px ${y + height / 2}px` }}
    >
      {rectChildren}
    </motion.g>

    {/* Text animates after rect */}
    <motion.g
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-80px" }}
      transition={{
        duration: 0.5,
        delay: delay + 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {textChildren}
    </motion.g>
  </motion.g>
);

// Animated arrow path
const Arrow = ({ d, delay, labelX, labelY, labelText, points }) => (
  <motion.g
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: false, margin: "-80px" }}
    transition={{ duration: 0.4, delay, ease: "easeOut" }}
  >
    <motion.path
      d={d}
      fill="none"
      stroke="#D6341C"
      strokeWidth={2}
      strokeDasharray="6 4"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: false, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: "easeInOut" }}
    />
    <motion.polygon
      points={points}
      fill="#D6341C"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, margin: "-80px" }}
      transition={{ duration: 0.3, delay: delay + 0.6 }}
    />
    <motion.text
      x={labelX}
      y={labelY}
      fill="#1B1A16"
      fontFamily="'Space Mono',monospace"
      fontSize={10}
      fontWeight={700}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, margin: "-80px" }}
      transition={{ duration: 0.3, delay: delay + 0.5 }}
    >
      {labelText}
    </motion.text>
  </motion.g>
);

function SystemDiagram() {
  return (
    <div className="schem reveal d2">
      <svg
        viewBox="0 0 1000 420"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Startec Intelligent system architecture"
      >
        {/* ON-BOARD UNIT — delay 0 */}
        <Box
          x={40}
          y={150}
          width={270}
          height={170}
          delay={0}
          rectChildren={
            <rect
              x={40}
              y={150}
              width={270}
              height={170}
              rx={4}
              fill="#E9E5DA"
              stroke="#1B1A16"
              strokeWidth="1.5"
            />
          }
          textChildren={
            <>
              <text
                x={58}
                y={178}
                fill="#1B1A16"
                fontFamily="'Space Mono',monospace"
                fontSize={12}
                fontWeight={700}
              >
                ON-BOARD UNIT
              </text>
              <text
                x={58}
                y={194}
                fill="#908D82"
                fontFamily="'Space Mono',monospace"
                fontSize={9}
                letterSpacing={1}
              >
                MOUNTED ON THE VEHICLE
              </text>
              {[
                "▪ Secure 32-bit MCU",
                "▪ Multi-GNSS positioning",
                "▪ LTE modem + SMS fallback",
                "▪ Bluetooth LE 5",
                "▪ 6-axis IMU (crash/motion)",
              ].map((t, i) => (
                <text
                  key={t}
                  x={58}
                  y={224 + i * 20}
                  fill="#1B1A16"
                  fontFamily="'Space Mono',monospace"
                  fontSize={11}
                >
                  {t}
                </text>
              ))}
            </>
          }
        />

        {/* STARTEC CLOUD — delay 0.3 */}
        <Box
          x={430}
          y={232}
          width={180}
          height={86}
          delay={0.3}
          rectChildren={
            <rect
              x={430}
              y={232}
              width={180}
              height={86}
              rx={4}
              fill="#E9E5DA"
              stroke="#1B1A16"
              strokeWidth="1.5"
            />
          }
          textChildren={
            <>
              <text
                x={520}
                y={270}
                textAnchor="middle"
                fill="#1B1A16"
                fontFamily="'Space Mono',monospace"
                fontSize={12}
                fontWeight={700}
              >
                STARTEC CLOUD
              </text>
              <text
                x={520}
                y={288}
                textAnchor="middle"
                fill="#908D82"
                fontFamily="'Space Mono',monospace"
                fontSize={9}
                letterSpacing={1}
              >
                DATA · OTA · LOGIC
              </text>
            </>
          }
        />

        {/* SI CONNECT — delay 0.6 */}
        <Box
          x={720}
          y={70}
          width={240}
          height={100}
          delay={0.6}
          rectChildren={
            <rect
              x={720}
              y={70}
              width={240}
              height={100}
              rx={4}
              fill="#E9E5DA"
              stroke="#1B1A16"
              strokeWidth="1.5"
            />
          }
          textChildren={
            <>
              <text
                x={840}
                y={112}
                textAnchor="middle"
                fill="#1B1A16"
                fontFamily="'Space Mono',monospace"
                fontSize={12}
                fontWeight={700}
              >
                SI CONNECT
              </text>
              <text
                x={840}
                y={130}
                textAnchor="middle"
                fill="#908D82"
                fontFamily="'Space Mono',monospace"
                fontSize={9}
                letterSpacing={1}
              >
                RIDER APP
              </text>
            </>
          }
        />

        {/* SI OPERATOR — delay 0.6 */}
        <Box
          x={720}
          y={300}
          width={240}
          height={100}
          delay={0.6}
          rectChildren={
            <rect
              x={720}
              y={300}
              width={240}
              height={100}
              rx={4}
              fill="#E9E5DA"
              stroke="#1B1A16"
              strokeWidth="1.5"
            />
          }
          textChildren={
            <>
              <text
                x={840}
                y={342}
                textAnchor="middle"
                fill="#1B1A16"
                fontFamily="'Space Mono',monospace"
                fontSize={12}
                fontWeight={700}
              >
                SI OPERATOR
              </text>
              <text
                x={840}
                y={360}
                textAnchor="middle"
                fill="#908D82"
                fontFamily="'Space Mono',monospace"
                fontSize={9}
                letterSpacing={1}
              >
                FLEET / SETUP
              </text>
            </>
          }
        />

        {/* Arrow: OBU → SI Connect (BLE direct) — delay 0.9 */}
        <Arrow
          d="M310 190 L720 120"
          points="720,120 706,114 710,127"
          delay={0.9}
          labelX={470}
          labelY={143}
          labelText="BLE 5 · DIRECT"
        />

        {/* Arrow: OBU → Cloud (LTE) — delay 1.0 */}
        <Arrow
          d="M310 270 L430 273"
          points="430,273 416,267 416,279"
          delay={1.0}
          labelX={330}
          labelY={262}
          labelText="LTE"
        />

        {/* Arrow: Cloud → SI Connect (OTA) — delay 1.2 */}
        <Arrow
          d="M610 250 L720 150"
          points="720,150 706,150 713,162"
          delay={1.2}
          labelX={616}
          labelY={196}
          labelText="OTA + SYNC"
        />

        {/* Arrow: Cloud → SI Operator (Fleet Data) — delay 1.3 */}
        <Arrow
          d="M610 300 L720 340"
          points="720,340 706,332 705,345"
          delay={1.3}
          labelX={616}
          labelY={328}
          labelText="FLEET DATA"
        />
      </svg>
    </div>
  );
}
/* ─── Carousel ──────────────────────────────────────────────────────────── */

function Carousel({ interval = 4500, tag, slides }) {
  const rootRef = useRef(null);
  const timerRef = useRef(null);
  const idxRef = useRef(0);
  const pausedRef = useRef(false);

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
        if (pausedRef.current) bar.style.animationPlayState = "paused";
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

    const onEnter = () => {
      pausedRef.current = true;
      stop();
      const bar = root.querySelector(".car-bar i");
      if (bar) bar.style.animationPlayState = "paused";
    };
    const onLeave = () => {
      pausedRef.current = false;
      playRef.current();
    };

    root.addEventListener("mouseenter", onEnter);
    root.addEventListener("mouseleave", onLeave);

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
      root.removeEventListener("mouseenter", onEnter);
      root.removeEventListener("mouseleave", onLeave);
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
          <span className="car-tag">{tag}</span>
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

const FleetManagementDetails = () => {
  useReveal();

  return (
    <div className="project-details-page">
      {/* ── HERO ── */}
      <header className="hero" id="top">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <div className="eyebrow reveal d1">
                <b>●</b> PROJECT 01 · FILE OPEN <b>/</b> STATUS: SHIPPING
              </div>
              <h1 className="reveal d2">
                <AnimatedText as="span" text="Fleet" />
                <br />
                <AnimatedText as="span" text="Management" />
              </h1>
              <p className="tag reveal d3">
                A unified control system for modern fleets —{" "}
                <span className="soft">
                  real-time tracking, operational visibility, and intelligent
                  monitoring built for scale and reliability.
                </span>
              </p>
              <div className="meta reveal d3">
                SHIPPING SINCE <b>2022</b> · DEPLOYED ON THE <b>CALYPSO ORI</b>
              </div>
              <div className="h-actions reveal d4">
                <a href="/contact-us" className="btn btn-fill">
                  TALK TO US <span className="a">↗</span>
                </a>
                <a href="#cap" className="btn btn-line">
                  HOW IT WORKS <span className="a">↓</span>
                </a>
              </div>
            </div>

            <TelemetryPanel />
          </div>
        </div>
      </header>

      {/* ── OVERVIEW §01 ── */}
      <section className="sec ov" id="overview">
        <div className="wrap">
          <SectionHead no="§01" label="Overview" />
          <p className="big reveal d1">
            <AnimatedText
              as="span"
              text="A motorcycle doesn't have to be electric or expensive"
            />{" "}
            <em>
              <AnimatedText as="span" text="to be smart." delayStart={1380} />
            </em>
          </p>
          <div className="cols">
            <p className="reveal d1">
              <b>Startec Fleet Management System</b> delivers complete
              visibility over vehicles, drivers, and operations through a
              centralized platform. It combines real-time tracking, geofencing,
              and live alerts to ensure fleets stay secure, efficient, and fully
              monitored at all times.
            </p>
            <p className="reveal d2">
              Built for scalability, the system enables operators to manage
              multiple vehicles with precision — from route tracking and
              behavior analysis to incident response and reporting. It
              transforms raw movement data into actionable insights for smarter
              decision-making.
            </p>
          </div>
          <PhotoFigure
            src={siFig1}
            alt="SI Fleet Management dashboard interface overview"
            caption="FIG. A — SI FLEET MANAGEMENT · DASHBOARD INTERFACE OVERVIEW"
            tag="SOFTWARE"
            style={{ marginTop: "36px" }}
          />
        </div>
      </section>

      {/* ── CAPABILITIES §02 ── */}
      <section className="sec" id="cap">
        <div className="wrap">
          <SectionHead no="§02" label="Capabilities" />
          <div className="cap-grid">
            {CAPABILITIES.map(({ id, title, d, body }) => (
              <div className={`cap-row reveal ${d}`} key={id}>
                <div className="cap-no">{id}</div>
                <div className="cap-cell">
                  <h3>
                    <AnimatedText as="span" text={title} />
                    <span className="ar">→</span>
                  </h3>
                  <p>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SYSTEM §03 ── */}
      <section className="sec" id="system">
        <div className="wrap">
          <SectionHead no="§03" label="System" />
          <h2 className="sys-h reveal d1">
            <AnimatedText as="span" text="How the system fits together." />
          </h2>
          <PhotoFigure
            src={siFig1}
            alt="SI Fleet Management GPS tracking and analytics interface"
            caption="FIG. B — SI FLEET MANAGEMENT · GPS TRACKING & ANALYTICS VIEW"
            tag="SOFTWARE"
            style={{ marginBottom: "28px" }}
          />
          <SystemDiagram />
          <div className="sys-grid">
            <div className="unitspec reveal d1">
              <div className="h">
                <span>ON-BOARD UNIT</span>
                <span>SD-SI-01</span>
              </div>
              {UNIT_SPECS.map(([k, v]) => (
                <div className="r" key={k}>
                  <span className="k">{k}</span>
                  <span className="v">{v}</span>
                </div>
              ))}
            </div>
            <div className="apps">
              <div className="app reveal d1">
                <div className="t">
                  <h4>
                    <img src={appIcon} alt="" className="app-icon" />
                    SI Connect
                  </h4>
                  <span>Rider · live on Play</span>
                </div>
                <p>
                  The rider's window into the bike — ignition, location,
                  dashboard, and SOS, in one app.
                </p>
              </div>
              <div className="app reveal d2">
                <div className="t">
                  <h4>SI Operator</h4>
                  <span>Fleet / Setup</span>
                </div>
                <p>
                  Provisioning, access control, and fleet oversight for
                  operators and manufacturers managing many vehicles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERFACE §04 ── */}
      <section className="sec" id="interface">
        <div className="wrap">
          <SectionHead no="§04" label="Interface — Fleet System" />
          <h2 className="sys-h reveal d1">
            <AnimatedText as="span" text="The product, as it looks today." />
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
            Real screens from the shipping product — the SI Connect rider app
            and the SI Fleet Management console operators use to oversee whole
            fleets. They cycle automatically; hover to pause.
          </p>

          <div
            className=""
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div className="grouplbl reveal">
              <b>A.</b> SI CONNECT · RIDER APP
            </div>
            <a className="" href="/si-connect">
              <div className="act">
                OPEN FILE <span className="a">↗</span>
              </div>
            </a>
          </div>
          <Carousel
            interval={4500}
            tag="SI CONNECT · RIDER"
            slides={SI_CONNECT_SLIDES}
          />
          <div
            className=""
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div className="grouplbl reveal">
              <b>B.</b> Startec · Intelligent
            </div>
            <a className="" href="/startec-intelligent">
              <div className="act">
                OPEN FILE <span className="a">↗</span>
              </div>
            </a>
          </div>

          <Carousel
            interval={5000}
            tag="Startec · Intelligent"
            slides={FLEET_SLIDES}
          />
        </div>
      </section>

      {/* ── STATUS §05 ── */}
      <section className="sec status" id="status">
        <div className="wrap">
          <SectionHead no="§05" label="Status & Deployment" />
          {STATUS_ITEMS.map(({ k, d, h, p }) => (
            <div className={`row reveal ${d}`} key={k}>
              <div className="k">{k}</div>
              <div className="v">
                <h4>
                  <AnimatedText as="span" text={h} />
                </h4>
                <p>{p}</p>
              </div>
            </div>
          ))}
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
              <a
                href="mailto:info@startecdynamics.com"
                className="btn btn-fill"
              >
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

export default FleetManagementDetails;
