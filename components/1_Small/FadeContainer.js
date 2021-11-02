import { motion } from "framer-motion";
export const FadeContainer = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      opa
    >
      {children}
    </motion.div>
  );
};
