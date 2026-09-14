"use client";

import { useState, useEffect } from "react";

// ==================== 1. NOVA CALC MOCKUP (FLUTTER APP) ====================
export function NovaCalcMockup() {
  const [display, setDisplay] = useState("42.85");
  const [equation, setEquation] = useState("240.5 × 0.178");
  const [activeTab, setActiveTab] = useState<"std" | "sci">("sci");
  const [firstOperand, setFirstOperand] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForSecond, setWaitingForSecond] = useState(false);

  const inputDigit = (digit: string) => {
    if (waitingForSecond) {
      setDisplay(digit);
      setWaitingForSecond(false);
      setEquation((prev) => `${prev} ${digit}`);
    } else {
      const next = display === "0" || display === "42.85" ? digit : display + digit;
      setDisplay(next);
      setEquation((prev) => (display === "42.85" ? digit : `${prev}${digit}`));
    }
  };

  const performOperation = (op: string) => {
    const inputVal = parseFloat(display);

    if (op === "C") {
      setDisplay("0");
      setEquation("");
      setFirstOperand(null);
      setOperator(null);
      setWaitingForSecond(false);
      return;
    }

    if (op === "±") {
      const toggled = String(inputVal * -1);
      setDisplay(toggled);
      return;
    }

    if (op === "%") {
      const pct = String(inputVal / 100);
      setDisplay(pct);
      return;
    }

    if (op === "√") {
      const sqrt = String(Math.round(Math.sqrt(inputVal) * 1000) / 1000);
      setDisplay(sqrt);
      setEquation(`√(${inputVal})`);
      return;
    }

    if (firstOperand === null) {
      setFirstOperand(inputVal);
      setOperator(op);
      setWaitingForSecond(true);
      setEquation(`${inputVal} ${op}`);
    } else if (operator) {
      let result = 0;
      if (operator === "+") result = firstOperand + inputVal;
      else if (operator === "-") result = firstOperand - inputVal;
      else if (operator === "×") result = firstOperand * inputVal;
      else if (operator === "÷") result = inputVal !== 0 ? firstOperand / inputVal : 0;

      const rounded = Math.round(result * 1000) / 1000;
      setDisplay(String(rounded));
      setFirstOperand(rounded);

      if (op === "=") {
        setEquation(`${equation} = ${rounded}`);
        setOperator(null);
        setWaitingForSecond(true);
      } else {
        setOperator(op);
        setWaitingForSecond(true);
        setEquation(`${rounded} ${op}`);
      }
    }
  };

  return (
    <div className="w-full max-w-xs mx-auto border border-[var(--hv-hairline)] p-4 rounded-3xl bg-[var(--hv-paper)] text-[var(--hv-ink)] shadow-2xl font-mono text-xs select-none">
      {/* Dynamic island / top pill */}
      <div className="flex justify-center mb-3">
        <div className="w-20 h-3.5 bg-[var(--hv-ink)] rounded-full flex items-center justify-between px-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--hv-paper)] opacity-75 animate-pulse"></div>
          <div className="w-1 h-1 rounded-full bg-[var(--hv-paper)] opacity-50"></div>
        </div>
      </div>

      {/* Screen Header */}
      <div className="flex items-center justify-between px-1 mb-2">
        <span className="font-sans font-bold text-[11px] flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          Nova Calc 60fps
        </span>
        <div className="flex gap-1">
          <button
            onClick={() => setActiveTab("std")}
            data-cursor="link"
            className={`px-2 py-0.5 rounded text-[10px] transition-colors cursor-pointer ${
              activeTab === "std"
                ? "bg-[var(--hv-ink)] text-[var(--hv-on-ink)] font-bold"
                : "text-[var(--hv-muted)] hover:text-[var(--hv-ink)]"
            }`}
          >
            Basic
          </button>
          <button
            onClick={() => setActiveTab("sci")}
            data-cursor="link"
            className={`px-2 py-0.5 rounded text-[10px] transition-colors cursor-pointer ${
              activeTab === "sci"
                ? "bg-[var(--hv-ink)] text-[var(--hv-on-ink)] font-bold"
                : "text-[var(--hv-muted)] hover:text-[var(--hv-ink)]"
            }`}
          >
            Sci
          </button>
        </div>
      </div>

      {/* Display */}
      <div className="p-3 mb-3 border border-[var(--hv-hairline)] rounded-xl flex flex-col items-end justify-end h-20 bg-[var(--hv-ink-12)] transition-colors">
        <span className="text-[10px] text-[var(--hv-muted)] h-4 overflow-hidden truncate max-w-full">
          {equation}
        </span>
        <span className="text-2xl font-bold font-mono tracking-tight">{display}</span>
      </div>

      {/* Scientific Keys */}
      {activeTab === "sci" && (
        <div className="grid grid-cols-4 gap-1 mb-2">
          {["sin", "cos", "tan", "√"].map((fn) => (
            <button
              key={fn}
              onClick={() => {
                if (fn === "√") performOperation("√");
                else {
                  const val = parseFloat(display);
                  const res =
                    fn === "sin"
                      ? Math.sin(val)
                      : fn === "cos"
                      ? Math.cos(val)
                      : Math.tan(val);
                  const rounded = Math.round(res * 1000) / 1000;
                  setDisplay(String(rounded));
                  setEquation(`${fn}(${val}) = ${rounded}`);
                }
              }}
              data-cursor="link"
              className="h-7 rounded bg-[var(--hv-ink-12)] hover:bg-[var(--hv-ink)] hover:text-[var(--hv-on-ink)] transition-colors text-[10px] cursor-pointer"
            >
              {fn}
            </button>
          ))}
        </div>
      )}

      {/* Main Keypad */}
      <div className="grid grid-cols-4 gap-1.5">
        {["C", "±", "%", "÷"].map((btn) => (
          <button
            key={btn}
            onClick={() => performOperation(btn)}
            data-cursor="link"
            className="h-10 rounded-lg border border-[var(--hv-hairline)] hover:bg-[var(--hv-ink-12)] font-semibold text-xs active:scale-95 transition-transform cursor-pointer"
          >
            {btn}
          </button>
        ))}

        {["7", "8", "9"].map((btn) => (
          <button
            key={btn}
            onClick={() => inputDigit(btn)}
            data-cursor="link"
            className="h-10 rounded-lg border border-[var(--hv-hairline)] hover:bg-[var(--hv-ink-12)] text-xs font-semibold active:scale-95 transition-transform cursor-pointer"
          >
            {btn}
          </button>
        ))}
        <button
          onClick={() => performOperation("×")}
          data-cursor="link"
          className="h-10 rounded-lg bg-[var(--hv-ink)] text-[var(--hv-on-ink)] text-xs font-semibold active:scale-95 transition-transform cursor-pointer"
        >
          ×
        </button>

        {["4", "5", "6"].map((btn) => (
          <button
            key={btn}
            onClick={() => inputDigit(btn)}
            data-cursor="link"
            className="h-10 rounded-lg border border-[var(--hv-hairline)] hover:bg-[var(--hv-ink-12)] text-xs font-semibold active:scale-95 transition-transform cursor-pointer"
          >
            {btn}
          </button>
        ))}
        <button
          onClick={() => performOperation("-")}
          data-cursor="link"
          className="h-10 rounded-lg bg-[var(--hv-ink)] text-[var(--hv-on-ink)] text-xs font-semibold active:scale-95 transition-transform cursor-pointer"
        >
          -
        </button>

        {["1", "2", "3"].map((btn) => (
          <button
            key={btn}
            onClick={() => inputDigit(btn)}
            data-cursor="link"
            className="h-10 rounded-lg border border-[var(--hv-hairline)] hover:bg-[var(--hv-ink-12)] text-xs font-semibold active:scale-95 transition-transform cursor-pointer"
          >
            {btn}
          </button>
        ))}
        <button
          onClick={() => performOperation("+")}
          data-cursor="link"
          className="h-10 rounded-lg bg-[var(--hv-ink)] text-[var(--hv-on-ink)] text-xs font-semibold active:scale-95 transition-transform cursor-pointer"
        >
          +
        </button>

        <button
          onClick={() => inputDigit("0")}
          data-cursor="link"
          className="col-span-2 h-10 rounded-lg border border-[var(--hv-hairline)] text-xs font-semibold hover:bg-[var(--hv-ink-12)] active:scale-95 transition-transform cursor-pointer"
        >
          0
        </button>
        <button
          onClick={() => {
            if (!display.includes(".")) inputDigit(".");
          }}
          data-cursor="link"
          className="h-10 rounded-lg border border-[var(--hv-hairline)] text-xs font-semibold hover:bg-[var(--hv-ink-12)] active:scale-95 transition-transform cursor-pointer"
        >
          .
        </button>
        <button
          onClick={() => performOperation("=")}
          data-cursor="link"
          className="h-10 rounded-lg bg-[var(--hv-ink)] text-[var(--hv-on-ink)] text-xs font-bold active:scale-95 shadow transition-transform cursor-pointer"
        >
          =
        </button>
      </div>
    </div>
  );
}

// ==================== 2. SENTINELSCAN AI MOCKUP ====================
export function SentinelScanMockup() {
  const [scanning, setScanning] = useState(false);
  const [progress, setProgress] = useState(84);
  const [checks, setChecks] = useState([
    { name: "SQL Injection Vectors", status: "PASS", code: "PAR_01" },
    { name: "Broken Object Auth (BOLA)", status: "PASS", code: "AUTH_04" },
    { name: "HSTS Header Enforce", status: "WARN", code: "HDR_09" },
    { name: "TLS 1.3 Handshake Verify", status: "PASS", code: "CRYPTO_02" },
  ]);

  const triggerScan = () => {
    setScanning(true);
    setProgress(10);
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) {
          clearInterval(timer);
          setScanning(false);
          setChecks([
            { name: "SQL Injection Vectors", status: "PASS", code: "PAR_01" },
            { name: "Broken Object Auth (BOLA)", status: "PASS", code: "AUTH_04" },
            { name: "HSTS Header Enforce", status: "SECURED", code: "HDR_09" },
            { name: "TLS 1.3 Handshake Verify", status: "PASS", code: "CRYPTO_02" },
          ]);
          return 100;
        }
        return prev + 18;
      });
    }, 200);
  };

  return (
    <div className="w-full max-w-sm mx-auto border border-[var(--hv-hairline)] p-4 rounded-2xl bg-[var(--hv-paper)] text-[var(--hv-ink)] font-mono text-xs space-y-4 shadow-xl select-none">
      <div className="flex items-center justify-between pb-3 border-b border-[var(--hv-hairline)]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-sans font-bold text-xs tracking-tight">SentinelScan AI v2.4</span>
        </div>
        <button
          onClick={triggerScan}
          disabled={scanning}
          data-cursor="link"
          className="px-3 py-1 rounded-full bg-[var(--hv-ink)] text-[var(--hv-on-ink)] text-[10px] font-bold uppercase tracking-wider hover:opacity-85 cursor-pointer disabled:opacity-50 transition-opacity"
        >
          {scanning ? `Auditing (${progress}%)` : "Run Audit"}
        </button>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1 bg-[var(--hv-ink-12)] rounded-full overflow-hidden">
        <div
          className="h-full bg-[var(--hv-ink)] transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="p-2 border border-[var(--hv-hairline)] rounded-lg bg-[var(--hv-ink-12)]">
          <span className="text-[9px] text-[var(--hv-muted)] block">TARGET HOST</span>
          <span className="font-bold text-[11px] truncate block">api.gateway.internal</span>
        </div>
        <div className="p-2 border border-[var(--hv-hairline)] rounded-lg bg-[var(--hv-ink-12)]">
          <span className="text-[9px] text-[var(--hv-muted)] block">THREAT SCORE</span>
          <span className="font-bold text-[11px] text-emerald-500 block">LOW (0.08)</span>
        </div>
      </div>

      <div className="p-2.5 border border-[var(--hv-hairline)] rounded-lg space-y-1.5 text-[10px]">
        <div className="text-[var(--hv-muted)] font-bold text-[9px] flex justify-between">
          <span>REAL-TIME AUDIT LOG</span>
          <span>{scanning ? "AUDITING..." : "IDLE"}</span>
        </div>
        {checks.map((c) => (
          <div key={c.name} className="flex justify-between items-center py-0.5 border-b border-[var(--hv-hairline)]/50 last:border-0">
            <span className="text-[var(--hv-ink-70)]">{c.name}</span>
            <span
              className={`font-bold px-1.5 py-0.5 rounded text-[9px] ${
                c.status === "PASS" || c.status === "SECURED"
                  ? "bg-emerald-500/15 text-emerald-500"
                  : "bg-amber-500/15 text-amber-500"
              }`}
            >
              {c.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==================== 3. JARVIS AI MOCKUP ====================
export function JarvisAIMockup() {
  const [selectedPrompt, setSelectedPrompt] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const prompts = [
    {
      q: "Audit auth_service for timing attacks",
      r: "Constant-time comparison confirmed via crypto/subtle. ConstantTimeCompare verified on bearer token hash digest. Timing discrepancy < 0.2ns.",
    },
    {
      q: "Inspect Flutter Impeller memory leaks",
      r: "Riverpod AutoDisposeProviderRef verified. Platform render textures unmounted on route dispose cleanly. Heap allocation stable at 48.2 MB.",
    },
    {
      q: "Generate STRIDE threat matrix",
      r: "Spoofing: mitigated via mTLS. Tampering: HMAC-SHA256 verified. Repudiation: immutable audit trail active. Information disclosure: zero.",
    },
  ];

  const handleSelect = (idx: number) => {
    setSelectedPrompt(idx);
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 250);
  };

  return (
    <div className="w-full max-w-sm mx-auto border border-[var(--hv-hairline)] p-4 rounded-2xl bg-[var(--hv-paper)] text-[var(--hv-ink)] font-mono text-xs space-y-3 shadow-xl select-none">
      <div className="flex items-center justify-between pb-2 border-b border-[var(--hv-hairline)]">
        <span className="font-sans font-bold text-xs flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          Jarvis Copilot CLI
        </span>
        <span className="text-[10px] text-[var(--hv-muted)]">14ms latency</span>
      </div>

      <div className="flex gap-1.5 overflow-x-auto pb-1">
        {prompts.map((p, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(idx)}
            data-cursor="link"
            className={`px-2 py-1 rounded text-[10px] whitespace-nowrap border border-[var(--hv-hairline)] cursor-pointer transition-colors ${
              selectedPrompt === idx
                ? "bg-[var(--hv-ink)] text-[var(--hv-on-ink)] font-bold"
                : "bg-[var(--hv-ink-12)] text-[var(--hv-muted)] hover:text-[var(--hv-ink)]"
            }`}
          >
            {p.q.slice(0, 20)}...
          </button>
        ))}
      </div>

      <div className="p-3 border border-[var(--hv-hairline)] rounded-lg bg-[var(--hv-ink-12)] text-[11px] leading-relaxed min-h-[85px] flex flex-col justify-between">
        <div>
          <span className="text-[9px] text-[var(--hv-muted)] block mb-1">AGENT REASONING OUTPUT:</span>
          <p className="text-[var(--hv-ink)] transition-opacity duration-200">
            {isTyping ? "Synthesizing AST & protocol harness..." : prompts[selectedPrompt].r}
          </p>
        </div>
        <div className="text-[9px] text-emerald-500 font-bold pt-2 flex items-center gap-1">
          <span>● EXECUTION HARNESS ACTIVE</span>
        </div>
      </div>
    </div>
  );
}

// ==================== 4. INTRUSION DETECTION MOCKUP ====================
export function IntrusionDetectionMockup() {
  const [packetsCount, setPacketsCount] = useState(2842109);

  useEffect(() => {
    const interval = setInterval(() => {
      setPacketsCount((prev) => prev + Math.floor(Math.random() * 12 + 4));
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-sm mx-auto border border-[var(--hv-hairline)] p-4 rounded-2xl bg-[var(--hv-paper)] text-[var(--hv-ink)] font-mono text-xs space-y-3 shadow-xl select-none">
      <div className="flex items-center justify-between pb-2 border-b border-[var(--hv-hairline)]">
        <span className="font-sans font-bold text-xs flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Transformer NID Radar
        </span>
        <span className="text-[10px] font-bold text-emerald-500">98.7% ACCURACY</span>
      </div>

      {/* Radar Graphic Area */}
      <div className="relative w-full h-28 rounded-lg border border-[var(--hv-hairline)] bg-[var(--hv-ink-12)] overflow-hidden flex items-center justify-center">
        {/* Concentric rings */}
        <div className="absolute w-20 h-20 rounded-full border border-[var(--hv-hairline)] opacity-60"></div>
        <div className="absolute w-12 h-12 rounded-full border border-[var(--hv-hairline)] opacity-80"></div>
        <div className="absolute w-4 h-4 rounded-full bg-[var(--hv-ink)] opacity-20"></div>

        {/* Crosshair lines */}
        <div className="absolute w-full h-px bg-[var(--hv-hairline)] opacity-50"></div>
        <div className="absolute h-full w-px bg-[var(--hv-hairline)] opacity-50"></div>

        {/* Sweeping Radar Beam */}
        <div className="absolute w-28 h-28 hv-radar-beam pointer-events-none">
          <div className="w-1/2 h-1/2 bg-gradient-to-tr from-emerald-500/25 to-transparent origin-bottom-right rounded-tl-full"></div>
        </div>

        {/* Detected Nodes / Blips */}
        <div className="absolute top-6 left-12 w-2 h-2 rounded-full bg-emerald-400 animate-ping"></div>
        <div className="absolute top-6 left-12 w-1.5 h-1.5 rounded-full bg-emerald-500"></div>

        <div className="absolute bottom-6 right-14 w-2 h-2 rounded-full bg-red-400 animate-ping"></div>
        <div className="absolute bottom-6 right-14 w-1.5 h-1.5 rounded-full bg-red-500"></div>

        <span className="absolute bottom-1 right-2 text-[9px] text-[var(--hv-muted)]">
          {packetsCount.toLocaleString()} FLOWS
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="p-1.5 border border-[var(--hv-hairline)] rounded-lg bg-[var(--hv-ink-12)]">
          <span className="text-[9px] text-[var(--hv-muted)] block">PRECISION</span>
          <span className="font-bold text-xs">99.1%</span>
        </div>
        <div className="p-1.5 border border-[var(--hv-hairline)] rounded-lg bg-[var(--hv-ink-12)]">
          <span className="text-[9px] text-[var(--hv-muted)] block">RECALL</span>
          <span className="font-bold text-xs">98.4%</span>
        </div>
        <div className="p-1.5 border border-[var(--hv-hairline)] rounded-lg bg-[var(--hv-ink-12)]">
          <span className="text-[9px] text-[var(--hv-muted)] block">BENCHMARK</span>
          <span className="font-bold text-[10px] truncate block">CICIDS2017</span>
        </div>
      </div>
    </div>
  );
}
