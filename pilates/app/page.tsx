'use client'
import React from "react";
import Image from "next/image";
import BenefitsSection from "@/app/src/components/landing/aboutSection/page";
import HeroSection from "@/app/src/components/landing/heroSection/page";
import Navbar from "@/app/src/components/landing/Navbar.jsx/page";
import Sobre from "@/app/src/components/landing/sobre/page";
import Modalidade from "@/app/src/components/landing/modalidadesSection/page";

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
