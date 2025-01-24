import { AnimatePresence, motion } from 'motion/react';
import React, { useState } from 'react'

export default function Slider() {
    const [show, setShow] = useState(false);
    return (
      <>
        <AnimatePresence>
          {show && (
            <motion.div
              initial={{ x: "-100%" }}
              exit={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <p>This is a sidebar!</p>
            </motion.div>
          )}
        </AnimatePresence>
        <button onClick={() => setShow(!show)}>Show</button>
      </>
    );
}
