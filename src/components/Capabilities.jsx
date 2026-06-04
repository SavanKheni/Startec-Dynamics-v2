import './Capabilities.css';

const capabilities = [
  { id: 'C-01', title: 'Embedded Hardware & Firmware', desc: 'Custom electronics and the low-level code that drives them, designed and validated in-house to survive the field.', delay: 'd1' },
  { id: 'C-02', title: 'Mechatronics & Systems', desc: 'Mechanical, electrical, and control engineering integrated into one coherent, working system.', delay: 'd1' },
  { id: 'C-03', title: 'AI, Connectivity & Cloud', desc: 'Machine learning, real-time telemetry, and over-the-air infrastructure that keeps devices improving long after they ship.', delay: 'd2' },
  { id: 'C-04', title: 'Field Validation', desc: 'Lab research tested against punishing, real-world conditions until it holds — before anything reaches a customer.', delay: 'd2' },
  { id: 'C-05', title: 'Electrification & Powertrain', desc: 'Battery systems, range extension, and efficient drivetrains that rethink how a machine is powered — and how far it can go.', delay: 'd3' },
  { id: 'C-06', title: 'Autonomy & Controls', desc: 'Sensing, perception, and control systems for machines that operate with less and less human input.', delay: 'd3' },
];

export default function Capabilities() {
  return (
    <section className="sec" id="cap">
      <div className="wrap">
        <div className="sechead reveal">
          <span className="no">§02</span><span className="nm">Capabilities</span>
        </div>
        <div className="cap">
          {capabilities.map((c) => (
            <div className={`cap-row reveal ${c.delay}`} key={c.id}>
              <div className="cap-no">{c.id}</div>
              <div className="cap-cell cap-body">
                <h3>{c.title} <span className="arrow">→</span></h3>
                <p>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
