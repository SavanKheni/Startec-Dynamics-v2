import './SheetFrame.css';

export default function SheetFrame() {
  return (
    <>
      <div className="frame">
        <i className="tl" /><i className="tr" /><i className="bl" /><i className="br" />
      </div>
      <div className="corner t-l">STARTEC DYNAMICS / INDEPENDENT R&amp;D</div>
      <div className="corner t-r">SHEET 01 — INDEX<br />REV 2026.06</div>
      <div className="corner b-l">DWG. NO. SD-HOME-01</div>
      <div id="chx" />
      <div id="chy" />
      <div id="coord">X:0000 Y:0000</div>
    </>
  );
}
