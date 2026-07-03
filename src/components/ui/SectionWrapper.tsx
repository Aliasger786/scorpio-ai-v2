import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: 'default' | 'grid' | 'gradient';
}

export function SectionWrapper({
  children,
  className,
  variant = 'default',
  ...props
}: SectionWrapperProps) {
  return (
    <section
      className={cn(
        "py-24 relative overflow-hidden",
        variant === 'grid' && "grid-bg",
        variant === 'gradient' && "gradient-bg",
        className
      )}
      {...props}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            }
          }
        }}
        className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl"
      >
        {children}
      </motion.div>
    </section>
  );
}
