"use client";

import React, { useState, useEffect, useRef } from "react";

export default function MobileSimulator({ onClose }) {
  const [activeView, setActiveView] = useState("lock"); // 'lock', 'home', 'ledger', 'chat'
  const [messages, setMessages] = useState([
    { sender: "Supervisor", text: "Welcome to the team, Julius! Ready to transition Bakas to Flutter?", time: "9:00 AM" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentTime, setCurrentTime] = useState("10:00");
  const messagesEndRef = useRef(null);

  // Update clock in status bar
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
      setCurrentTime(`${hours}:${minutes} ${ampm}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // Scroll messages to bottom
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const handleSendMessage = (text) => {
    // 1. Add user message
    const userMsg = { sender: "Julius", text, time: "Just now" };
    setMessages((prev) => [...prev, userMsg]);

    // 2. Trigger supervisor reply simulation
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      let replyText = "Awesome work! Let me review the pull request.";
      if (text.includes("Ledger")) {
        replyText = "The transaction ledger architecture looks incredibly secure. Nice use of MySQL & Express!";
      } else if (text.includes("real-time")) {
        replyText = "Great speed! Real-time sync looks lightning fast. Let's package the APK tomorrow!";
      } else if (text.includes("Flutter")) {
        replyText = "Wow, the Flutter UI feels 10x smoother than the old web view. Incredible transition!";
      }
      setMessages((prev) => [
        ...prev,
        { sender: "Supervisor", text: replyText, time: "Just now" }
      ]);
    }, 1500);
  };

  const resetApp = () => {
    setActiveView("lock");
    setMessages([
      { sender: "Supervisor", text: "Welcome to the team, Julius! Ready to transition Bakas to Flutter?", time: "9:00 AM" }
    ]);
  };

  const sampleLedger = [
    { id: 1, title: "Flutter Core Migration", type: "Commit", status: "Approved", value: "v1.0.0" },
    { id: 2, title: "Real-time Messaging API", type: "Backend", status: "Success", value: "Secure" },
    { id: 3, title: "Bakas Ledger Database Schema", type: "MySQL", status: "Merged", value: "24 Tables" },
    { id: 4, title: "Offline Sync Support", type: "Sync", status: "Completed", value: "Active" },
    { id: 5, title: "Cross-platform APK & IPA Build", type: "DevOps", status: "Deployed", value: "Stable" }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-fadeIn">
      <div className="relative flex flex-col items-center">
        {/* Close button outside phone */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-2 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-white/70 hover:text-white transition-colors cursor-pointer bg-white/10 px-3 py-1.5 rounded-full border border-white/20"
        >
          Close Simulator ✕
        </button>

        {/* Device Frame */}
        <div className="relative w-[300px] h-[610px] rounded-[3rem] border-[10px] border-zinc-800 bg-zinc-950 p-2.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] ring-1 ring-white/10 overflow-hidden">
          
          {/* Internal Screen Container */}
          <div className="relative w-full h-full rounded-[2.2rem] bg-zinc-900 overflow-hidden flex flex-col text-zinc-100 font-sans">
            
            {/* Dynamic Island */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-5 rounded-full bg-black z-50 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-900 border border-zinc-800/40 ml-auto mr-3"></div>
            </div>

            {/* Status Bar */}
            <div className="h-9 px-5 pt-2 shrink-0 flex items-center justify-between text-[10px] font-mono text-zinc-400 select-none z-40">
              <span>{currentTime}</span>
              <div className="flex items-center gap-1">
                <span>5G</span>
                {/* Simulated Signal Icon */}
                <div className="flex items-end gap-0.5 h-2.5">
                  <div className="w-0.5 h-1 bg-current"></div>
                  <div className="w-0.5 h-1.5 bg-current"></div>
                  <div className="w-0.5 h-2 bg-current"></div>
                  <div className="w-0.5 h-2.5 bg-current"></div>
                </div>
                {/* Simulated Battery */}
                <div className="w-5 h-2.5 rounded-sm border border-current p-0.5 flex items-center">
                  <div className="h-full w-full bg-current rounded-2xs"></div>
                </div>
              </div>
            </div>

            {/* Main Screen Body */}
            <div className="flex-1 relative flex flex-col overflow-hidden">
              
              {/* VIEW 1: LOCK SCREEN */}
              {activeView === "lock" && (
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-zinc-900 to-black p-6 flex flex-col justify-between animate-fadeIn">
                  <div className="flex flex-col items-center mt-12">
                    <span className="text-[36px] font-light tracking-tight">{currentTime.split(" ")[0]}</span>
                    <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-medium">Bakas OS v1.0</span>
                  </div>

                  <div className="flex flex-col items-center gap-4 mb-8">
                    {/* Simulated Fingerprint Icon */}
                    <button
                      onClick={() => setActiveView("home")}
                      className="w-16 h-16 rounded-full border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 active:scale-95 flex items-center justify-center transition-all cursor-pointer group"
                    >
                      <svg className="w-8 h-8 text-emerald-400 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                      </svg>
                    </button>
                    <span className="text-[10px] text-zinc-400 animate-pulse uppercase tracking-wider">Tap lock to unlock</span>
                  </div>
                </div>
              )}

              {/* VIEW 2: HOME SCREEN */}
              {activeView === "home" && (
                <div className="absolute inset-0 bg-zinc-950 p-6 flex flex-col justify-between animate-fadeIn">
                  <div className="mt-6">
                    <h2 className="text-lg font-semibold tracking-tight text-white">Bakas Mobile</h2>
                    <p className="text-[11px] text-zinc-500 font-mono mt-0.5">CMV Internship Project Sandbox</p>
                  </div>

                  {/* App Grid */}
                  <div className="grid grid-cols-2 gap-4 my-auto">
                    {/* Ledger App Icon */}
                    <button
                      onClick={() => setActiveView("ledger")}
                      className="flex flex-col items-center justify-center p-4 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500/30 hover:bg-zinc-800/80 transition-all cursor-pointer group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-emerald-500/10 group-hover:scale-105 transition-transform">
                        ₱
                      </div>
                      <span className="text-[11px] font-medium mt-2 text-zinc-300">Transaction Ledger</span>
                    </button>

                    {/* Chat App Icon */}
                    <button
                      onClick={() => setActiveView("chat")}
                      className="flex flex-col items-center justify-center p-4 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-sky-500/30 hover:bg-zinc-800/80 transition-all cursor-pointer group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-sky-500/10 group-hover:scale-105 transition-transform">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <span className="text-[11px] font-medium mt-2 text-zinc-300">In-App Chat</span>
                    </button>
                  </div>

                  <div className="text-center text-[10px] text-zinc-600 font-mono">
                    Swipe or tap home indicator below to lock
                  </div>
                </div>
              )}

              {/* VIEW 3: TRANSACTION LEDGER */}
              {activeView === "ledger" && (
                <div className="absolute inset-0 bg-zinc-950 flex flex-col justify-between animate-fadeIn">
                  {/* Ledger Header */}
                  <div className="px-4 pt-4 pb-2 border-b border-zinc-800 flex items-center justify-between shrink-0">
                    <button
                      onClick={() => setActiveView("home")}
                      className="text-xs text-emerald-400 font-medium flex items-center gap-1"
                    >
                      ← Back
                    </button>
                    <span className="text-xs font-semibold">Ledger Ledger</span>
                    <div className="w-6"></div>
                  </div>

                  {/* Ledger Contents */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-3">
                    <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-3.5 mb-2">
                      <span className="text-[10px] uppercase font-mono text-emerald-400 tracking-wider">Internal Ledger Status</span>
                      <div className="text-lg font-bold mt-1 text-white">Active Connection</div>
                      <div className="text-[10px] text-zinc-400 mt-1 font-mono">Synced database: MySQL + Express</div>
                    </div>

                    {sampleLedger.map((item) => (
                      <div key={item.id} className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-between">
                        <div>
                          <div className="text-[12px] font-medium text-white">{item.title}</div>
                          <div className="text-[9px] font-mono text-zinc-500 uppercase mt-0.5">{item.type}</div>
                        </div>
                        <div className="text-right">
                          <span className="inline-block text-[9px] px-1.5 py-0.5 rounded font-mono bg-zinc-800 text-emerald-400 border border-emerald-500/20">
                            {item.status}
                          </span>
                          <div className="text-[10px] font-semibold text-zinc-300 mt-1">{item.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom App Nav */}
                  <div className="h-12 border-t border-zinc-900 bg-zinc-950/80 backdrop-blur px-6 flex items-center justify-around shrink-0 text-zinc-400 text-[10px]">
                    <button className="flex flex-col items-center text-emerald-400">
                      <span className="text-base">₱</span>
                      <span>Ledger</span>
                    </button>
                    <button onClick={() => setActiveView("chat")} className="flex flex-col items-center hover:text-zinc-200">
                      <span className="text-base">💬</span>
                      <span>Chat</span>
                    </button>
                  </div>
                </div>
              )}

              {/* VIEW 4: CHAT ROOM */}
              {activeView === "chat" && (
                <div className="absolute inset-0 bg-zinc-950 flex flex-col justify-between animate-fadeIn">
                  {/* Chat Header */}
                  <div className="px-4 pt-4 pb-2 border-b border-zinc-800 flex items-center justify-between shrink-0">
                    <button
                      onClick={() => setActiveView("home")}
                      className="text-xs text-sky-400 font-medium flex items-center gap-1"
                    >
                      ← Back
                    </button>
                    <div className="flex flex-col items-center">
                      <span className="text-xs font-semibold">Supervisor Henry</span>
                      <span className="text-[8px] text-emerald-400 font-mono flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span> Online
                      </span>
                    </div>
                    <div className="w-6"></div>
                  </div>

                  {/* Message Bubble Feed */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-3 flex flex-col">
                    {messages.map((msg, index) => {
                      const isUser = msg.sender === "Julius";
                      return (
                        <div
                          key={index}
                          className={`max-w-[80%] p-2.5 rounded-xl text-xs leading-normal ${
                            isUser
                              ? "bg-sky-600 text-white rounded-br-none self-end"
                              : "bg-zinc-800 text-zinc-200 rounded-bl-none self-start"
                          }`}
                        >
                          <p>{msg.text}</p>
                          <span className="block text-[8px] text-zinc-400 mt-1 text-right select-none">{msg.time}</span>
                        </div>
                      );
                    })}

                    {isTyping && (
                      <div className="bg-zinc-800 text-zinc-200 p-2.5 rounded-xl rounded-bl-none text-xs self-start max-w-[80%] flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce"></span>
                        <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce delay-100"></span>
                        <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce delay-200"></span>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Preset quick responses */}
                  <div className="p-2 border-t border-zinc-900 bg-zinc-950 flex flex-col gap-1.5 shrink-0">
                    <span className="text-[8px] uppercase tracking-wider text-zinc-500 font-mono px-1">Quick replies:</span>
                    <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                      <button
                        onClick={() => handleSendMessage("Hi Henry, Bakas Mobile is migrated fully to Flutter!")}
                        className="shrink-0 text-[10px] bg-zinc-900 border border-zinc-800 hover:border-sky-500/50 hover:bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded-full cursor-pointer transition-colors active:scale-95"
                      >
                        Flutter Transition Done 🚀
                      </button>
                      <button
                        onClick={() => handleSendMessage("Completed database connection with transaction Ledger sync.")}
                        className="shrink-0 text-[10px] bg-zinc-900 border border-zinc-800 hover:border-sky-500/50 hover:bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded-full cursor-pointer transition-colors active:scale-95"
                      >
                        Ledger Complete ₱
                      </button>
                      <button
                        onClick={() => handleSendMessage("Wrote the real-time messaging pipeline.")}
                        className="shrink-0 text-[10px] bg-zinc-900 border border-zinc-800 hover:border-sky-500/50 hover:bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded-full cursor-pointer transition-colors active:scale-95"
                      >
                        In-App Chat Done 💬
                      </button>
                    </div>
                  </div>

                  {/* Bottom App Nav */}
                  <div className="h-12 border-t border-zinc-900 bg-zinc-950/80 backdrop-blur px-6 flex items-center justify-around shrink-0 text-zinc-400 text-[10px]">
                    <button onClick={() => setActiveView("ledger")} className="flex flex-col items-center hover:text-zinc-200">
                      <span className="text-base">₱</span>
                      <span>Ledger</span>
                    </button>
                    <button className="flex flex-col items-center text-sky-400">
                      <span className="text-base">💬</span>
                      <span>Chat</span>
                    </button>
                  </div>
                </div>
              )}

            </div>

            {/* Bottom Home Indicator Bar */}
            <div className="h-5 shrink-0 flex items-center justify-center select-none z-50">
              <button
                onClick={resetApp}
                aria-label="Home"
                className="w-28 h-1 rounded-full bg-zinc-700 hover:bg-zinc-500 cursor-pointer active:scale-95 transition-all"
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
