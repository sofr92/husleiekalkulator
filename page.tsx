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

// (forenklet innhold fra canvas – kortversjon)
function useFont() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    document.body.style.fontFamily = "'Manrope', sans-serif";
  }, []);
}

export default function Hjemmeside() {
  useFont();
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fbeee6] via-[#fff7f3] to-[#f2ede9] text-gray-900 px-4 py-12">
      <main className="max-w-5xl mx-auto space-y-16">
        <div className='p-6 bg-white rounded-xl shadow'>Kalkulator-komponenter kommer her</div>
      </main>
    </div>
  );
}
