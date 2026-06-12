import { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import "./StartecIntelligent.css";
import siFig1 from "../../assets/si-sonnect-1.png";
import siFig2 from "../../assets/si-sonnect-2.png";
import SIIntelligent1 from "../../assets/SIIntelligent-1.png";
import SIIntelligent2 from "../../assets/SIIntelligent-2.png";
import SIIntelligent3 from "../../assets/SIIntelligent-3.png";
import dashboardScreen from "../../assets/f-d.png";
import dashboardScreen2 from "../../assets/f-d2.png";
import dashboardScreen4 from "../../assets/f-d4.png";
import dashboardScreen5 from "../../assets/f-d5.png";
import dashboardScreen6 from "../../assets/f-d6.png";
import dashboardScreen7 from "../../assets/f-d7.png";
import appIcon from "../../assets/unnamed.png";
import AnimatedText from "../AnimatedText";

/* ─── Constants / Data ──────────────────────────────────────────────────── */

const CAPABILITIES = [
  {
    id: "F-01",
    d: "d1",
    title: "Real-Time Vehicle Tracking",
    body: "Track your motorcycle live with precise location data, movement history, and route visualization directly from the app.",
  },
  {
    id: "F-02",
    d: "d1",
    title: "Security & Theft Alerts",
    body: "Receive instant notifications for unauthorized movement or suspicious activity, ensuring your vehicle stays protected at all times.",
  },
  {
    id: "F-03",
    d: "d2",
    title: "Remote Commands",
    body: "Control key vehicle functions remotely — from locking systems to activating features — all through a simple, responsive interface.",
  },
  {
    id: "F-04",
    d: "d2",
    title: "Trip & Activity History",
    body: "Review past rides, routes, and events with detailed logs that help you understand usage patterns and vehicle activity.",
  },
  {
    id: "F-05",
    d: "d3",
    title: "Smart Notifications",
    body: "Stay updated with system alerts, updates, and important events, ensuring you never miss critical information about your vehicle.",
  },
  {
    id: "F-06",
    d: "d3",
    title: "Essential Services Access",
    body: "Locate nearby fuel stations, medical facilities, and support services with integrated maps and real-time information.",
  },
];

const UNIT_SPECS = [
  ["Compute", "Secure 32-bit MCU"],
  ["Location", "Multi-GNSS"],
  ["Connectivity", "LTE + SMS fallback"],
  ["Short range", "BLE 5 + UWB keyless"],
  ["Sensing", "i-oxis IMU"],
  ["Power", "Vehicle + deep-sleep modes"],
];

const STATUS_ITEMS = [
  {
    k: "● Live",
    d: "d1",
    h: "Available to riders",
    p: "SI Connect is actively used by riders to monitor, control, and manage their vehicles in real time through a seamless mobile experience.",
  },
  {
    k: "Platform",
    d: "d1",
    h: "Mobile-first experience",
    p: "Designed for Android devices, the app delivers fast, reliable performance with an intuitive interface built for everyday use.",
  },
  {
    k: "Integration",
    d: "d2",
    h: "Connected with SI hardware",
    p: "Works in sync with Startec Intelligent hardware to deliver accurate data, alerts, and remote functionality.",
  },
  {
    k: "Experience",
    d: "d2",
    h: "User-centric design",
    p: "Simplifies complex vehicle data into a clean, easy-to-understand interface that keeps riders informed and in control.",
  },
  {
    k: "Roadmap",
    d: "d3",
    h: "Enhanced insights & automation",
    p: "Future updates include smarter notifications, predictive insights, and deeper personalization for rider behavior and preferences.",
  },
];

const SI_CONNECT_SLIDES = [
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

const FLEET_SLIDES = [
  {
    img: dashboardScreen2,
    alt: "SI Fleet overview",
    h: "Overview Screen",
    p: "Your fleet at a glance. Track active bikes, system alerts, user counts, and trip data through live KPI cards, comparative charts, and an interactive accident map — all consolidated in one command center.",
  },
  {
    img: dashboardScreen7,
    alt: "SI Fleet live tracking",
    h: "GPS Tracking",
    p: "Monitor every vehicle with precision. Search by VIN to visualize routes, track engine and lock status, analyze IMU and speed data, and export records — giving you full visibility over movement and behavior.",
  },
  {
    img: dashboardScreen,
    alt: "SI Fleet driver management",
    h: "Live Tracking",
    p: "Complete real-time oversight of your entire fleet. Monitor vehicle positions, health, and activity as they happen — reducing operational costs, improving response times, and keeping every journey accountable.",
  },
  {
    img: dashboardScreen6,
    alt: "SI Fleet alerts",
    h: "Alerts Notifications",
    p: "Stay ahead of critical events. An interactive accident map and live alert list surface incidents by urgency — letting you assess driver status, view locations, and initiate contact the moment something happens.",
  },
  {
    img: dashboardScreen4,
    alt: "SI Fleet driver management",
    h: "Driver Management",
    p: "Centralize control of your fleet assets. Monitor theft and accident events, assign hardware to owners, and manage user permissions — all from a single panel built for fast, reliable fleet administration.",
  },
  {
    img: dashboardScreen5,
    alt: "SI Fleet geo-fencing",
    h: "Geo-Fencing Module",
    p: "Define boundaries, get instant alerts. Track zone entry and exit events in real time, manage perimeters on an interactive map, and review incident history — keeping your fleet secure and always within bounds.",
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

function PhotoFigure({ src, alt, caption, tag, style }) {
  return (
    <div className="photo reveal" style={style}>
      <img src={src} alt={alt} />
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
      className="flow"
      strokeWidth={2}
      strokeDasharray="6 4"
      initial={{ strokeDashoffset: 1000 }}
      whileInView={{ strokeDashoffset: 0 }}
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
                "▪ i-oxis IMU (crash/motion)",
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
          points="720,120 707.2,128.3 705.2,116.4"
          delay={0.9}
          labelX={470}
          labelY={143}
          labelText="BLE 5 · DIRECT"
        />

        {/* Arrow: OBU → Cloud (LTE) — delay 1.0 */}
        <Arrow
          d="M310 270 L430 273"
          points="430,273 415.9,278.6 416.2,266.7"
          delay={1.0}
          labelX={330}
          labelY={262}
          labelText="LTE"
        />

        {/* Arrow: Cloud → SI Connect (OTA) — delay 1.2 */}
        <Arrow
          d="M610 250 L720 150"
          points="720,150 713.7,163.9 705.6,155"
          delay={1.2}
          labelX={616}
          labelY={196}
          labelText="OTA + SYNC"
        />

        {/* Arrow: Cloud → SI Operator (Fleet Data) — delay 1.3 */}
        <Arrow
          d="M610 300 L720 340"
          points="720,340 704.8,340.9 708.9,329.6"
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

const SiConnectDetails = () => {
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
                <AnimatedText as="span" text="SI " />
                <AnimatedText as="span" text="Connect" />
              </h1>
              <p className="tag reveal d3">
                The rider’s interface to the vehicle —{" "}
                <span className="soft">
                  real-time control, tracking, alerts, and insights delivered
                  through a seamless mobile experience.
                </span>
              </p>
              <div className="meta reveal d3">
                SHIPPING SINCE <b>2022</b> · DEPLOYED ON THE{" "}
                <b>CALYPSO MOTORCYCLES</b>
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
              <b>SI Connect</b> is the rider’s direct connection to their
              vehicle — a mobile application designed to provide real-time
              visibility, control, and awareness. From tracking location to
              monitoring system status, everything is accessible in a single,
              intuitive interface.
            </p>

            <p className="reveal d2">
              Built to simplify everyday riding, the app delivers instant
              alerts, trip insights, and remote commands while keeping riders
              informed and in control at all times. It transforms complex
              vehicle data into a clear, actionable experience.
            </p>
          </div>
          <PhotoFigure
            src={siFig1}
            alt="SI Connect mobile app interface showing vehicle control and live location"
            caption="FIG. A — SI CONNECT · MOBILE APP INTERFACE"
            tag="Mobile App"
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
            src={siFig2}
            alt="SI Connect mobile app alert and notification interface"
            caption="FIG. B — SI CONNECT · ALERT & NOTIFICATION INTERFACE"
            tag="HARDWARE"
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
          <SectionHead no="§04" label="Interface — Rider Experience" />
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
              <b>A.</b> Startec · Intelligent
            </div>
            <a className="" href="/startec-intelligent">
              <div className="act">
                OPEN FILE <span className="a">↗</span>
              </div>
            </a>
          </div>
          <Carousel
            interval={4500}
            tag="Startec · Intelligent"
            slides={SI_CONNECT_SLIDES}
          />
          <div
            className=""
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div className="grouplbl reveal">
              <b>B.</b> SI FLEET MANAGEMENT · OPERATOR CONSOLE
            </div>
            <a className="" href="/fleet-management">
              <div className="act">
                OPEN FILE <span className="a">↗</span>
              </div>
            </a>
          </div>
          <Carousel
            interval={5000}
            tag="SI FLEET · OPERATOR"
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

export default SiConnectDetails;
