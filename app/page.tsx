"use client";
import { Mr_Bedfort } from "next/font/google";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import ourImage2 from "@/assets/us2.png";
import Calendar from "./calder";
const font = Mr_Bedfort({
  weight: "400",
});

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 2.5]);
  const imageRadius = useTransform(scrollYProgress, [0.5, 0], [1, 200]);
  const widthMargin = useTransform(scrollYProgress, [0.4, 0], [0, 32]);

  return (
    <main className="bg-background min-h-screen">
      <section className="pt-8">
        <div className="text-center bg-ivory pt-4">
          <motion.p initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="italic text-sm mb-8">
            And so we know and rely on the love God has for us. God is love. Whoever lives in love lives in God, and God in them (1 John 4:16)
          </motion.p>
          <motion.h6 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-primary pb-4 xl:text-xl">
            Please join us to celebrate our wedding!
          </motion.h6>
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="text-5xl xl:text-7xl font-bold text-text pb-2 xl:pb-4" style={font.style}>
            Oswin & Daphney
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1 }} className="text-primary font-bold text-lg xl:text-xl">
            Monday, 11th May 2026
          </motion.p>
        </div>
      </section>
      <section className="w-full flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            borderTopLeftRadius: imageRadius,
            borderTopRightRadius: imageRadius,

            margin: widthMargin,
          }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className=" aspect-3/4 xl:aspect-square overflow-hidden ring-offset-3 ring-1 max-w-175 xl:max-w-100 ring-primary"
        >
          <motion.img initial={{ scale: 1.05 }} animate={{ scale: 1 }} style={{ scale: scaleImage }} transition={{ duration: 0.5, delay: 1.5, ease: "easeInOut" }} src={ourImage2.src} alt="Our Image" className=" w-full object-cover aspect-3/4 xl:aspect-square" />
        </motion.div>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 2 }} className="text-center pt-4 px-8">
          With great pleasure, we joyously seek the honour of your presence prayers and blessings with family at our wedding!
        </motion.p>
      </section>
      <section className="w-full flex flex-col items-center px-6 sm:px-8 md:px-10 py-12">
        <motion.div initial={{ opacity: 0, y: 30, scale: 0.98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }} className="w-full max-w-4xl">
          {/* <Image src="/calendar-may-2026.svg" alt="May 2026 calendar with May 11 marked" width={1200} height={900} className="w-full h-auto" /> */}
          <Calendar />
        </motion.div>
      </section>
      <section className="p-8 mt-10 xl:text-center">
        <motion.h2 viewport={{ amount: 1 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-2xl text-primary font-bold">
          The Venue
        </motion.h2>
        <motion.div viewport={{ amount: 1 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <motion.h3 className="text-4xl text-text font-bold mt-4">Wedding</motion.h3>
          <p className="mt-2">The Seventh-Day Adventist Church, Water Tank Road, Nagercoil.</p>
          <a href="https://maps.app.goo.gl/axfWhduBetLxAVFT9" className="text-primary underline">
            Get Directions
          </a>
        </motion.div>
        <motion.div viewport={{ amount: 1 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h3 className="text-4xl text-text font-bold mt-4">Reception</h3>
          <p className="mt-2">Y R Mahal, Water Tank Road, Nagercoil - 1</p>
          <a href="https://maps.app.goo.gl/w6nRUxHDFVS2Ee1V6" className="text-primary underline">
            Get Directions
          </a>
        </motion.div>
        <motion.p viewport={{ amount: 1 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mt-4 italic">
          May we gather to witness their union in Christ and celebrate the beginning of their journey together in faith, hope and love.
        </motion.p>
      </section>
      <section className="h-[1200px]"></section>
    </main>
  );
};

export default Home;
