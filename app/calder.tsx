"use client";
import { motion, useScroll, useTransform } from "framer-motion";

const Calendar = () => {
  return (
    <div className="max-w-8xl text-lite p-4">
      <p className="text-center text-4xl font-bold text-primary">May 2026</p>
      <div>
        <div className="grid grid-cols-7 gap-2 mt-4">
          <div className="text-center font-bold text-primary">Sun</div>
          <div className="text-center font-bold text-primary">Mon</div>
          <div className="text-center font-bold text-primary">Tue</div>
          <div className="text-center font-bold text-primary">Wed</div>
          <div className="text-center font-bold text-primary">Thu</div>
          <div className="text-center font-bold text-primary">Fri</div>
          <div className="text-center font-bold text-primary">Sat</div>

          {/* Empty cells for days before May 1st */}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>

          {/* Days of May */}
          {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
            // initial={{ opacity: 0, y: 30, scale: 0.98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.3, delay: day * 0.05 }} key={day} className={`text-center p-2 relative text-lg rounded ${day === 11 ? "font-bold text-red-600" : ""}`}>
              {day}
              {day == 11 && (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 absolute top-0 bottom-0 left-0 right-0 w-full">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
