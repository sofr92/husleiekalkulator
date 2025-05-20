/* Komplett kalkulatorside med visuell modernisering, visuelle ressurser og fonten 'Manrope' */

import { useEffect } from "react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import jsPDF from "jspdf";

function useFont() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    document.body.style.fontFamily = "'Manrope', sans-serif";
  }, []);
}

// Placeholder components
function SammenligningLeieEie() {
  return <div className="bg-white p-4 rounded-xl shadow">[Sammenligning Leie vs Eie]</div>;
}

function DokumentavgiftEiendomsskatt() {
  return <div className="bg-white p-4 rounded-xl shadow">[Dokumentavgift og Eiendomsskatt]</div>;
}

function ExportToPDF({ title, content }) {
  return <button className="mt-4 w-full bg-blue-500 text-white p-2 rounded">Last ned PDF</button>;
}

function Ressurser() {
  const lenker = [
    {
      navn: "Finn.no – Leieboliger",
      beskrivelse: "Se ledige boliger over hele Norge.",
      url: "https://www.finn.no/realestate/lettings/search.html",
      emoji: "🏡"
    },
    {
      navn: "NAV – Bostøtte",
      beskrivelse: "Søk støtte hvis du har lav inntekt.",
      url: "https://www.nav.no/tema/bostotte",
      emoji: "💰"
    },
    {
      navn: "DNB – Boliglån",
      beskrivelse: "Se lån, kalkulator og renter.",
      url: "https://www.dnb.no/lan/boliglan",
      emoji: "🏦"
    },
    {
      navn: "Husbanken",
      beskrivelse: "Startlån og støtteordninger.",
      url: "https://www.husbanken.no/",
      emoji: "📋"
    },
    {
      navn: "Smarte Penger",
      beskrivelse: "Privatøkonomiske guider og kalkulatorer.",
      url: "https://www.smartepenger.no/",
      emoji: "📊"
    }
  ];

  return (
    <section className="bg-[#fbe8de] backdrop-blur-md rounded-2xl shadow-xl p-6 mt-12">
      <h2 className="text-2xl font-bold text-center text-[#a4442f] mb-6">🔗 Nyttige ressurser</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {lenker.map((lenke) => (
          <a
            key={lenke.navn}
            href={lenke.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#fff5f0] border border-[#f0d6cc] rounded-xl p-4 hover:shadow-lg transition flex flex-col gap-2"
          >
            <div className="text-xl text-[#7b2d21]">{lenke.emoji} <strong>{lenke.navn}</strong></div>
            <p className="text-sm text-[#5f3d36]">{lenke.beskrivelse}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default function Hjemmeside() {
  useFont();
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fbeee6] via-[#fff7f3] to-[#f2ede9] text-gray-900 px-4 py-12">
      <main className="max-w-5xl mx-auto space-y-16">
        <SammenligningLeieEie />
        <DokumentavgiftEiendomsskatt />
        <Ressurser />
      </main>
    </div>
  );
}
