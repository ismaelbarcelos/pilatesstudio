'use client'
import React from "react";
import Image from "next/image";
import BenefitsSection from "@/app/components/landing/aboutSection/page";
import HeroSection from "@/app/components/landing/heroSection/page";
import Navbar from "@/app/components/landing/Navbar.jsx/page";
import Sobre from "@/app/components/landing/sobre/page";
import Modalidade from "@/app/components/landing/modalidadesSection/page";

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
