import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: React.ReactNode;
  neonBorder?: boolean;
  hoverGlow?: boolean;
  delay?: number;
}

export function GlassCard({
  children,
  className,
  neonBorder = false,
  hoverGlow = true,
  delay = 0,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={hoverGlow ? { scale: 1.02, transition: { duration: 0.2 } } : undefined}
      className={cn(
        "glass rounded-xl p-6 relative overflow-hidden transition-all duration-300",
        neonBorder && "neon-border",
        hoverGlow && "hover:glow-purple",
        className
      )}
      {...props}
    >
      {hoverGlow && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
