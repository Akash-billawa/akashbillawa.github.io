"use client";

import { useState } from "react";

// ==================== 1. NOVA CALC MOCKUP (FLUTTER APP) ====================
export function NovaCalcMockup() {
  const [display, setDisplay] = useState("42.85");
  const [equation, setEquation] = useState("240.5 × 0.178");
  const [activeTab, setActiveTab] = useState<"std" | "sci">("sci");

  const handleKey = (key: string) => {
    if (key === "C") {
      setDisplay("0");
      setEquation("");
    } else if (key === "=") {
      try {
        const res = Math.round(Math.random() * 1000 + 42) / 10;
        setDisplay(String(res));
      } catch {
        setDisplay("Error");
      }
    } else {
      if (display === "0" || display === "42.85") {
        setDisplay(key);
        setEquation(key);
      } else {
        setDisplay((prev) => prev + key);
        setEquation((prev) => prev + key);
      }
    }
  };

  return (
    <div className="w-full max-w-xs mx-auto border border-[var(--hv-hairline)] p-4 rounded-3xl bg-[var(--hv-paper)] text-[var(--hv-ink)] shadow-lg font-mono text-xs">
      {/* Dynamic island / top pill */}
      <div className="flex justify-center mb-3">
        <div className="w-20 h-3.5 bg-[var(--hv-ink)] rounded-full flex items-center justify-between px-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--hv-paper)] opacity-60"></div>
          <div className="w-1 h-1 rounded-full bg-[var(--hv-paper)] opacity-40"></div>
        </div>
      </div>

      {/* Screen Header */}
      <div className="flex items-center justify-between px-1 mb-2">
        <span className="font-sans font-bold text-[11px]">Nova Calc</span>
        <div className="flex gap-1">
          <button
            onClick={() => setActiveTab("std")}
            className={`px-2 py-0.5 rounded text-[10px] ${
              activeTab === "std" ? "bg-[var(--hv-ink)] text-[var(--hv-on-ink)] font-bold" : "text-[var(--hv-muted)]"
            }`}
          >
            Basic
          </button>
          <button
            onClick={() => setActiveTab("sci")}
            className={`px-2 py-0.5 rounded text-[10px] ${
              activeTab === "sci" ? "bg-[var(--hv-ink)] text-[var(--hv-on-ink)] font-bold" : "text-[var(--hv-muted)]"
            }`}
          >
            Sci
          </button>
        </div>
      </div>

      {/* Display */}
      <div className="p-3 mb-3 border border-[var(--hv-hairline)] rounded-xl flex flex-col items-end justify-end h-20 bg-[var(--hv-ink-12)]">
        <span className="text-[10px] text-[var(--hv-muted)] h-3">{equation}</span>
        <span className="text-2xl font-bold font-mono tracking-tight">{display}</span>
      </div>

      {/* Scientific Keys */}
      {activeTab === "sci" && (
        <div className="grid grid-cols-4 gap-1 mb-2">
          {["sin", "cos", "tan", "ln", "√", "^", "(", ")"].map((fn) => (
            <button
              key={fn}
              onClick={() => handleKey(fn + "(")}
              className="h-7 rounded bg-[var(--hv-ink-12)] hover:bg-[var(--hv-ink)] hover:text-[var(--hv-on-ink)] transition-colors text-[10px]"
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
            onClick={() => handleKey(btn)}
            className="h-10 rounded-lg border border-[var(--hv-hairline)] hover:bg-[var(--hv-ink-12)] font-semibold text-xs active:scale-95"
          >
            {btn}
          </button>
        ))}

        {["7", "8", "9", "×"].map((btn) => (
          <button
            key={btn}
            onClick={() => handleKey(btn)}
            className={`h-10 rounded-lg border border-[var(--hv-hairline)] text-xs font-semibold active:scale-95 ${
              btn === "×" ? "bg-[var(--hv-ink)] text-[var(--hv-on-ink)]" : "hover:bg-[var(--hv-ink-12)]"
            }`}
          >
            {btn}
          </button>
        ))}

        {["4", "5", "6", "-"].map((btn) => (
          <button
            key={btn}
            onClick={() => handleKey(btn)}
            className={`h-10 rounded-lg border border-[var(--hv-hairline)] text-xs font-semibold active:scale-95 ${
              btn === "-" ? "bg-[var(--hv-ink)] text-[var(--hv-on-ink)]" : "hover:bg-[var(--hv-ink-12)]"
            }`}
          >
            {btn}
          </button>
        ))}

        {["1", "2", "3", "+"].map((btn) => (
          <button
            key={btn}
            onClick={() => handleKey(btn)}
            className={`h-10 rounded-lg border border-[var(--hv-hairline)] text-xs font-semibold active:scale-95 ${
              btn === "+" ? "bg-[var(--hv-ink)] text-[var(--hv-on-ink)]" : "hover:bg-[var(--hv-ink-12)]"
            }`}
          >
            {btn}
          </button>
        ))}

        <button
          onClick={() => handleKey("0")}
          className="col-span-2 h-10 rounded-lg border border-[var(--hv-hairline)] text-xs font-semibold hover:bg-[var(--hv-ink-12)] active:scale-95"
        >
          0
        </button>
        <button
          onClick={() => handleKey(".")}
          className="h-10 rounded-lg border border-[var(--hv-hairline)] text-xs font-semibold hover:bg-[var(--hv-ink-12)] active:scale-95"
        >
          .
        </button>
        <button
          onClick={() => handleKey("=")}
          className="h-10 rounded-lg bg-[var(--hv-ink)] text-[var(--hv-on-ink)] text-xs font-bold active:scale-95 shadow"
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
  const [progress, setProgress] = useState(82);

  const triggerScan = () => {
    setScanning(true);
    setProgress(15);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 98) {
          clearInterval(interval);
          setScanning(false);
          return 100;
        }
        return prev + 18;
      });
    }, 220);
  };

  return (
    <div className="w-full max-w-sm mx-auto border border-[var(--hv-hairline)] p-4 rounded-xl bg-[var(--hv-paper)] text-[var(--hv-ink)] font-mono text-xs space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-[var(--hv-hairline)]">
        <span className="font-sans font-bold text-xs tracking-tight">SentinelScan AI v2.4</span>
        <button
          onClick={triggerScan}
          disabled={scanning}
          className="px-2.5 py-1 rounded bg-[var(--hv-ink)] text-[var(--hv-on-ink)] text-[10px] font-bold uppercase tracking-wider hover:opacity-85"
        >
          {scanning ? `Auditing (${progress}%)` : "Run Audit"}
        </button>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="p-2 border border-[var(--hv-hairline)] rounded bg-[var(--hv-ink-12)]">
          <span className="text-[10px] text-[var(--hv-muted)] block">TARGET</span>
          <span className="font-bold text-[11px] truncate block">api.gateway.internal</span>
        </div>
        <div className="p-2 border border-[var(--hv-hairline)] rounded bg-[var(--hv-ink-12)]">
          <span className="text-[10px] text-[var(--hv-muted)] block">THREAT SCORE</span>
          <span className="font-bold text-[11px] text-emerald-500 block">LOW (0.12)</span>
        </div>
      </div>

      <div className="p-2.5 border border-[var(--hv-hairline)] rounded space-y-1 text-[10px]">
        <div className="text-[var(--hv-muted)] font-bold">VULNERABILITY TELEMETRY</div>
        <div className="flex justify-between">
          <span>SQL Injection: Parameterized</span>
          <span className="text-emerald-500 font-bold">PASS</span>
        </div>
        <div className="flex justify-between">
          <span>HSTS Header Policy</span>
          <span className="text-amber-500 font-bold">WARN</span>
        </div>
        <div className="flex justify-between">
          <span>TLS 1.3 Asymmetric Handshake</span>
          <span className="text-emerald-500 font-bold">VERIFIED</span>
        </div>
      </div>
    </div>
  );
}

// ==================== 3. JARVIS AI MOCKUP ====================
export function JarvisAIMockup() {
  const [selectedPrompt, setSelectedPrompt] = useState(0);

  const prompts = [
    {
      q: "Audit auth_service.go for timing attacks",
      r: "Constant-time comparison active via crypto/subtle. ConstantTimeCompare verified on token hash.",
    },
    {
      q: "Analyze cross-platform memory leaks in Flutter",
      r: "Riverpod AutoDisposeProviderRef active. State unmounted on route dispose cleanly.",
    },
  ];

  return (
    <div className="w-full max-w-sm mx-auto border border-[var(--hv-hairline)] p-4 rounded-xl bg-[var(--hv-paper)] text-[var(--hv-ink)] font-mono text-xs space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-[var(--hv-hairline)]">
        <span className="font-sans font-bold text-xs">Jarvis Autonomous Agent</span>
        <span className="text-[10px] text-[var(--hv-muted)]">14ms latency</span>
      </div>

      <div className="flex gap-1.5">
        {prompts.map((p, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedPrompt(idx)}
            className={`px-2 py-1 rounded text-[10px] truncate max-w-[150px] border border-[var(--hv-hairline)] ${
              selectedPrompt === idx
                ? "bg-[var(--hv-ink)] text-[var(--hv-on-ink)] font-bold"
                : "bg-[var(--hv-ink-12)] text-[var(--hv-muted)]"
            }`}
          >
            {p.q}
          </button>
        ))}
      </div>

      <div className="p-3 border border-[var(--hv-hairline)] rounded bg-[var(--hv-ink-12)] text-[11px] leading-relaxed">
        <span className="text-[9px] text-[var(--hv-muted)] block mb-1">AGENT OUTPUT:</span>
        <p className="text-[var(--hv-ink)]">{prompts[selectedPrompt].r}</p>
      </div>
    </div>
  );
}

// ==================== 4. INTRUSION DETECTION MOCKUP ====================
export function IntrusionDetectionMockup() {
  return (
    <div className="w-full max-w-sm mx-auto border border-[var(--hv-hairline)] p-4 rounded-xl bg-[var(--hv-paper)] text-[var(--hv-ink)] font-mono text-xs space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-[var(--hv-hairline)]">
        <span className="font-sans font-bold text-xs">Transformer NID Model</span>
        <span className="text-[10px] font-bold text-emerald-500">98.7% ACCURACY</span>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="p-2 border border-[var(--hv-hairline)] rounded bg-[var(--hv-ink-12)]">
          <span className="text-[9px] text-[var(--hv-muted)] block">PRECISION</span>
          <span className="font-bold text-xs">99.1%</span>
        </div>
        <div className="p-2 border border-[var(--hv-hairline)] rounded bg-[var(--hv-ink-12)]">
          <span className="text-[9px] text-[var(--hv-muted)] block">RECALL</span>
          <span className="font-bold text-xs">98.4%</span>
        </div>
        <div className="p-2 border border-[var(--hv-hairline)] rounded bg-[var(--hv-ink-12)]">
          <span className="text-[9px] text-[var(--hv-muted)] block">DATASET</span>
          <span className="font-bold text-[10px] truncate block">CICIDS17</span>
        </div>
      </div>

      <div className="p-2.5 border border-[var(--hv-hairline)] rounded space-y-1 text-[10px]">
        <div className="text-[var(--hv-muted)]">REAL-TIME PACKET FLOW CLASSIFICATION:</div>
        <div className="flex justify-between">
          <span>Flow 192.168.1.14:443</span>
          <span className="text-emerald-500 font-bold">NORMAL (0.01)</span>
        </div>
        <div className="flex justify-between">
          <span>Flow 10.0.4.88:8080</span>
          <span className="text-red-500 font-bold">ANOMALY (0.97)</span>
        </div>
      </div>
    </div>
  );
}
