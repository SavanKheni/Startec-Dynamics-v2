import { useLocation } from "react-router-dom";
import "./SheetFrame.css";

export default function SheetFrame() {
  const { pathname } = useLocation();
  const SHEET_CONFIG = {
    "/": { number: "01", name: "HOME" },
    "/startec-intelligent": { number: "02", name: "STARTEC INTELLIGENT" },
    "/fleet-management": { number: "02", name: "FLEET MANAGEMENT" },
    "/si-connect": { number: "02", name: "SI CONNECT" },
    "/about-us": { number: "03", name: "ABOUT" },
    "/press": { number: "04", name: "PRESS" },
    "/contact-us": { number: "05", name: "CONTACT" },
  };
  const sheet = SHEET_CONFIG[pathname]?.number ?? "01";
  const sheetName = SHEET_CONFIG[pathname]?.name ?? "HOME";
  return (
    <>
      <div className="frame">
        <i className="tl" />
        <i className="tr" />
        <i className="bl" />
        <i className="br" />
      </div>
      <div className="corner t-l">STARTEC DYNAMICS</div>
      <div className="corner t-r">
        SHEET {sheet} — INDEX
        <br />
        REV 2026.06
      </div>
      <div className="corner b-l">
        DWG. NO. SD-{sheetName}-{sheet}
      </div>
      <div id="chx" />
      <div id="chy" />
      <div id="coord">X:0000 Y:0000</div>
    </>
  );
}
