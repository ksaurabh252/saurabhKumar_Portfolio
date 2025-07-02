/* =========================
   ScrollReveal Component
   A reusable component that adds scroll-triggered animations to its children
   Uses Framer Motion for animations and react-intersection-observer for scroll detection
   ========================= */

// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const ScrollReveal = ({ children }) => {
  /* =========================
     Intersection Observer Hook
     Params:
     - threshold: 0.1 (10% of element must be visible)
     - triggerOnce: true (animation only plays once)
     Returns:
     - ref: element reference
     - inView: boolean indicating visibility
     ========================= */
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    /* =========================
       Animated Container
       - Uses motion.div for smooth animations
       - Applies fade-up effect when element comes into view
       - Wraps children with animation context
       ========================= */
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}  // Initial hidden state, 50px below
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}  // Animate to visible when in view
      transition={{ duration: 0.6 }}  // Smooth animation duration
    >
      {children}
    </motion.div>
  );
};
