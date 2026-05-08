'use client'
import React from "react";
import Image from "next/image";
import BenefitsSection from "@/app/aboutSection";
import HeroSection from "@/app/horeSection";
import Navbar from "@/app/navbar";
import Sobre from "@/app/sobre";
import Modalidade from "@/app/modalidadeSection";

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
