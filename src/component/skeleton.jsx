import { motion } from "framer-motion";

export function SkeletonBlock({ className = "", style = {} }) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-md bg-[#D9CBB3]/60 ${className}`}
      style={style}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: [0.45, 0.7, 0.45] }}
      transition={{ duration: 1.6, ease: "easeInOut", repeat: Infinity }}
    />
  );
}

export function SkeletonText({ className = "" }) {
  return <SkeletonBlock className={`h-4 rounded-full ${className}`} />;
}

export function SkeletonImage({ className = "" }) {
  return <SkeletonBlock className={`w-full rounded-none ${className}`} />;
}

export function SkeletonButton({ className = "" }) {
  return <SkeletonBlock className={`rounded-full ${className}`} />;
}
