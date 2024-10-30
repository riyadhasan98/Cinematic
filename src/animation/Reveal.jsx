import React from 'react'
import { motion } from "framer-motion";
import { view } from 'framer-motion/client';

const Reveal = ({children}) => {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 150 },
          view: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="view"
        transition={{ duration: 0.8, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Reveal
