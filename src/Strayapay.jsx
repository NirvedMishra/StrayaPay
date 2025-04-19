import React, { useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function StrayapayLanding() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div>
      <div className={`min-h-screen text-gray-900 ${darkMode && "text-white bg-gray-900"} transition-colors duration-700 bg-no-repeat bg-center bg-cover ${darkMode?"bg-[url(/images/background.png)]":"bg-[url(/images/background-light.png)]"}`}> 

        <nav className="flex justify-between items-center p-4 max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold">Strayapay</h1>
          <motion.button
           whileTap={{ rotate: 90 }}
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded  cursor-pointer`}
          >
            {darkMode ? <Sun /> : <Moon />}
          </motion.button>
        </nav>
        <section className="flex flex-col items-center justify-center text-center py-20 px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4"><motion.h2
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Seamless QR Payments for Everyone
</motion.h2></h2>
          <p className="text-lg md:text-xl max-w-xl mb-10">
            Strayapay makes it incredibly easy for merchants and customers to exchange payments using simple, secure QR codes.
          </p>
          <div className={`animate-pulse w-64 h-64 rounded-xl  ${darkMode?"bg-white/10":"bg-white/40"}  flex items-center justify-center text-gray-500 dark:text-gray-400`}>
            QR Code Placeholder
          </div>
        </section>
        <section className={` py-16 px-4`}>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
   className={`${darkMode?"bg-white/10":"bg-white/20"} p-8 rounded-2xl shadow`}>
              <h3 className="text-2xl font-semibold mb-4">Merchants</h3>
              <p className="mb-4">Join our merchant waitlist to accept QR-based payments instantly.</p>
              <input type="email" placeholder="Your business email" className={`w-full outline-none p-3 rounded mb-3 ${darkMode?"bg-gray-700":"bg-gray-100"} focus:ring-2 focus:ring-blue-500 transition-all`} />
              <button className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white p-3 rounded">Join Waitlist</button>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
   className={`${darkMode?"bg-white/10":"bg-white/20"} p-8 rounded-2xl shadow`}>
              <h3 className="text-2xl font-semibold mb-4">Customers</h3>
              <p className="mb-4">Be the first to experience fast, easy QR payments with Strayapay.</p>
              <input type="email" placeholder="Your email" className={`w-full outline-none p-3 rounded mb-3 ${darkMode?"bg-gray-700":"bg-gray-100"} focus:ring-2 focus:ring-blue-500 transition-all`} />
              <button className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white p-3 rounded">Join Waitlist</button>
            </motion.div>
          </div>
        </section>
        <footer className="text-center text-sm py-6 text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Strayapay. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
