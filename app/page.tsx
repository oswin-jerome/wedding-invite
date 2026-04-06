"use client";
import { Mr_Bedfort } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";
import ourImage from "@/assets/us.jpeg";
const font = Mr_Bedfort({
  weight: "400",
});

const Home = () => {
  return (
    <main className="bg-background min-h-screen">
      <section className="pt-8">
        <div className="text-center bg-ivory pt-4">
          <motion.p className="italic text-sm mb-8">And so we know and rely on the love God has for us. God is love. Whoever lives in love lives in God, and God in them (1 John 4:16)</motion.p>
          <motion.h6 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-primary pb-4 xl:text-xl">
            Please join us to celebrate our wedding!
          </motion.h6>
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="text-5xl xl:text-7xl font-bold text-text pb-2 xl:pb-4" style={font.style}>
            Oswin & Daphney
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1 }} className="text-primary xl:text-xl">
            Monday, 11th May 2026
          </motion.p>
        </div>
      </section>
      <section className="w-full flex flex-col justify-center items-center p-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.5 }} className="w-full max-w-3xl xl:w-xl xl:h-md rounded-lg overflow-hidden rounded-t-full ring-offset-3 ring-1">
          <Image src={ourImage} alt="Our Image" className=" rounded-t-full w-full" />
        </motion.div>
        <p className="text-center pt-4 ">With great pleasure, we joyously seek the honour of your presence prayers and blessings with family at our wedding!</p>
      </section>
    </main>
  );
};

export default Home;
