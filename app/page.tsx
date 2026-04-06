"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import img from "@/assets/us.jpeg";
import leaves from "@/assets/leaves.png";
import elephant from "@/assets/elephant.png";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress, scrollX } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -410]);
  const elephantScroll = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const elephantFade = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="">
      <section ref={ref} className="w-full h-screen bg-red-400 relative isolate">
        <div className="absolute inset-0 bg-black -z-10">
          <Image src={img} className="relative h-full object-cover opacity-80" alt="Background" />
        </div>

        <motion.img style={{ y }} initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} src={leaves.src} className="absolute top-0 left-0 w-full h-auto object-cover" alt="Leaves" />
        <motion.img style={{ y: elephantScroll, opacity: elephantFade }} initial={{ opacity: 0, y: 100, x: -50 }} animate={{ opacity: 1, y: 0, x: 0 }} transition={{ duration: 1 }} src={elephant.src} className="absolute bottom-0 -left-[50%] w-full h-auto object-cover" alt="Leaves" />
        <motion.img style={{ y: elephantScroll, opacity: elephantFade }} initial={{ opacity: 0, y: 100, x: -50 }} animate={{ opacity: 1, y: 0, x: 0 }} transition={{ duration: 1 }} src={elephant.src} className="absolute -bottom-10 left-0 w-full h-auto object-cover" alt="Leaves" />
        <motion.img style={{ y: elephantScroll, opacity: elephantFade }} initial={{ opacity: 0, y: 100, x: -50 }} animate={{ opacity: 1, y: 0, x: 0 }} transition={{ duration: 1 }} src={elephant.src} className="absolute bottom-0 left-[30%] w-full h-auto object-cover" alt="Leaves" />
      </section>
      <h1>sdsd</h1>
      <h1>sdsd</h1>
      <h1>sdsd</h1>
      <h1>sdsd</h1>
      <h1>sdsd</h1>
      <h1>sdsd</h1>
      <h1>sdsd</h1>
      <h1>sdsd</h1>
      <h1>sdsd</h1>
      <h1>sdsd</h1>
      <h1>sdsd</h1>
      <h1>sdsd</h1>
      <h1>sdsd</h1>
      <h1>sdsd</h1>
    </div>
  );
}
