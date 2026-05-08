'use client'
import React from "react";
import Image from "next/image";
import BenefitsSection from "@/src/components/landing/aboutSection/page";
import HeroSection from "@/src/components/landing/heroSection/page";
import Navbar from "@/src/components/landing/Navbar.jsx/page";
import Sobre from "@/src/components/landing/sobre/page";
import Modalidade from "@/src/components/landing/modalidadesSection/page";

export default function AppPilates() {
  return (
  <div className="min-h-screen bg-background dark">
  <Navbar/>
  <HeroSection/>
  <Sobre/>
  <Modalidade/>
    <BenefitsSection/>
  </div>  
    
  );
}
