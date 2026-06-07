import React, { useEffect, useRef, useCallback } from "react";
import "./StartecIntelligent.css";
import siFig1 from "../../assets/siFig1.jpg";
import siFig2 from "../../assets/siFig2.jpg";
import siApp1 from "../../assets/siApp1.jpg";
import siApp2 from "../../assets/siApp2.jpg";
import siApp3 from "../../assets/siApp3.jpg";
import siApp4 from "../../assets/siApp4.jpg";
import fm1 from "../../assets/fm1.jpg";
import fm2 from "../../assets/fm2.jpg";
import fm3 from "../../assets/fm3.jpg";
import fm4 from "../../assets/fm4.jpg";
/* ─── Carousel ─────────────────────────────────────────────────────────── */
function Carousel({ interval = 4500, tag, children }) {
  const rootRef = useRef(null);
  const timerRef = useRef(null);
  const idxRef = useRef(0);
  const pausedRef = useRef(false);

  const go = useCallback(
    (k) => {
      const root = rootRef.current;
      if (!root) return;

      const slides = root.querySelectorAll(".car-slide");
      const descs = root.querySelectorAll(".desc-slide");
      const dots = root.querySelectorAll(".dot");
      const step = root.querySelector(".car-step");
      const bar = root.querySelector(".car-bar i");
      const n = slides.length;

      idxRef.current = ((k % n) + n) % n;
      const i = idxRef.current;

      slides.forEach((s, x) => s.classList.toggle("is-active", x === i));
      descs.forEach((s, x) => s.classList.toggle("is-active", x === i));
      dots.forEach((d, x) => d.classList.toggle("is-active", x === i));
      if (step)
        step.textContent = `${String(i + 1).padStart(2, "0")} / ${String(n).padStart(2, "0")}`;

      if (bar) {
        bar.style.animation = "none";
        void bar.offsetWidth; // reflow to restart
        bar.style.animation = `carbar ${interval}ms linear`;
        if (pausedRef.current) bar.style.animationPlayState = "paused";
      }
    },
    [interval],
  );

  const play = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      go(idxRef.current + 1);
    }, interval);
  }, [go, interval]);

  const stop = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    go(0);
    play();

    const dots = root.querySelectorAll(".dot");
    dots.forEach((d, x) => {
      d.addEventListener("click", () => {
        go(x);
        play();
      });
    });

    const prev = root.querySelector(".nav-prev");
    const next = root.querySelector(".nav-next");
    if (prev)
      prev.addEventListener("click", () => {
        go(idxRef.current - 1);
        play();
      });
    if (next)
      next.addEventListener("click", () => {
        go(idxRef.current + 1);
        play();
      });

    const onEnter = () => {
      pausedRef.current = true;
      stop();
      const bar = root.querySelector(".car-bar i");
      if (bar) bar.style.animationPlayState = "paused";
    };
    const onLeave = () => {
      pausedRef.current = false;
      play();
    };
    root.addEventListener("mouseenter", onEnter);
    root.addEventListener("mouseleave", onLeave);

    return () => {
      stop();
      root.removeEventListener("mouseenter", onEnter);
      root.removeEventListener("mouseleave", onLeave);
    };
  }, [go, play, stop]);

  return (
    <div className="carousel reveal" ref={rootRef} data-interval={interval}>
      {children}
    </div>
  );
}

/* ─── Reveal observer ───────────────────────────────────────────────────── */
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

/* ─── Component ─────────────────────────────────────────────────────────── */
const StartecIntelligentDetails = () => {
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
                Startec
                <br />
                Intelligent
              </h1>
              <p className="tag reveal d3">
                The intelligence layer for light vehicles —{" "}
                <span className="soft">
                  security, safety, and over-the-air smarts, added to the
                  machines people ride every day.
                </span>
              </p>
              <div className="meta reveal d3">
                SHIPPING SINCE <b>2022</b> · DEPLOYED ON THE <b>CALYPSO ORI</b>
              </div>
              <div className="h-actions reveal d4">
                <a href="#contact" className="btn btn-fill">
                  TALK TO US <span className="a">↗</span>
                </a>
                <a href="#system" className="btn btn-line">
                  HOW IT WORKS <span className="a">↓</span>
                </a>
              </div>
            </div>

            <div className="panel reveal d4">
              <div className="ptop">
                <span>STARTEC INTELLIGENT · TELEMETRY</span>
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
                <div className="tc">
                  <div className="l">Ignition</div>
                  <div className="v">Keyless · On</div>
                </div>
                <div className="tc">
                  <div className="l">Battery</div>
                  <div className="v">96%</div>
                </div>
                <div className="tc">
                  <div className="l">Anti-theft</div>
                  <div className="v">
                    <span className="g" />
                    Armed
                  </div>
                </div>
                <div className="tc">
                  <div className="l">SOS</div>
                  <div className="v">Standby</div>
                </div>
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
          </div>
        </div>
      </header>

      {/* ── OVERVIEW §01 ── */}
      <section className="sec ov" id="overview">
        <div className="wrap">
          <div className="sechead reveal">
            <span className="no">§01</span>
            <span className="nm">Overview</span>
          </div>
          <p className="big reveal d1">
            A motorcycle doesn't have to be electric or expensive{" "}
            <em>to be smart.</em>
          </p>
          <div className="cols">
            <p className="reveal d1">
              <b>
                Officially the Startec Intelligent Smart Safety &amp; Security
                System
              </b>
              , it bolts the brains of a modern vehicle onto the bikes people
              already buy. It tracks speed, impact, location, and riding
              behaviour — and the moment it detects a crash, it can alert family
              and emergency contacts in the minutes that matter most.
            </p>
            <p className="reveal d2">
              It's built to be{" "}
              <b>fitted at the factory or retrofitted in the field</b>, on
              petrol or electric machines alike. That makes advanced safety and
              security reachable for the riders and operators who've never had
              access to it — the whole point of Project 01.
            </p>
          </div>
          <div className="photo reveal" style={{ marginTop: "36px" }}>
            <img
              src={siFig1}
              alt="Startec Intelligent on-board unit installed on a motorcycle"
            />
            <div className="cap">
              <span>
                FIG. A — STARTEC INTELLIGENT · ON-BOARD UNIT, INSTALLED
              </span>
              <b>HARDWARE</b>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES §02 ── */}
      <section className="sec" id="cap">
        <div className="wrap">
          <div className="sechead reveal">
            <span className="no">§02</span>
            <span className="nm">Capabilities</span>
          </div>
          <div className="cap-grid">
            {[
              {
                id: "F-01",
                title: "Keyless Ignition",
                d: "d1",
                body: "A secure, ultra-wideband keyless system — start, lock, and remotely control the bike from the app. The key lives in the rider's pocket, never copied, never lost.",
              },
              {
                id: "F-02",
                title: "Geo-Tracking & Anti-Theft",
                d: "d1",
                body: "Live location, geofencing, and remote immobilisation. If the bike moves without authorisation, the rider knows in seconds.",
              },
              {
                id: "F-03",
                title: "SOS & Crash Response",
                d: "d2",
                body: "A high-precision IMU detects a crash and automatically shares the rider's exact location with family and emergency contacts when they can't.",
              },
              {
                id: "F-04",
                title: "Ride Dashboard",
                d: "d2",
                body: "Trips, battery and component health, and diagnostics — the whole vehicle, legible at a glance.",
              },
              {
                id: "F-05",
                title: "Over-the-Air Updates",
                d: "d3",
                body: "New features and security patches arrive remotely. No service centre, no downtime, always current.",
              },
              {
                id: "F-06",
                title: "Proactive Maintenance",
                d: "d3",
                body: "An on-board fault database flags problems before they strand a rider — small issues stay small.",
              },
            ].map(({ id, title, d, body }) => (
              <div className={`cap-row reveal ${d}`} key={id}>
                <div className="cap-no">{id}</div>
                <div className="cap-cell">
                  <h3>
                    {title} <span className="ar">→</span>
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
          <div className="sechead reveal">
            <span className="no">§03</span>
            <span className="nm">System</span>
          </div>
          <h2 className="sys-h reveal d1">How the system fits together.</h2>
          <div className="photo reveal d1" style={{ marginBottom: "28px" }}>
            <img
              src={siFig2}
              alt="Startec Intelligent hardware fitted to the vehicle"
            />
            <div className="cap">
              <span>FIG. B — THE HARDWARE, FITTED TO THE VEHICLE</span>
              <b>HARDWARE</b>
            </div>
          </div>
          <div className="schem reveal d2">
            <svg
              viewBox="0 0 1000 420"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Startec Intelligent system architecture"
            >
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
              <text
                x={58}
                y={224}
                fill="#1B1A16"
                fontFamily="'Space Mono',monospace"
                fontSize={11}
              >
                ▪ Secure 32-bit MCU
              </text>
              <text
                x={58}
                y={244}
                fill="#1B1A16"
                fontFamily="'Space Mono',monospace"
                fontSize={11}
              >
                ▪ Multi-GNSS positioning
              </text>
              <text
                x={58}
                y={264}
                fill="#1B1A16"
                fontFamily="'Space Mono',monospace"
                fontSize={11}
              >
                ▪ LTE modem + SMS fallback
              </text>
              <text
                x={58}
                y={284}
                fill="#1B1A16"
                fontFamily="'Space Mono',monospace"
                fontSize={11}
              >
                ▪ Bluetooth LE 5
              </text>
              <text
                x={58}
                y={304}
                fill="#1B1A16"
                fontFamily="'Space Mono',monospace"
                fontSize={11}
              >
                ▪ 6-axis IMU (crash/motion)
              </text>

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

              <path
                className="flow"
                d="M310 190 L720 120"
                fill="none"
                stroke="#D6341C"
                strokeWidth={2}
              />
              <polygon points="720,120 706,114 710,127" fill="#D6341C" />
              <text
                x={470}
                y={143}
                fill="#1B1A16"
                fontFamily="'Space Mono',monospace"
                fontSize={10}
                fontWeight={700}
              >
                BLE 5 · DIRECT
              </text>

              <path
                className="flow"
                d="M310 270 L430 273"
                fill="none"
                stroke="#D6341C"
                strokeWidth={2}
              />
              <polygon points="430,273 416,267 416,279" fill="#D6341C" />
              <text
                x={330}
                y={262}
                fill="#1B1A16"
                fontFamily="'Space Mono',monospace"
                fontSize={10}
                fontWeight={700}
              >
                LTE
              </text>

              <path
                className="flow"
                d="M610 250 L720 150"
                fill="none"
                stroke="#D6341C"
                strokeWidth={2}
              />
              <polygon points="720,150 706,150 713,162" fill="#D6341C" />
              <text
                x={616}
                y={196}
                fill="#1B1A16"
                fontFamily="'Space Mono',monospace"
                fontSize={10}
                fontWeight={700}
              >
                OTA + SYNC
              </text>

              <path
                className="flow"
                d="M610 300 L720 340"
                fill="none"
                stroke="#D6341C"
                strokeWidth={2}
              />
              <polygon points="720,340 706,332 705,345" fill="#D6341C" />
              <text
                x={616}
                y={328}
                fill="#1B1A16"
                fontFamily="'Space Mono',monospace"
                fontSize={10}
                fontWeight={700}
              >
                FLEET DATA
              </text>
            </svg>
          </div>
          <div className="sys-grid">
            <div className="unitspec reveal d1">
              <div className="h">
                <span>ON-BOARD UNIT</span>
                <span>SD-SI-01</span>
              </div>
              {[
                ["Compute", "Secure 32-bit MCU"],
                ["Location", "Multi-GNSS"],
                ["Connectivity", "LTE + SMS fallback"],
                ["Short range", "BLE 5 + UWB keyless"],
                ["Sensing", "6-axis IMU"],
                ["Power", "Vehicle + deep-sleep modes"],
              ].map(([k, v]) => (
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
                    <img
                      src="https://play-lh.googleusercontent.com/6ilzyOqHbzrtPx-iCuOJ-bunEU5ilGvarGnefnI4qvydMaAndpdOGT7Vacxxjf_Cejo=w48-h48"
                      alt=""
                      className="app-icon"
                    />
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
          <div className="sechead reveal">
            <span className="no">§04</span>
            <span className="nm">Interface — As It Ships</span>
          </div>
          <h2 className="sys-h reveal d1">The product, as it looks today.</h2>
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

          <div className="grouplbl reveal">
            <b>A.</b> SI CONNECT · RIDER APP
          </div>
          <Carousel interval={4500}>
            <div className="car-stage">
              <figure className="car-slide is-active">
                <img
                  loading="lazy"
                  src={siApp1}
                  alt="SI Connect locate and status"
                />
              </figure>
              <figure className="car-slide">
                <img
                  loading="lazy"
                  src={siApp2}
                  alt="SI Connect theft detection"
                />
              </figure>
              <figure className="car-slide">
                <img
                  loading="lazy"
                  src={siApp3}
                  alt="SI Connect alerts and commands"
                />
              </figure>
              <figure className="car-slide">
                <img loading="lazy" src={siApp4} alt="SI Connect nearby help" />
              </figure>
            </div>
            <div className="car-desc">
              <div className="car-top">
                <span className="car-tag">SI CONNECT · RIDER</span>
                <span className="car-step">01 / 04</span>
              </div>
              <div className="desc-wrap">
                <div className="desc-slide is-active">
                  <h4>Locate &amp; status</h4>
                  <p>
                    See exactly where the bike is, its live status, and recent
                    routes — on a map, in real time.
                  </p>
                </div>
                <div className="desc-slide">
                  <h4>Theft detection</h4>
                  <p>
                    The instant the bike moves without authorisation, the rider
                    is alerted and can disable it.
                  </p>
                </div>
                <div className="desc-slide">
                  <h4>Alerts &amp; commands</h4>
                  <p>
                    Crash and collision alerts, plus remote commands: lock,
                    unlock, flash the lights, cut the engine.
                  </p>
                </div>
                <div className="desc-slide">
                  <h4>Nearby help</h4>
                  <p>
                    In an emergency, surface the nearest clinics, hospitals, and
                    fuel — routed from the rider's location.
                  </p>
                </div>
              </div>
              <div className="car-bar">
                <i />
              </div>
              <div className="car-foot">
                <div className="car-dots">
                  <button className="dot is-active" aria-label="slide 1" />
                  <button className="dot" aria-label="slide 2" />
                  <button className="dot" aria-label="slide 3" />
                  <button className="dot" aria-label="slide 4" />
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
          </Carousel>

          <div className="grouplbl reveal">
            <b>B.</b> SI FLEET MANAGEMENT · OPERATOR CONSOLE
          </div>
          <Carousel interval={5000}>
            <div className="car-stage">
              <figure className="car-slide is-active">
                <img loading="lazy" src={fm1} alt="SI Fleet overview" />
              </figure>
              <figure className="car-slide">
                <img loading="lazy" src={fm2} alt="SI Fleet live tracking" />
              </figure>
              <figure className="car-slide">
                <img
                  loading="lazy"
                  src={fm3}
                  alt="SI Fleet driver management"
                />
              </figure>
              <figure className="car-slide">
                <img loading="lazy" src={fm4} alt="SI Fleet geo-fencing" />
              </figure>
            </div>
            <div className="car-desc">
              <div className="car-top">
                <span className="car-tag">SI FLEET · OPERATOR</span>
                <span className="car-step">01 / 04</span>
              </div>
              <div className="desc-wrap">
                <div className="desc-slide is-active">
                  <h4>Fleet overview</h4>
                  <p>
                    Every vehicle, rider, and alert in one console —
                    utilisation, health, and incidents at a glance.
                  </p>
                </div>
                <div className="desc-slide">
                  <h4>Live tracking</h4>
                  <p>
                    Watch the entire fleet move on the map, with per-vehicle
                    status and trip analytics.
                  </p>
                </div>
                <div className="desc-slide">
                  <h4>Driver management</h4>
                  <p>
                    Manage riders and access, track theft events, and control
                    who holds which bike.
                  </p>
                </div>
                <div className="desc-slide">
                  <h4>Geo-fencing</h4>
                  <p>
                    Draw zones, set the rules, and get instant alerts when a
                    vehicle crosses a boundary.
                  </p>
                </div>
              </div>
              <div className="car-bar">
                <i />
              </div>
              <div className="car-foot">
                <div className="car-dots">
                  <button className="dot is-active" aria-label="slide 1" />
                  <button className="dot" aria-label="slide 2" />
                  <button className="dot" aria-label="slide 3" />
                  <button className="dot" aria-label="slide 4" />
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
          </Carousel>
        </div>
      </section>

      {/* ── STATUS §05 ── */}
      <section className="sec status" id="status">
        <div className="wrap">
          <div className="sechead reveal">
            <span className="no">§05</span>
            <span className="nm">Status &amp; Deployment</span>
          </div>
          {[
            {
              k: "● Live",
              d: "d1",
              h: "Shipping since 2022",
              p: "Startec Intelligent is in market, not in concept — installed, supported, and improving over the air.",
            },
            {
              k: "Partner",
              d: "d1",
              h: "Calypso Motors · ORI",
              p: "Deployed as the connected layer on the Calypso ORI, priced to stay accessible for everyday riders.",
            },
            {
              k: "Market",
              d: "d2",
              h: "~60 million bikes a year",
              p: "Roughly 60 million motorcycles are sold worldwide every year — the overwhelming majority with no connected safety or security at all.",
            },
            {
              k: "Roadmap",
              d: "d2",
              h: "The first stage of the trajectory",
              p: "Project 01 is the aware stage of Startec Dynamics' wider arc. The platform, the team, and the tooling are built to carry forward into what's next.",
            },
            {
              k: "On the bench",
              d: "d3",
              h: "Blind-spot & traffic detection",
              p: "Next in R&D: side and traffic-detection sensors that warn riders of approaching vehicles — most accidents happen when a rider never sees what's coming.",
            },
          ].map(({ k, d, h, p }) => (
            <div className={`row reveal ${d}`} key={k}>
              <div className="k">{k}</div>
              <div className="v">
                <h4>{h}</h4>
                <p>{p}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="cta reveal in">
            <h2>
              Bringing Startec Intelligent to your vehicles, your fleet, or your
              factory? <em>Let's open a conversation.</em>
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

export default StartecIntelligentDetails;
