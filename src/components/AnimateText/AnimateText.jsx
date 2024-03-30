import * as React from 'react';
import { motion } from 'framer-motion';

export default function AnimateText({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: index * 0.6 }} // Delay each child by 0.2s
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
