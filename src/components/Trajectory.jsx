import AnimatedText from "./AnimatedText";
import "./Trajectory.css";

const phases = [
  {
    st: "01 · AWARE",
    title: "Make it intelligent",
    desc: "Add sensing, connectivity, and software to machines that already exist. ",
    em: "Live today.",
    dot: "● Shipping",
    delay: "d1",
  },
  {
    st: "02 · SELF-POWERED",
    title: "Rethink how it moves",
    desc: "Re-engineer energy and drivetrain so a machine goes further on its own terms.",
    dot: "○ In R&D",
    delay: "d2",
  },
  {
    st: "03 · SELF-OPERATING",
    title: "Take us out of the loop",
    desc: "Build toward machines that sense, decide, and act with less human input.",
    dot: "◌ On the horizon",
    delay: "d3",
  },
];

export default function Trajectory() {
  return (
    <section className="sec arc" id="arc">
      <div className="wrap">
        <div className="sechead reveal">
          <span className="no">§04</span>
          <span className="nm">Trajectory</span>
        </div>
        <p className="big reveal d1">
          <AnimatedText
            as="span"
            text="Every project moves a machine one step closer to standing on its own — first we make it "
          />
          <AnimatedText as="em" text="aware, " />
          <AnimatedText as="span" text="then " />
          <AnimatedText as="em" text="self-powered," />
          <AnimatedText as="span" text="then " />
          <AnimatedText as="em" text="self-operating." />
        </p>

        <div className="plot reveal d2">
          <svg
            viewBox="0 0 1000 340"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Capability trajectory plot"
          >
            <line
              x1="70"
              y1="40"
              x2="70"
              y2="280"
              stroke="#1B1A16"
              strokeWidth="1"
            />
            <line
              x1="70"
              y1="280"
              x2="945"
              y2="280"
              stroke="#1B1A16"
              strokeWidth="1"
            />
            <polygon points="70,33 65,46 75,46" fill="#1B1A16" />
            <polygon points="952,280 939,275 939,285" fill="#1B1A16" />
            <text
              x="56"
              y="160"
              fill="#908D82"
              fontFamily="'Space Mono',monospace"
              fontSize="11"
              letterSpacing="2"
              transform="rotate(-90 56 160)"
              textAnchor="middle"
            >
              CAPABILITY
            </text>
            <text
              x="872"
              y="272"
              fill="#908D82"
              fontFamily="'Space Mono',monospace"
              fontSize="11"
              letterSpacing="2"
            >
              TIME →
            </text>

            <line
              x1="210"
              y1="235"
              x2="210"
              y2="280"
              stroke="#908D82"
              strokeWidth="1"
              strokeDasharray="2 5"
            />
            <line
              x1="520"
              y1="150"
              x2="520"
              y2="280"
              stroke="#908D82"
              strokeWidth="1"
              strokeDasharray="2 5"
            />
            <line
              x1="790"
              y1="80"
              x2="790"
              y2="280"
              stroke="#908D82"
              strokeWidth="1"
              strokeDasharray="2 5"
            />
            <text
              x="210"
              y="300"
              fill="#908D82"
              fontFamily="'Space Mono',monospace"
              fontSize="10"
              letterSpacing="1.5"
              textAnchor="middle"
            >
              NOW
            </text>
            <text
              x="520"
              y="300"
              fill="#908D82"
              fontFamily="'Space Mono',monospace"
              fontSize="10"
              letterSpacing="1.5"
              textAnchor="middle"
            >
              NEXT
            </text>
            <text
              x="790"
              y="300"
              fill="#908D82"
              fontFamily="'Space Mono',monospace"
              fontSize="10"
              letterSpacing="1.5"
              textAnchor="middle"
            >
              HORIZON
            </text>

            <path
              className="arc-solid"
              d="M90 272 L210 235 L520 150"
              fill="none"
              stroke="#D6341C"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M520 150 L790 80 L940 36"
              fill="none"
              stroke="#D6341C"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="2 8"
            />
            <polygon points="942,33 929,31 935,45" fill="#D6341C" />

            <circle cx="210" cy="235" r="7" fill="#D6341C" />
            <circle
              cx="520"
              cy="150"
              r="7"
              fill="#EDEAE1"
              stroke="#D6341C"
              strokeWidth="2.5"
            />
            <circle
              cx="790"
              cy="80"
              r="7"
              fill="none"
              stroke="#1B1A16"
              strokeWidth="1.5"
              strokeDasharray="2 3"
            />

            <text
              x="224"
              y="227"
              fill="#1B1A16"
              fontFamily="'Space Mono',monospace"
              fontSize="12"
              fontWeight="700"
            >
              01 · AWARE
            </text>
            <text
              x="534"
              y="142"
              fill="#1B1A16"
              fontFamily="'Space Mono',monospace"
              fontSize="12"
              fontWeight="700"
            >
              02 · SELF-POWERED
            </text>
            <text
              x="688"
              y="64"
              fill="#1B1A16"
              fontFamily="'Space Mono',monospace"
              fontSize="12"
              fontWeight="700"
            >
              03 · SELF-OPERATING
            </text>
            <text
              x="958"
              y="42"
              fill="#908D82"
              fontFamily="'Fraunces',serif"
              fontSize="24"
              fontStyle="italic"
            >
              ?
            </text>
          </svg>
        </div>

        <div className="arc-cap">
          {phases.map((p) => (
            <div className={`ac reveal ${p.delay}`} key={p.st}>
              <div className="st">{p.st}</div>
              <h4>
                <AnimatedText as="span" text={p.title} />
              </h4>
              <p>
                {p.desc}
                {p.em && <span style={{ color: "var(--ink)" }}>{p.em}</span>}
              </p>
              <div className="dot">{p.dot}</div>
            </div>
          ))}
        </div>

        <p className="arc-note reveal">
          // The horizon stays open on purpose — the method is fixed, the
          destination is not.
        </p>
      </div>
    </section>
  );
}
