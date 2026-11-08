import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  ChevronLeft, 
  Clock, 
  Users, 
  Smartphone, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  Sparkles, 
  Flame, 
  Calendar, 
  ArrowRight,
  Code2,
  Terminal,
  Layers,
  TrendingUp,
  Cpu
} from 'lucide-react';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = 4;

  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#0A0D14] text-slate-100 flex flex-col font-sans select-none">
      {/* Top Header / Progress Bar */}
      <header className="px-8 py-5 flex items-center justify-between border-b border-slate-800/80 bg-[#0C101A]/90 backdrop-blur z-20">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-black text-white shadow-lg shadow-cyan-500/20">
            R
          </div>
          <div>
            <div className="font-bold text-[17px] tracking-tight text-white flex items-center gap-2">
              RISEUP ASIA <span className="text-[12px] px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 font-semibold uppercase tracking-wider">Managed Teamwork</span>
            </div>
            <p className="text-[12px] text-slate-400">Mobile App Result-Driven Engineering</p>
          </div>
        </div>

        {/* Slide Step Indicators */}
        <div className="flex items-center gap-2">
          {['1. The Core Equation', '2. Tech Capabilities', '3. The Master Deal', '4. The Half-Deal & Onboard'].map((label, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`px-3 py-1.5 rounded-lg text-[13px] font-medium transition-all ${
                currentSlide === idx 
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20 font-semibold' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Slide Counter */}
        <div className="flex items-center gap-4">
          <span className="text-[13px] font-mono text-slate-400">
            SLIDE <span className="text-cyan-400 font-bold text-[15px]">{currentSlide + 1}</span> / {totalSlides}
          </span>
          <div className="flex items-center gap-1">
            <button 
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 disabled:opacity-30 disabled:pointer-events-none transition"
            >
              <ChevronLeft className="w-4 h-4 text-slate-200" />
            </button>
            <button 
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1}
              className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 disabled:opacity-30 disabled:pointer-events-none transition"
            >
              <ChevronRight className="w-4 h-4 text-slate-200" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Slide Content Area */}
      <main className="flex-1 relative flex items-center justify-center p-8 overflow-hidden">
        {/* Glow ambient background effects */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

        {/* SLIDE 1: The Core Equation */}
        {currentSlide === 0 && (
          <div className="max-w-6xl w-full flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-300">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-[13px] font-bold tracking-wide uppercase mb-6 shadow-md shadow-cyan-900/30">
              <Zap className="w-4 h-4 text-cyan-400" /> Teamwork As A Service · Managed Mobile Squad
            </div>

            <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] max-w-4xl">
              Spend <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500 underline decoration-amber-500/40 decoration-4">3 Hours</span> A Month.
              <br />
              Receive <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-300 to-blue-400">160 Hours</span> Senior Velocity.
            </h1>

            <p className="mt-5 text-[18px] text-slate-300 max-w-2xl leading-relaxed">
              Stop burning 20+ hours a week babysitting freelancers and reviewing fragile code. 
              Get a deterministic, result-driven engineering squad on tap.
            </p>

            {/* The Contrast Cards */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl text-left">
              {/* Traditional Trap */}
              <div className="p-7 rounded-2xl bg-gradient-to-b from-rose-950/20 to-slate-900/80 border border-rose-500/20 relative overflow-hidden">
                <div className="text-[13px] font-extrabold uppercase tracking-wider text-rose-400 mb-2">The Traditional Nightmare</div>
                <div className="text-2xl font-bold text-white mb-4">Chaotic Dev & Founder Drag</div>
                <ul className="space-y-3 text-[15px] text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-400 font-bold">✕</span> 
                    <span><b>20+ hrs/week</b> wasted managing, explaining specs & micromanaging.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-400 font-bold">✕</span> 
                    <span>Fragile code releases that crash on production and scare users.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-400 font-bold">✕</span> 
                    <span>Unpredictable delays, missing deadlines, and bloated hourly invoices.</span>
                  </li>
                </ul>
              </div>

              {/* The Managed Solution */}
              <div className="p-7 rounded-2xl bg-gradient-to-b from-cyan-950/40 to-slate-900/90 border border-cyan-500/40 relative overflow-hidden shadow-xl shadow-cyan-950/50">
                <div className="absolute top-0 right-0 px-3 py-1 bg-cyan-500 text-slate-950 font-black text-[11px] rounded-bl-lg uppercase tracking-wider">
                  The Result Engine
                </div>
                <div className="text-[13px] font-extrabold uppercase tracking-wider text-cyan-400 mb-2">Our Managed Model</div>
                <div className="text-2xl font-bold text-white mb-4">Autonomous 160h Velocity</div>
                <ul className="space-y-3 text-[15px] text-slate-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                    <span><b>Only 3 hours/month</b> needed from you for roadmap guidance.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                    <span><b>Full 160 hours team effort</b> dedicated to Android & Flutter sprints.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                    <span>Lead architect oversight + testing included at zero extra overhead.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 2: Tech Capabilities & Deliverables */}
        {currentSlide === 1 && (
          <div className="max-w-6xl w-full flex flex-col animate-in fade-in zoom-in-95 duration-300">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-[12px] font-extrabold tracking-widest uppercase mb-3">
                Full-Stack Capabilities
              </div>
              <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight">
                Engineering Depth Across the Entire Mobile Ecosystem
              </h2>
              <p className="mt-3 text-[16px] text-slate-300">
                We handle the complete execution cycle—from architecture to App Store approval.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Pillar 1: Flutter & Android */}
              <div className="p-7 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition group">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 transition">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Flutter & Native Android</h3>
                <p className="text-[14px] text-slate-400 mb-4 leading-relaxed">
                  High-velocity cross-platform Flutter/Dart apps and high-performance native Android (Kotlin) development.
                </p>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
                  <span className="px-2.5 py-1 bg-slate-800/80 rounded-md text-[12px] text-cyan-300 font-mono">Flutter / Dart</span>
                  <span className="px-2.5 py-1 bg-slate-800/80 rounded-md text-[12px] text-cyan-300 font-mono">Kotlin / Android</span>
                  <span className="px-2.5 py-1 bg-slate-800/80 rounded-md text-[12px] text-cyan-300 font-mono">iOS Support</span>
                </div>
              </div>

              {/* Pillar 2: Scalable Architecture */}
              <div className="p-7 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-blue-500/40 transition group">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-5 group-hover:scale-110 transition">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Architecture & Backend Sync</h3>
                <p className="text-[14px] text-slate-400 mb-4 leading-relaxed">
                  Enterprise-grade state architecture (BLoC/Riverpod), offline-first SQLite/Hive caching, and secure REST/GraphQL API sync.
                </p>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
                  <span className="px-2.5 py-1 bg-slate-800/80 rounded-md text-[12px] text-blue-300 font-mono">BLoC / Riverpod</span>
                  <span className="px-2.5 py-1 bg-slate-800/80 rounded-md text-[12px] text-blue-300 font-mono">Offline-First</span>
                  <span className="px-2.5 py-1 bg-slate-800/80 rounded-md text-[12px] text-blue-300 font-mono">API Hardening</span>
                </div>
              </div>

              {/* Pillar 3: QA & Store Deployment */}
              <div className="p-7 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-emerald-500/40 transition group">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 transition">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Automated QA & CI/CD</h3>
                <p className="text-[14px] text-slate-400 mb-4 leading-relaxed">
                  Real-device testing, 60fps frame optimization, zero crashes, and automated pipelines to Google Play & Apple App Store.
                </p>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
                  <span className="px-2.5 py-1 bg-slate-800/80 rounded-md text-[12px] text-emerald-300 font-mono">Zero Crash Target</span>
                  <span className="px-2.5 py-1 bg-slate-800/80 rounded-md text-[12px] text-emerald-300 font-mono">Play Console</span>
                  <span className="px-2.5 py-1 bg-slate-800/80 rounded-md text-[12px] text-emerald-300 font-mono">TestFlight</span>
                </div>
              </div>
            </div>

            {/* Bottom Proof Strip */}
            <div className="mt-8 p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/20 flex flex-wrap items-center justify-between text-[14px]">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Deterministic sprints delivered every 14 days</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Transparent Git repository & full intellectual property ownership</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Lead architect oversight included automatically</span>
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 3: The Master Deal & Urgency */}
        {currentSlide === 2 && (
          <div className="max-w-6xl w-full flex flex-col items-center animate-in fade-in zoom-in-95 duration-300">
            {/* Top Urgency Header */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-amber-500/10 border border-amber-500/40 text-amber-300 text-[14px] font-extrabold tracking-wide uppercase mb-6 shadow-lg shadow-amber-950/40 animate-pulse">
              <Flame className="w-5 h-5 text-amber-400" /> Exclusive Early-Bird: Valid Until 15 November
            </div>

            <h2 className="text-3xl lg:text-5xl font-black text-white text-center tracking-tight max-w-3xl">
              Unmatched Value Anchoring
            </h2>
            <p className="mt-3 text-[17px] text-slate-300 text-center max-w-xl">
              Get an entire senior mobile engineering team at an unbeatable subscription rate.
            </p>

            {/* Price Anchoring Comparison Grid */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl items-stretch">
              {/* Card 1: Actual Market Value */}
              <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="text-[13px] font-extrabold uppercase tracking-wider text-slate-400 mb-1">Market Benchmark</div>
                  <div className="text-xl font-bold text-slate-200">US / EU Replacement Cost</div>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl lg:text-5xl font-black text-slate-300 line-through opacity-70">$12,000</span>
                    <span className="text-slate-400 text-sm">/mo</span>
                  </div>
                  <p className="mt-4 text-[14px] text-slate-400 leading-relaxed">
                    Cost of hiring separate mobile devs, QA tester, and architect with recruiter fees, benefits, and payroll tax.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-800/80 text-[13px] text-slate-400">
                  ✕ High risk & lengthy hiring drag
                </div>
              </div>

              {/* Card 2: Standard Service Rate */}
              <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-700/80 flex flex-col justify-between">
                <div>
                  <div className="text-[13px] font-extrabold uppercase tracking-wider text-blue-400 mb-1">Standard Rate</div>
                  <div className="text-xl font-bold text-white">Managed Teamwork Service</div>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl lg:text-5xl font-black text-white">$5,000</span>
                    <span className="text-slate-400 text-sm">/mo</span>
                  </div>
                  <p className="mt-4 text-[14px] text-slate-300 leading-relaxed">
                    Regular subscription rate for our full 160-hour managed team service. Massive savings over in-house teams.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-800/80 text-[13px] text-blue-400 font-medium">
                  ✓ Over 58% discount off market cost
                </div>
              </div>

              {/* Card 3: The 15 Nov Master Deal */}
              <div className="p-8 rounded-2xl bg-gradient-to-b from-amber-950/40 via-slate-900/90 to-slate-900 border-2 border-amber-400/80 flex flex-col justify-between relative shadow-2xl shadow-amber-900/30 scale-105">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-[12px] rounded-full uppercase tracking-widest shadow-md">
                  ★ SPECIAL OFFER TILL 15 NOV ★
                </div>
                <div>
                  <div className="text-[13px] font-extrabold uppercase tracking-wider text-amber-400 mb-1">8-Month Contract Lock</div>
                  <div className="text-2xl font-black text-white">Full 160h Managed Team</div>
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-200">
                      $4,000
                    </span>
                    <span className="text-slate-300 text-sm font-semibold">/mo for 8 mos</span>
                  </div>
                  <p className="mt-4 text-[14px] text-slate-200 leading-relaxed font-medium">
                    Lock in 8 full months of 160h/month execution. Saves an extra $8,000 over the standard rate.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-amber-500/30 text-[14px] text-amber-300 font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Immediate $1,000/mo cash relief</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 4: The Half-Deal & Seamless Onboarding */}
        {currentSlide === 3 && (
          <div className="max-w-6xl w-full flex flex-col animate-in fade-in zoom-in-95 duration-300">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-[12px] font-extrabold tracking-widest uppercase mb-3">
                Flexibility & Execution Roadmap
              </div>
              <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight">
                The Proportional Half-Deal & 48h Kickoff
              </h2>
              <p className="mt-3 text-[16px] text-slate-300">
                Smaller scope or tighter runway? Pay half the amount, get half the work delivered with zero compromise on quality.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {/* Half-Deal Comparison Box */}
              <div className="p-8 rounded-2xl bg-slate-900/80 border border-cyan-500/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[12px] font-black uppercase tracking-widest px-3 py-1 rounded-md bg-cyan-950 border border-cyan-500/30 text-cyan-300">
                      Flexible Entry Option
                    </span>
                    <span className="text-[13px] font-semibold text-slate-400">Proportional Delivery</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">The "Half-Deal" Alternative</h3>
                  <p className="text-[15px] text-slate-300 mb-6 leading-relaxed">
                    Designed for early-stage MVPs, modular feature sprints, or teams that want to test our velocity with minimal commitment.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/50">
                      <span className="text-[14px] text-slate-300 font-medium">Founder Time Commitment:</span>
                      <span className="text-[15px] font-bold text-cyan-400 font-mono">1.5 Hours / mo</span>
                    </div>

                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/50">
                      <span className="text-[14px] text-slate-300 font-medium">Team Effort Delivered:</span>
                      <span className="text-[15px] font-bold text-cyan-400 font-mono">80 Hours / mo</span>
                    </div>

                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/50">
                      <span className="text-[14px] text-slate-300 font-medium">Contract Duration:</span>
                      <span className="text-[15px] font-bold text-white font-mono">5 Months</span>
                    </div>

                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/50">
                      <span className="text-[14px] text-slate-300 font-medium">Pricing Model:</span>
                      <span className="text-[15px] font-bold text-amber-300 font-mono">Half Amount / Half Work</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 text-[13px] text-slate-400">
                  ★ Same senior engineering standards, identical architecture reviews.
                </div>
              </div>

              {/* 48-Hour Onboarding Roadmap */}
              <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-900/50 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="text-[12px] font-black uppercase tracking-widest text-slate-400 mb-2">
                    Deterministic Onboarding
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6">How We Kick Off in 48 Hours</h3>

                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 flex items-center justify-center font-bold text-[14px] shrink-0">
                        1
                      </div>
                      <div>
                        <div className="text-[15px] font-bold text-white">45-Minute Alignment Session</div>
                        <div className="text-[13px] text-slate-400 mt-1">Review existing repository, Figma designs, and target 60-day feature milestones.</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/40 text-blue-300 flex items-center justify-center font-bold text-[14px] shrink-0">
                        2
                      </div>
                      <div>
                        <div className="text-[15px] font-bold text-white">CI/CD & Environment Integration</div>
                        <div className="text-[13px] text-slate-400 mt-1">Staging build pipelines configured on Firebase App Distribution and TestFlight.</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300 flex items-center justify-center font-bold text-[14px] shrink-0">
                        3
                      </div>
                      <div>
                        <div className="text-[15px] font-bold text-white">Sprint 1 Execution Begins</div>
                        <div className="text-[13px] text-slate-400 mt-1">Team initiates coding with daily PRs and bi-weekly release milestones.</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div className="text-[13px] text-slate-400">Ready to lock in the early-bird rate?</div>
                  <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-[13px] uppercase tracking-wider hover:opacity-95 transition shadow-lg shadow-amber-500/20 flex items-center gap-2">
                    Claim Nov 15 Offer <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Bottom Footer Controls */}
      <footer className="px-8 py-4 border-t border-slate-800/80 bg-[#0C101A]/80 flex items-center justify-between text-[13px] text-slate-400 z-20">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-slate-300">
            <Clock className="w-4 h-4 text-cyan-400" /> 3h Founder Investment / 160h Output
          </span>
          <span className="text-slate-600">|</span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <Smartphone className="w-4 h-4 text-cyan-400" /> Flutter · Android · iOS
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-[12px] text-slate-500">Use Left / Right arrow keys to navigate</span>
          <button 
            onClick={nextSlide} 
            disabled={currentSlide === totalSlides - 1}
            className="px-4 py-1.5 rounded-lg bg-cyan-600/30 hover:bg-cyan-600/50 border border-cyan-500/40 text-cyan-300 font-semibold transition disabled:opacity-30 disabled:pointer-events-none"
          >
            {currentSlide === totalSlides - 1 ? 'End of Presentation' : 'Next Slide →'}
          </button>
        </div>
      </footer>
    </div>
  );
}
