import { motion } from "framer-motion";
import { Lightbulb, Zap, Rocket, Cpu, Atom, Cog } from "lucide-react";
import { GlowEffect } from "./ui/glow-effect";
import { FloatingShape } from "./ui/floating-shape";
import { AnimatedParticles } from "./ui/animated-particles";
import { CircuitPattern, GeometricGrid } from "./ui/background-patterns";
import { ReactNode } from 'react';

interface IICBackgroundProps {
  children?: ReactNode;
}

function IICBackground({ children }: IICBackgroundProps) {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-stretch justify-start overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 min-h-full h-full w-full bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 -z-10" />
      <div className="absolute inset-0 min-h-full h-full w-full bg-gradient-to-br from-blue-500/[0.02] via-transparent to-indigo-500/[0.03] -z-10" />
      {/* Animated glow effects */}
      <div className="absolute inset-0 min-h-full h-full w-full -z-10">
        <GlowEffect
          colors={['#3B82F6', '#8B5CF6', '#06B6D4', '#10B981']}
          mode="breathe"
          blur="strongest"
          scale={2}
          duration={12}
          className="opacity-20"
        />
      </div>
      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 min-h-full h-full w-full -z-10">
        <CircuitPattern />
      </div>
      {/* Geometric grid */}
      <div className="absolute inset-0 min-h-full h-full w-full -z-10">
        <GeometricGrid />
      </div>
      {/* Floating tech shapes */}
      <div className="absolute inset-0 min-h-full h-full w-full overflow-hidden -z-10">
        <FloatingShape delay={0.3} width={300} height={80} rotate={15} gradient="from-blue-500/[0.08]" className="left-[-5%] top-[20%]" >
          <Cpu className="h-6 w-6 text-blue-500/30" />
        </FloatingShape>
        <FloatingShape delay={0.5} width={200} height={60} rotate={-12} gradient="from-indigo-500/[0.08]" className="right-[5%] top-[70%]" >
          <Atom className="h-5 w-5 text-indigo-500/30" />
        </FloatingShape>
        <FloatingShape delay={0.4} width={150} height={50} rotate={-8} gradient="from-cyan-500/[0.08]" className="left-[10%] bottom-[15%]" >
          <Zap className="h-4 w-4 text-cyan-500/30" />
        </FloatingShape>
        <FloatingShape delay={0.6} width={120} height={40} rotate={20} gradient="from-emerald-500/[0.08]" className="right-[20%] top-[15%]" >
          <Lightbulb className="h-4 w-4 text-emerald-500/30" />
        </FloatingShape>
        <FloatingShape delay={0.7} width={100} height={35} rotate={-25} gradient="from-purple-500/[0.08]" className="left-[25%] top-[10%]" >
          <Rocket className="h-3 w-3 text-purple-500/30" />
        </FloatingShape>
        <FloatingShape delay={0.8} width={180} height={55} rotate={10} gradient="from-orange-500/[0.08]" className="right-[10%] bottom-[25%]" >
          <Cog className="h-4 w-4 text-orange-500/30" />
        </FloatingShape>
      </div>
      {/* Animated particles */}
      <div className="absolute inset-0 min-h-full h-full w-full pointer-events-none -z-10">
        <AnimatedParticles />
      </div>
      {/* Subtle overlay gradients */}
      <div className="absolute inset-0 min-h-full h-full w-full bg-gradient-to-t from-white/20 via-transparent to-white/10 pointer-events-none -z-10" />
      <div className="absolute inset-0 min-h-full h-full w-full bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none -z-10" />
      {/* Content area for children */}
      <main className="relative z-10 w-full flex flex-col items-stretch justify-start">
        {children}
      </main>
    </div>
  );
}

export default IICBackground;